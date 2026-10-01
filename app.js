// Aphi Studio Production - Apple Liquid Glass Application Logic
class ProductionApp {
  constructor() {
    this.storageKey = "aphi_studio_production_v3";
    this.projects = this.loadProjects();
    if (!Array.isArray(this.projects) || this.projects.length === 0) {
      this.projects = JSON.parse(JSON.stringify(INITIAL_PROJECTS));
      this.saveProjects();
    }
    this.projects = this.loadProjects();
    this.activeProjectId = null;
    this.initDOM();
  }

  loadProjects() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error("Failed to parse saved projects, loading default demo", e);
      }
    }
    return JSON.parse(JSON.stringify(INITIAL_PROJECTS));
  }

  saveProjects() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.projects));
    if (this.activeProjectId) {
      this.updateWorkspaceStats();
    } else {
      this.renderLanding();
    }
  }

  getActiveProject() {
    return this.projects.find((p) => p.id === this.activeProjectId) || this.projects[0];
  }

  resetToDemoData() {
    if (confirm("Reset seluruh daftar proyek ke data demo bawaan?")) {
      this.projects = JSON.parse(JSON.stringify(INITIAL_PROJECTS));
      this.saveProjects();
      this.activeProjectId = null;
      this.navToLanding();
      alert("Proyek berhasil di-reset ke sample demo!");
    }
  }

  exportAllJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.projects, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `aphi_studio_projects_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importAllJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported) && imported.length > 0) {
          this.projects = imported;
          this.saveProjects();
          this.navToLanding();
          alert("Data proyek berhasil di-import!");
        } else {
          alert("Format file JSON tidak sesuai.");
        }
      } catch (err) {
        alert("Gagal membaca file JSON: " + err.message);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  initDOM() {
    this.setupWorkspaceTabs();
    this.navToLanding();
  }

  setupWorkspaceTabs() {
    const tabBtns = document.querySelectorAll(".seg-tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        document.querySelectorAll("#view-workspace .tab-pane").forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        const targetId = btn.getAttribute("data-tab");
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add("active");

        if (targetId === "tab-callsheet") {
          this.renderCallSheet();
        }
      });
    });
  }

  // ==========================================
  // NAVIGATION BETWEEN LANDING & WORKSPACE
  // ==========================================
  navToLanding() {
    this.activeProjectId = null;
    document.getElementById("view-landing").style.display = "block";
    document.getElementById("view-workspace").style.display = "none";
    document.getElementById("header-context-container").innerHTML = `
      <span class="badge badge-blue">Studio Management</span>
    `;
    document.getElementById("btn-header-primary").style.display = "inline-flex";
    document.getElementById("btn-header-primary").textContent = "+ Proyek Baru";
    document.getElementById("btn-header-primary").onclick = () => this.openNewProjectModal();
    this.renderLanding();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openProject(projectId) {
    this.activeProjectId = projectId;
    const proj = this.getActiveProject();
    if (!proj) return;

    document.getElementById("view-landing").style.display = "none";
    document.getElementById("view-workspace").style.display = "block";

    document.getElementById("header-context-container").innerHTML = `
      <div class="header-project-pill">
        <strong>${this.escapeHTML(proj.title)}</strong>
        <span class="badge badge-gold">Day ${proj.currentDay || 1}/${proj.totalDays || 1}</span>
      </div>
    `;

    document.getElementById("btn-header-primary").style.display = "inline-flex";
    document.getElementById("btn-header-primary").textContent = "🖨️ Cetak Call Sheet";
    document.getElementById("btn-header-primary").onclick = () => this.printCurrentCallSheet();

    // Reset active tab to Overview
    document.querySelectorAll(".seg-tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll("#view-workspace .tab-pane").forEach((p) => p.classList.remove("active"));
    const firstTabBtn = document.querySelector(`.seg-tab-btn[data-tab="tab-overview"]`);
    if (firstTabBtn) firstTabBtn.classList.add("active");
    const firstPane = document.getElementById("tab-overview");
    if (firstPane) firstPane.classList.add("active");

    this.renderWorkspaceAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================
  // VIEW 1: LANDING PAGE RENDERING
  // ==========================================
  renderLanding() {
    // Stats calculation
    let totalScenes = 0;
    let totalShots = 0;
    let totalGear = 0;

    this.projects.forEach((p) => {
      totalScenes += (p.scenes || []).length;
      totalShots += (p.shots || []).length;
      totalGear += (p.equipment || []).length;
    });

    document.getElementById("stat-landing-projects").textContent = this.projects.length;
    document.getElementById("stat-landing-scenes").textContent = totalScenes;
    document.getElementById("stat-landing-shots").textContent = totalShots;
    document.getElementById("stat-landing-gear").textContent = totalGear;

    const grid = document.getElementById("projects-grid-container");
    if (!grid) return;

    let html = "";
    this.projects.forEach((proj) => {
      const typeColor = proj.type.includes("TVC") ? "badge-blue" : (proj.type.includes("MV") ? "badge-purple" : "badge-gold");
      const statusColor = proj.status === "Ready to Shoot" ? "badge-green" : "badge-gold";

      html += `
        <div class="project-card" onclick="app.openProject('${proj.id}')">
          <div>
            <div class="project-card-header">
              <span class="badge ${typeColor}">${this.escapeHTML(proj.type)}</span>
              <span class="badge ${statusColor}">${this.escapeHTML(proj.status || "In Prep")}</span>
            </div>
            <h4 class="project-card-title">${this.escapeHTML(proj.title)}</h4>
            <div class="project-card-client">
              Klien: <strong>${this.escapeHTML(proj.client || "-")}</strong> &bull; Dir: <strong>${this.escapeHTML(proj.director || "-")}</strong>
            </div>

            <div class="project-card-stats">
              <span>🎬 <strong>${(proj.scenes || []).length}</strong> Scenes</span>
              <span>🎥 <strong>${(proj.shots || []).length}</strong> Shots</span>
              <span>🎭 <strong>${(proj.cast || []).length}</strong> Cast</span>
              <span>📦 <strong>${(proj.equipment || []).length}</strong> Gear</span>
            </div>
          </div>

          <div>
            <div class="project-card-footer">
              <span class="project-date-tag">
                📅 ${proj.shootDate || "Belum ada tgl"} (Day ${proj.currentDay || 1}/${proj.totalDays || 1})
              </span>
              <div style="display:flex; gap:0.4rem;" onclick="event.stopPropagation();">
                <button class="btn btn-glass btn-sm" onclick="app.openProject('${proj.id}')" title="Buka Workspace Produksi">Buka Workspace →</button>
                <button class="btn btn-danger-glass btn-sm" onclick="app.deleteProject('${proj.id}')" title="Hapus Proyek">🗑️</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    // Add New Project Card
    html += `
      <div class="project-card" style="border: 2px dashed rgba(0, 113, 227, 0.3); background: rgba(255, 255, 255, 0.4); display: flex; align-items: center; justify-content: center; text-align: center; min-height: 200px;" onclick="app.openNewProjectModal()">
        <div>
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">✨</div>
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--apple-blue); margin-bottom: 0.25rem;">Buat Proyek Baru</h4>
          <p style="font-size: 0.8rem; color: var(--apple-text-sub);">TVC, Music Video, Film Pendek, atau Dokumenter</p>
        </div>
      </div>
    `;

    grid.innerHTML = html;
  }

  openNewProjectModal() {
    document.getElementById("np-title").value = "";
    document.getElementById("np-client").value = "";
    document.getElementById("np-director").value = "";
    document.getElementById("np-shoot-date").value = new Date().toISOString().split("T")[0];
    this.openModal("modal-new-project");
  }

  submitNewProject() {
    const title = document.getElementById("np-title").value.trim();
    if (!title) return;

    const newProj = {
      id: `proj_${Date.now()}`,
      title,
      type: document.getElementById("np-type").value,
      status: "In Prep",
      client: document.getElementById("np-client").value.trim() || "-",
      agency: "-",
      productionCompany: "Aphi Studio Production",
      director: document.getElementById("np-director").value.trim() || "-",
      producer: "-",
      firstAD: "-",
      dop: "-",
      currentDay: 1,
      totalDays: 1,
      shootDate: document.getElementById("np-shoot-date").value || "",
      weather: "Cerah, 28°C",
      sunrise: "05:30 AM",
      sunset: "17:45 PM",
      generalCall: "06:00 AM",
      locationName: "Studio Set Utama",
      locationAddress: "",
      parkingNotes: "Parkir area produksi",
      hospitalName: "RS Terdekat 24 Jam",
      hospitalAddress: "",
      hospitalPhone: "",
      scenes: [],
      shots: [],
      cast: [],
      crew: [],
      equipment: [],
      daySchedule: [
        { time: "06:00 AM", activity: "Crew Call & Breakfast" },
        { time: "07:00 AM", activity: "Cast Hair & Makeup" },
        { time: "08:00 AM", activity: "Roll Camera Scene 1" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "18:00 PM", activity: "Estimated Wrap" }
      ],
      departmentNotes: {
        production: "Patuhi call time dan jaga kebersihan set.",
        camera: "Backup media berkala.",
        lighting: "Safety first.",
        sound: "Hening saat roll sound.",
        art: "Siapkan props sebelum blocking."
      }
    };

    this.projects.push(newProj);
    this.saveProjects();
    this.closeModal("modal-new-project");
    this.openProject(newProj.id);
  }

  deleteProject(id) {
    const p = this.projects.find((item) => item.id === id);
    if (!p) return;
    if (confirm(`Yakin ingin menghapus proyek "${p.title}"?`)) {
      this.projects = this.projects.filter((item) => item.id !== id);
      this.saveProjects();
      this.renderLanding();
    }
  }

  // ==========================================
  // VIEW 2: WORKSPACE RENDERING
  // ==========================================
  renderWorkspaceAll() {
    const p = this.getActiveProject();
    if (!p) return;

    // Header info
    document.getElementById("ws-project-title").textContent = p.title || "Untitled";
    document.getElementById("ws-project-type").textContent = p.type || "Film/Video";
    document.getElementById("ws-day-badge").textContent = `Day ${p.currentDay || 1} of ${p.totalDays || 1}`;
    document.getElementById("ws-project-sub").innerHTML = `Klien: <strong>${this.escapeHTML(p.client || "-")}</strong> &bull; Sutradara: <strong>${this.escapeHTML(p.director || "-")}</strong> &bull; Tanggal: <strong>${p.shootDate || "-"}</strong>`;

    this.updateWorkspaceStats();
    this.renderWorkspaceProjectForm();
    this.renderScenes();
    this.renderShotList();
    this.renderCast();
    this.renderCrew();
    this.renderEquipment();
    this.renderCallSheet();
  }

  updateWorkspaceStats() {
    const p = this.getActiveProject();
    if (!p) return;
    document.getElementById("stat-ws-scenes").textContent = (p.scenes || []).length;
    document.getElementById("stat-ws-shots").textContent = (p.shots || []).length;
    document.getElementById("stat-ws-cast").textContent = (p.cast || []).length;
    document.getElementById("stat-ws-crew-gear").textContent = `${(p.crew || []).length} Kru / ${(p.equipment || []).length} Gear`;
  }

  // --- TAB 1: OVERVIEW & DETAILS ---
  renderWorkspaceProjectForm() {
    const p = this.getActiveProject();
    if (!p) return;

    document.getElementById("ws-inp-title").value = p.title || "";
    document.getElementById("ws-inp-type").value = p.type || "Commercial (TVC & Digital)";
    document.getElementById("ws-inp-status").value = p.status || "In Prep";
    document.getElementById("ws-inp-client").value = p.client || "";
    document.getElementById("ws-inp-agency").value = p.agency || "";
    document.getElementById("ws-inp-director").value = p.director || "";
    document.getElementById("ws-inp-producer").value = p.producer || "";
    document.getElementById("ws-inp-first-ad").value = p.firstAD || "";
    document.getElementById("ws-inp-dop").value = p.dop || "";

    document.getElementById("ws-inp-shoot-date").value = p.shootDate || "";
    document.getElementById("ws-inp-current-day").value = p.currentDay || 1;
    document.getElementById("ws-inp-total-days").value = p.totalDays || 1;
    document.getElementById("ws-inp-general-call").value = p.generalCall || "06:00 AM";
    document.getElementById("ws-inp-sunrise").value = p.sunrise || "05:30 AM";
    document.getElementById("ws-inp-sunset").value = p.sunset || "17:45 PM";
    document.getElementById("ws-inp-weather").value = p.weather || "";
    document.getElementById("ws-inp-location-name").value = p.locationName || "";
    document.getElementById("ws-inp-location-address").value = p.locationAddress || "";
    document.getElementById("ws-inp-parking-notes").value = p.parkingNotes || "";
    document.getElementById("ws-inp-hospital-name").value = p.hospitalName || "";
    document.getElementById("ws-inp-hospital-address").value = p.hospitalAddress || "";
    document.getElementById("ws-inp-hospital-phone").value = p.hospitalPhone || "";
  }

  saveActiveProjectDetails() {
    const p = this.getActiveProject();
    if (!p) return;

    p.title = document.getElementById("ws-inp-title").value.trim();
    p.type = document.getElementById("ws-inp-type").value;
    p.status = document.getElementById("ws-inp-status").value;
    p.client = document.getElementById("ws-inp-client").value.trim();
    p.agency = document.getElementById("ws-inp-agency").value.trim();
    p.director = document.getElementById("ws-inp-director").value.trim();
    p.producer = document.getElementById("ws-inp-producer").value.trim();
    p.firstAD = document.getElementById("ws-inp-first-ad").value.trim();
    p.dop = document.getElementById("ws-inp-dop").value.trim();

    p.shootDate = document.getElementById("ws-inp-shoot-date").value;
    p.currentDay = parseInt(document.getElementById("ws-inp-current-day").value) || 1;
    p.totalDays = parseInt(document.getElementById("ws-inp-total-days").value) || 1;
    p.generalCall = document.getElementById("ws-inp-general-call").value.trim();
    p.sunrise = document.getElementById("ws-inp-sunrise").value.trim();
    p.sunset = document.getElementById("ws-inp-sunset").value.trim();
    p.weather = document.getElementById("ws-inp-weather").value.trim();
    p.locationName = document.getElementById("ws-inp-location-name").value.trim();
    p.locationAddress = document.getElementById("ws-inp-location-address").value.trim();
    p.parkingNotes = document.getElementById("ws-inp-parking-notes").value.trim();
    p.hospitalName = document.getElementById("ws-inp-hospital-name").value.trim();
    p.hospitalAddress = document.getElementById("ws-inp-hospital-address").value.trim();
    p.hospitalPhone = document.getElementById("ws-inp-hospital-phone").value.trim();

    this.saveProjects();
    this.renderWorkspaceAll();
    alert("Data proyek berhasil disimpan!");
  }

  // --- TAB 2: SCRIPT BREAKDOWN ---
  renderScenes() {
    const p = this.getActiveProject();
    const container = document.getElementById("scenes-list-container");
    if (!p || !p.scenes || p.scenes.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--apple-text-sub);">Belum ada adegan. Klik <strong>+ Tambah Adegan</strong> untuk memulai script breakdown.</div>`;
      return;
    }

    let html = "";
    p.scenes.forEach((sc) => {
      const isExt = (sc.setting || "").includes("EXT");
      const settingBadge = isExt ? `<span class="badge badge-gold">EXT</span>` : `<span class="badge badge-blue">INT</span>`;
      const timeBadge = `<span class="badge badge-purple">${sc.timeOfDay || "DAY"}</span>`;

      const renderBubbles = (items) => {
        if (!items || items.length === 0) return `<span style="color:var(--apple-text-tertiary); font-size:0.7rem;">-</span>`;
        return items.map((it) => `<span class="tag-bubble">${this.escapeHTML(it)}</span>`).join("");
      };

      html += `
        <div class="scene-strip-card">
          <div class="scene-strip-head">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="badge badge-blue" style="font-weight:800;">SC ${sc.sceneNumber}</span>
              ${settingBadge}
              ${timeBadge}
              <strong style="font-family:var(--font-mono); font-size:0.88rem;">${this.escapeHTML(sc.slugline || `${sc.setting}. ${sc.location} - ${sc.timeOfDay}`)}</strong>
            </div>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <span style="font-size:0.75rem; color:var(--apple-text-sub);">${sc.pages || "1 page"}</span>
              <button class="btn btn-glass btn-sm" onclick="app.editScene('${sc.id}')">Edit</button>
              <button class="btn btn-danger-glass btn-sm" onclick="app.deleteScene('${sc.id}')">Hapus</button>
            </div>
          </div>
          <div class="scene-strip-body">
            <p style="font-size:0.83rem; margin-bottom:0.6rem; color:var(--apple-dark);">
              <strong>Sinopsis:</strong> ${this.escapeHTML(sc.synopsis || "-")}
            </p>
            <div class="grid-4" style="background:rgba(0,0,0,0.02); padding:0.6rem; border-radius:8px;">
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">🎭 Cast</span>
                <div class="tag-bubble-row">${renderBubbles(sc.cast)}</div>
              </div>
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">📦 Props</span>
                <div class="tag-bubble-row">${renderBubbles(sc.props)}</div>
              </div>
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">👔 Wardrobe</span>
                <div class="tag-bubble-row">${renderBubbles(sc.wardrobe)}</div>
              </div>
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">✨ FX / Grip</span>
                <div class="tag-bubble-row">${renderBubbles(sc.fx)}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    this.updateSceneSelectOptions();
  }

  updateSceneSelectOptions() {
    const p = this.getActiveProject();
    if (!p) return;
    const filterSelect = document.getElementById("filter-shot-scene");
    const currentVal = filterSelect.value;
    filterSelect.innerHTML = `<option value="ALL">Semua Adegan</option>` +
      (p.scenes || []).map((s) => `<option value="${s.id}">Scene ${s.sceneNumber}: ${this.escapeHTML(s.location || s.slugline)}</option>`).join("");
    if ((p.scenes || []).some(s => s.id === currentVal)) filterSelect.value = currentVal;

    const modalSelect = document.getElementById("sht-scene-id");
    if (modalSelect) {
      modalSelect.innerHTML = (p.scenes || []).map((s) => `<option value="${s.id}">Scene ${s.sceneNumber} (${s.setting}. ${s.location})</option>`).join("");
    }
  }

  openAddSceneModal() {
    const p = this.getActiveProject();
    document.getElementById("modal-scene-title").textContent = "Tambah Adegan (Scene)";
    document.getElementById("scene-form-id").value = "";
    document.getElementById("sf-num").value = ((p.scenes || []).length + 1).toString();
    document.getElementById("sf-setting").value = "INT";
    document.getElementById("sf-time").value = "DAY";
    document.getElementById("sf-location").value = "";
    document.getElementById("sf-pages").value = "1 page";
    document.getElementById("sf-synopsis").value = "";
    document.getElementById("sf-cast").value = "";
    document.getElementById("sf-props").value = "";
    document.getElementById("sf-wardrobe").value = "";
    document.getElementById("sf-fx").value = "";
    this.openModal("modal-scene");
  }

  editScene(id) {
    const p = this.getActiveProject();
    const sc = (p.scenes || []).find((s) => s.id === id);
    if (!sc) return;
    document.getElementById("modal-scene-title").textContent = `Edit Scene ${sc.sceneNumber}`;
    document.getElementById("scene-form-id").value = sc.id;
    document.getElementById("sf-num").value = sc.sceneNumber;
    document.getElementById("sf-setting").value = sc.setting || "INT";
    document.getElementById("sf-time").value = sc.timeOfDay || "DAY";
    document.getElementById("sf-location").value = sc.location || "";
    document.getElementById("sf-pages").value = sc.pages || "";
    document.getElementById("sf-synopsis").value = sc.synopsis || "";
    document.getElementById("sf-cast").value = (sc.cast || []).join(", ");
    document.getElementById("sf-props").value = (sc.props || []).join(", ");
    document.getElementById("sf-wardrobe").value = (sc.wardrobe || []).join(", ");
    document.getElementById("sf-fx").value = (sc.fx || []).join(", ");
    this.openModal("modal-scene");
  }

  saveSceneForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("scene-form-id").value;
    const num = document.getElementById("sf-num").value.trim();
    const setting = document.getElementById("sf-setting").value;
    const timeOfDay = document.getElementById("sf-time").value;
    const location = document.getElementById("sf-location").value.trim();
    const pages = document.getElementById("sf-pages").value.trim();
    const synopsis = document.getElementById("sf-synopsis").value.trim();

    const parseList = (str) => str.split(",").map((s) => s.trim()).filter(Boolean);

    const sceneData = {
      id: id || `sc_${Date.now()}`,
      sceneNumber: num,
      slugline: `${setting}. ${location.toUpperCase()} - ${timeOfDay}`,
      setting,
      timeOfDay,
      location,
      pages: pages || "1 page",
      synopsis,
      cast: parseList(document.getElementById("sf-cast").value),
      props: parseList(document.getElementById("sf-props").value),
      wardrobe: parseList(document.getElementById("sf-wardrobe").value),
      fx: parseList(document.getElementById("sf-fx").value)
    };

    if (id) {
      const idx = p.scenes.findIndex((s) => s.id === id);
      if (idx !== -1) p.scenes[idx] = sceneData;
    } else {
      if (!p.scenes) p.scenes = [];
      p.scenes.push(sceneData);
    }

    this.saveProjects();
    this.renderScenes();
    this.renderCallSheet();
    this.closeModal("modal-scene");
  }

  deleteScene(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus adegan ini beserta shot terkait?")) {
      p.scenes = p.scenes.filter((s) => s.id !== id);
      p.shots = (p.shots || []).filter((sh) => sh.sceneId !== id);
      this.saveProjects();
      this.renderScenes();
      this.renderShotList();
      this.renderCallSheet();
    }
  }

  // --- TAB 3: SHOT LIST ---
  renderShotList() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("shot-list-table-body");
    const filter = document.getElementById("filter-shot-scene").value;

    let filtered = p.shots || [];
    if (filter && filter !== "ALL") {
      filtered = filtered.filter((s) => s.sceneId === filter);
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada shot. Klik <strong>+ Tambah Shot</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((sh) => {
      const parentScene = (p.scenes || []).find((s) => s.id === sh.sceneId);
      const isTaken = sh.status === "Taken";
      const statusBadge = isTaken 
        ? `<span class="badge badge-green" style="cursor:pointer;" onclick="app.toggleShotStatus('${sh.id}')">✓ Taken</span>`
        : `<span class="badge badge-gold" style="cursor:pointer;" onclick="app.toggleShotStatus('${sh.id}')">Planned</span>`;

      return `
        <tr style="${isTaken ? 'opacity:0.6;' : ''}">
          <td>${statusBadge}</td>
          <td><strong style="color:var(--apple-blue); font-size:0.9rem;">${sh.shotNumber}</strong></td>
          <td><span class="badge badge-blue">SC ${parentScene ? parentScene.sceneNumber : "?"}</span></td>
          <td><strong>${this.escapeHTML(sh.size)}</strong><br><span style="font-size:0.72rem; color:var(--apple-text-tertiary);">${this.escapeHTML(sh.angle || "")}</span></td>
          <td>${this.escapeHTML(sh.movement || "Static")}</td>
          <td>${this.escapeHTML(sh.lens || "-")}</td>
          <td>${this.escapeHTML(sh.fps || "24 fps")}</td>
          <td style="max-width:280px;">${this.escapeHTML(sh.description || "")}</td>
          <td>
            <div style="display:flex; gap:0.25rem;">
              <button class="btn btn-glass btn-sm" onclick="app.editShot('${sh.id}')">✏️</button>
              <button class="btn btn-danger-glass btn-sm" onclick="app.deleteShot('${sh.id}')">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  toggleShotStatus(id) {
    const p = this.getActiveProject();
    const sh = (p.shots || []).find((s) => s.id === id);
    if (!sh) return;
    sh.status = sh.status === "Taken" ? "Planned" : "Taken";
    this.saveProjects();
    this.renderShotList();
  }

  openAddShotModal() {
    const p = this.getActiveProject();
    if (!p.scenes || p.scenes.length === 0) {
      alert("Harap buat minimal 1 adegan di Script Breakdown terlebih dahulu.");
      return;
    }
    document.getElementById("modal-shot-title").textContent = "Tambah Shot";
    document.getElementById("shot-form-id").value = "";
    this.updateSceneSelectOptions();
    document.getElementById("sht-num").value = `${(p.shots || []).length + 1}A`;
    document.getElementById("sht-movement").value = "";
    document.getElementById("sht-lens").value = "";
    document.getElementById("sht-desc").value = "";
    this.openModal("modal-shot");
  }

  editShot(id) {
    const p = this.getActiveProject();
    const sh = (p.shots || []).find((s) => s.id === id);
    if (!sh) return;
    document.getElementById("modal-shot-title").textContent = `Edit Shot ${sh.shotNumber}`;
    document.getElementById("shot-form-id").value = sh.id;
    this.updateSceneSelectOptions();
    document.getElementById("sht-scene-id").value = sh.sceneId;
    document.getElementById("sht-num").value = sh.shotNumber;
    document.getElementById("sht-size").value = sh.size;
    document.getElementById("sht-angle").value = sh.angle || "Eye Level";
    document.getElementById("sht-movement").value = sh.movement || "";
    document.getElementById("sht-lens").value = sh.lens || "";
    document.getElementById("sht-fps").value = sh.fps || "24 fps";
    document.getElementById("sht-desc").value = sh.description || "";
    this.openModal("modal-shot");
  }

  saveShotForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("shot-form-id").value;
    const shotData = {
      id: id || `shot_${Date.now()}`,
      sceneId: document.getElementById("sht-scene-id").value,
      shotNumber: document.getElementById("sht-num").value.trim(),
      size: document.getElementById("sht-size").value,
      angle: document.getElementById("sht-angle").value,
      movement: document.getElementById("sht-movement").value.trim(),
      lens: document.getElementById("sht-lens").value.trim(),
      fps: document.getElementById("sht-fps").value,
      status: "Planned",
      description: document.getElementById("sht-desc").value.trim()
    };

    if (id) {
      const idx = p.shots.findIndex((s) => s.id === id);
      if (idx !== -1) {
        shotData.status = p.shots[idx].status;
        p.shots[idx] = shotData;
      }
    } else {
      if (!p.shots) p.shots = [];
      p.shots.push(shotData);
    }

    this.saveProjects();
    this.renderShotList();
    this.closeModal("modal-shot");
  }

  deleteShot(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus shot ini?")) {
      p.shots = p.shots.filter((s) => s.id !== id);
      this.saveProjects();
      this.renderShotList();
    }
  }

  // --- TAB 4: CAST & CREW ---
  renderCast() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("cast-table-body");
    if (!p.cast || p.cast.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada cast. Klik <strong>+ Tambah Cast</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = p.cast.map((c) => `
      <tr>
        <td><strong>${c.castNumber || "#"}</strong></td>
        <td><strong>${this.escapeHTML(c.characterName)}</strong><br><span style="font-size:0.72rem; color:var(--apple-text-tertiary);">${this.escapeHTML(c.role || "")}</span></td>
        <td>${this.escapeHTML(c.actorName)}<br><span style="font-size:0.72rem; color:var(--apple-text-sub);">${this.escapeHTML(c.phone || "")}</span></td>
        <td><span class="badge badge-gold">${c.pickupTime || "-"}</span></td>
        <td>${c.hmuTime || "-"}</td>
        <td><span class="badge badge-blue">${c.onSetTime || "-"}</span></td>
        <td>
          <button class="btn btn-glass btn-sm" onclick="app.editCast('${c.id}')">✏️</button>
          <button class="btn btn-danger-glass btn-sm" onclick="app.deleteCast('${c.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddCastModal() {
    document.getElementById("cast-form-id").value = "";
    document.getElementById("cst-character").value = "";
    document.getElementById("cst-actor").value = "";
    document.getElementById("cst-role").value = "Lead Talent";
    document.getElementById("cst-phone").value = "";
    document.getElementById("cst-pickup").value = "06:30 AM";
    document.getElementById("cst-hmu").value = "07:00 AM";
    document.getElementById("cst-onset").value = "08:00 AM";
    document.getElementById("cst-notes").value = "";
    this.openModal("modal-cast");
  }

  editCast(id) {
    const p = this.getActiveProject();
    const c = (p.cast || []).find((item) => item.id === id);
    if (!c) return;
    document.getElementById("cast-form-id").value = c.id;
    document.getElementById("cst-character").value = c.characterName || "";
    document.getElementById("cst-actor").value = c.actorName || "";
    document.getElementById("cst-role").value = c.role || "";
    document.getElementById("cst-phone").value = c.phone || "";
    document.getElementById("cst-pickup").value = c.pickupTime || "";
    document.getElementById("cst-hmu").value = c.hmuTime || "";
    document.getElementById("cst-onset").value = c.onSetTime || "";
    document.getElementById("cst-notes").value = c.notes || "";
    this.openModal("modal-cast");
  }

  saveCastForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("cast-form-id").value;
    const castData = {
      id: id || `cast_${Date.now()}`,
      castNumber: ((p.cast || []).length + 1).toString(),
      characterName: document.getElementById("cst-character").value.trim(),
      actorName: document.getElementById("cst-actor").value.trim(),
      role: document.getElementById("cst-role").value.trim(),
      phone: document.getElementById("cst-phone").value.trim(),
      pickupTime: document.getElementById("cst-pickup").value.trim(),
      hmuTime: document.getElementById("cst-hmu").value.trim(),
      onSetTime: document.getElementById("cst-onset").value.trim(),
      notes: document.getElementById("cst-notes").value.trim()
    };

    if (id) {
      const idx = p.cast.findIndex((item) => item.id === id);
      if (idx !== -1) {
        castData.castNumber = p.cast[idx].castNumber;
        p.cast[idx] = castData;
      }
    } else {
      if (!p.cast) p.cast = [];
      p.cast.push(castData);
    }

    this.saveProjects();
    this.renderCast();
    this.renderCallSheet();
    this.closeModal("modal-cast");
  }

  deleteCast(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus cast ini?")) {
      p.cast = p.cast.filter((c) => c.id !== id);
      this.saveProjects();
      this.renderCast();
      this.renderCallSheet();
    }
  }

  renderCrew() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("crew-table-body");
    if (!p.crew || p.crew.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada kru. Klik <strong>+ Tambah Kru</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = p.crew.map((cr) => `
      <tr>
        <td><span class="badge badge-purple">${this.escapeHTML(cr.department)}</span></td>
        <td><strong>${this.escapeHTML(cr.role)}</strong></td>
        <td>${this.escapeHTML(cr.name)}</td>
        <td><span class="badge badge-gold">${cr.callTime || "-"}</span></td>
        <td>
          <button class="btn btn-glass btn-sm" onclick="app.editCrew('${cr.id}')">✏️</button>
          <button class="btn btn-danger-glass btn-sm" onclick="app.deleteCrew('${cr.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddCrewModal() {
    document.getElementById("crew-form-id").value = "";
    document.getElementById("crw-name").value = "";
    document.getElementById("crw-phone").value = "";
    document.getElementById("crw-call").value = "06:00 AM";
    this.openModal("modal-crew");
  }

  editCrew(id) {
    const p = this.getActiveProject();
    const cr = (p.crew || []).find((c) => c.id === id);
    if (!cr) return;
    document.getElementById("crew-form-id").value = cr.id;
    document.getElementById("crw-dept").value = cr.department;
    document.getElementById("crw-role").value = cr.role;
    document.getElementById("crw-name").value = cr.name;
    document.getElementById("crw-phone").value = cr.phone || "";
    document.getElementById("crw-call").value = cr.callTime || "";
    this.openModal("modal-crew");
  }

  saveCrewForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("crew-form-id").value;
    const crewData = {
      id: id || `cr_${Date.now()}`,
      department: document.getElementById("crw-dept").value,
      role: document.getElementById("crw-role").value.trim(),
      name: document.getElementById("crw-name").value.trim(),
      phone: document.getElementById("crw-phone").value.trim(),
      callTime: document.getElementById("crw-call").value.trim()
    };

    if (id) {
      const idx = p.crew.findIndex((c) => c.id === id);
      if (idx !== -1) p.crew[idx] = crewData;
    } else {
      if (!p.crew) p.crew = [];
      p.crew.push(crewData);
    }

    this.saveProjects();
    this.renderCrew();
    this.renderCallSheet();
    this.closeModal("modal-crew");
  }

  deleteCrew(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus kru ini?")) {
      p.crew = p.crew.filter((c) => c.id !== id);
      this.saveProjects();
      this.renderCrew();
      this.renderCallSheet();
    }
  }

  // --- TAB 5: EQUIPMENT ---
  renderEquipment() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("equipment-table-body");
    if (!p.equipment || p.equipment.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada peralatan. Klik <strong>+ Tambah Gear</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = p.equipment.map((eq) => `
      <tr>
        <td><span class="badge badge-blue">${this.escapeHTML(eq.category)}</span></td>
        <td><strong>${this.escapeHTML(eq.item)}</strong></td>
        <td>${this.escapeHTML(eq.qty || "1")}</td>
        <td>${this.escapeHTML(eq.source || "Rental")}</td>
        <td><span class="badge badge-green">${this.escapeHTML(eq.status || "Checked")}</span></td>
        <td>
          <button class="btn btn-glass btn-sm" onclick="app.editEquipment('${eq.id}')">✏️</button>
          <button class="btn btn-danger-glass btn-sm" onclick="app.deleteEquipment('${eq.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddEquipmentModal() {
    document.getElementById("eq-form-id").value = "";
    document.getElementById("eqf-name").value = "";
    document.getElementById("eqf-qty").value = "1 unit";
    document.getElementById("eqf-source").value = "Rental";
    this.openModal("modal-equipment");
  }

  editEquipment(id) {
    const p = this.getActiveProject();
    const eq = (p.equipment || []).find((e) => e.id === id);
    if (!eq) return;
    document.getElementById("eq-form-id").value = eq.id;
    document.getElementById("eqf-category").value = eq.category;
    document.getElementById("eqf-name").value = eq.item;
    document.getElementById("eqf-qty").value = eq.qty || "";
    document.getElementById("eqf-source").value = eq.source || "";
    document.getElementById("eqf-status").value = eq.status || "Checked / Ready";
    this.openModal("modal-equipment");
  }

  saveEquipmentForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("eq-form-id").value;
    const eqData = {
      id: id || `eq_${Date.now()}`,
      category: document.getElementById("eqf-category").value,
      item: document.getElementById("eqf-name").value.trim(),
      qty: document.getElementById("eqf-qty").value.trim(),
      source: document.getElementById("eqf-source").value.trim(),
      status: document.getElementById("eqf-status").value
    };

    if (id) {
      const idx = p.equipment.findIndex((e) => e.id === id);
      if (idx !== -1) p.equipment[idx] = eqData;
    } else {
      if (!p.equipment) p.equipment = [];
      p.equipment.push(eqData);
    }

    this.saveProjects();
    this.renderEquipment();
    this.closeModal("modal-equipment");
  }

  deleteEquipment(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus peralatan ini?")) {
      p.equipment = p.equipment.filter((e) => e.id !== id);
      this.saveProjects();
      this.renderEquipment();
    }
  }

  // --- TAB 6: CALL SHEET ---
  renderCallSheet() {
    const cs = document.getElementById("printable-callsheet");
    const d = this.getActiveProject();
    if (!cs || !d) return;

    const scenesRows = (d.scenes || []).map((s) => `
      <tr>
        <td style="text-align:center; font-weight:bold;">${s.sceneNumber}</td>
        <td><strong>${s.setting}.</strong></td>
        <td>${s.timeOfDay}</td>
        <td><strong>${this.escapeHTML(s.location || "")}</strong></td>
        <td style="text-align:center;">${s.pages || "1"}</td>
        <td>${this.escapeHTML((s.cast || []).join(", "))}</td>
        <td>${this.escapeHTML(s.synopsis || "")}</td>
      </tr>
    `).join("");

    const castRows = (d.cast || []).map((c) => `
      <tr>
        <td style="text-align:center; font-weight:bold;">${c.castNumber}</td>
        <td><strong>${this.escapeHTML(c.characterName)}</strong></td>
        <td>${this.escapeHTML(c.actorName)}</td>
        <td style="text-align:center;">${c.pickupTime || "-"}</td>
        <td style="text-align:center;">${c.hmuTime || "-"}</td>
        <td style="text-align:center; font-weight:bold; background:#fef3c7;">${c.onSetTime || "-"}</td>
        <td>${this.escapeHTML(c.notes || "-")}</td>
      </tr>
    `).join("");

    const scheduleRows = (d.daySchedule || []).map((sch) => `
      <tr>
        <td style="width:90px; font-weight:bold;">${sch.time}</td>
        <td>${this.escapeHTML(sch.activity)}</td>
      </tr>
    `).join("");

    const notes = d.departmentNotes || {};

    cs.innerHTML = `
      <div class="cs-header">
        <div class="cs-title-bar">
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#6b7280; font-weight:bold;">
              ${this.escapeHTML(d.productionCompany || "APHI STUDIO PRODUCTION")} &bull; ${this.escapeHTML(d.type || "VIDEO PRODUCTION")}
            </div>
            <h1 class="cs-main-title">${this.escapeHTML(d.title || "UNTITLED PRODUCTION")}</h1>
            <div style="font-size:11px; color:#4b5563;">
              Klien: <strong>${this.escapeHTML(d.client || "-")}</strong> &bull; Agency: <strong>${this.escapeHTML(d.agency || "-")}</strong>
            </div>
          </div>
          <div style="text-align:right;">
            <div class="cs-badge-day">DAY ${d.currentDay || 1} OF ${d.totalDays || 1}</div>
            <div style="font-size:14px; font-weight:bold; margin-top:4px;">DATE: ${d.shootDate || "-"}</div>
            <div style="font-size:14px; color:#b45309; font-weight:900;">CREW CALL: ${d.generalCall || "06:00 AM"}</div>
          </div>
        </div>

        <div class="cs-sub-bar">
          <div>🌅 SUNRISE: ${d.sunrise || "05:30 AM"} | 🌇 SUNSET: ${d.sunset || "17:45 PM"}</div>
          <div>⛅ WEATHER: ${this.escapeHTML(d.weather || "Cerah")}</div>
        </div>
      </div>

      <div class="cs-info-grid">
        <div class="cs-box">
          <div class="cs-box-title">📍 SET LOCATION & BASECAMP</div>
          <div style="font-size:13px; font-weight:bold;">${this.escapeHTML(d.locationName || "-")}</div>
          <div style="font-size:11px; margin-top:2px;">${this.escapeHTML(d.locationAddress || "-")}</div>
          <div style="font-size:11px; margin-top:4px; color:#374151;"><strong>Catatan Parkir:</strong> ${this.escapeHTML(d.parkingNotes || "Sesuai petunjuk tim unit.")}</div>
        </div>

        <div class="cs-box cs-hospital-box">
          <div class="cs-box-title cs-hospital-title">🚨 NEAREST EMERGENCY HOSPITAL (IGD 24 JAM)</div>
          <div style="font-size:12px; font-weight:bold; color:#b91c1c;">${this.escapeHTML(d.hospitalName || "RS Terdekat")}</div>
          <div style="font-size:10px; margin-top:2px;">${this.escapeHTML(d.hospitalAddress || "-")}</div>
          <div style="font-size:12px; font-weight:bold; margin-top:4px; color:#991b1b;">TELP DARURAT: ${this.escapeHTML(d.hospitalPhone || "-")}</div>
        </div>
      </div>

      <div style="font-size:12px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:2px solid #111827;">
        🎬 SCENES TO SHOOT TODAY
      </div>
      <table class="cs-table">
        <thead>
          <tr>
            <th style="width:35px; text-align:center;">SC#</th>
            <th style="width:45px;">I/E</th>
            <th style="width:75px;">D/N</th>
            <th style="width:170px;">SET & LOCATION</th>
            <th style="width:45px; text-align:center;">PAGES</th>
            <th style="width:140px;">CAST</th>
            <th>SYNOPSIS / ACTION</th>
          </tr>
        </thead>
        <tbody>
          ${scenesRows || `<tr><td colspan="7" style="text-align:center;">Tidak ada scene terjadwal</td></tr>`}
        </tbody>
      </table>

      <div style="font-size:12px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:2px solid #111827;">
        🎭 CAST CALL TIMES
      </div>
      <table class="cs-table">
        <thead>
          <tr>
            <th style="width:35px; text-align:center;">ID</th>
            <th style="width:140px;">CHARACTER</th>
            <th style="width:140px;">ACTOR</th>
            <th style="width:70px; text-align:center;">PICKUP</th>
            <th style="width:70px; text-align:center;">H&MU</th>
            <th style="width:70px; text-align:center;">ON SET</th>
            <th>SPECIAL NOTES</th>
          </tr>
        </thead>
        <tbody>
          ${castRows || `<tr><td colspan="7" style="text-align:center;">Tidak ada data cast</td></tr>`}
        </tbody>
      </table>

      <div class="grid-2" style="gap:10px; margin-bottom:1rem;">
        <div>
          <div style="font-size:11px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:1px solid #111827;">
            ⏱️ ESTIMATED ADVANCE SCHEDULE
          </div>
          <table class="cs-table" style="margin-bottom:0;">
            <tbody>
              ${scheduleRows || `<tr><td>Jadwal menyusul dari 1st AD</td></tr>`}
            </tbody>
          </table>
        </div>

        <div>
          <div style="font-size:11px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:1px solid #111827;">
            📌 DEPARTMENT NOTES
          </div>
          <div style="font-size:10px; line-height:1.4;">
            <p><strong>PRODUCTION:</strong> ${this.escapeHTML(notes.production || "Tetap patuhi jadwal call time.")}</p>
            <p style="margin-top:3px;"><strong>CAMERA:</strong> ${this.escapeHTML(notes.camera || "Pastikan media card terbackup.")}</p>
            <p style="margin-top:3px;"><strong>LIGHTING:</strong> ${this.escapeHTML(notes.lighting || "Safety first untuk rigging.")}</p>
            <p style="margin-top:3px;"><strong>SOUND:</strong> ${this.escapeHTML(notes.sound || "Jaga ketenangan set.")}</p>
            <p style="margin-top:3px;"><strong>ART & WARDROBE:</strong> ${this.escapeHTML(notes.art || "Pastikan hero props siap.")}</p>
          </div>
        </div>
      </div>

      <div class="cs-footer">
        <div><strong>Director:</strong> ${this.escapeHTML(d.director || "-")}</div>
        <div><strong>Producer:</strong> ${this.escapeHTML(d.producer || "-")}</div>
        <div><strong>1st AD:</strong> ${this.escapeHTML(d.firstAD || "-")}</div>
        <div><strong>DoP:</strong> ${this.escapeHTML(d.dop || "-")}</div>
      </div>
    `;
  }

  printCurrentCallSheet() {
    const csBtn = document.querySelector(`.seg-tab-btn[data-tab="tab-callsheet"]`);
    if (csBtn) csBtn.click();
    this.renderCallSheet();
    window.print();
  }

  // --- MODAL UTILS ---
  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) {
      el.style.display = "flex";
      el.classList.add("open");
    }
  }

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) {
      el.style.display = "none";
      el.classList.remove("open");
    }
  }

  escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Instantiate globally
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new ProductionApp();
});
