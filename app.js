// CinePrep - Film & Video Production Prep Application Logic
class CinePrepApp {
  constructor() {
    this.storageKey = "cineprep_project_data_v1";
    this.data = this.loadData();
    this.initDOM();
  }

  loadData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved data, loading default demo", e);
      }
    }
    // Deep clone default project from demo-data.js
    return JSON.parse(JSON.stringify(DEFAULT_PROJECT));
  }

  saveData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    this.updateStatsAndBadges();
  }

  resetToDemoData() {
    if (confirm("Reset seluruh data proyek ke sample demo awal? Data yang belum diekspor akan hilang.")) {
      this.data = JSON.parse(JSON.stringify(DEFAULT_PROJECT));
      this.saveData();
      this.renderAll();
      alert("Proyek berhasil di-reset ke sample demo!");
    }
  }

  exportProjectJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 2));
    const downloadAnchor = document.createElement("a");
    const filename = `cineprep_${(this.data.title || "project").toLowerCase().replace(/[^a-z0-9]/g, "_")}.json`;
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importProjectJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && imported.title && Array.isArray(imported.scenes)) {
          this.data = imported;
          this.saveData();
          this.renderAll();
          alert("Proyek berhasil di-import!");
        } else {
          alert("File JSON tidak valid atau format proyek tidak cocok.");
        }
      } catch (err) {
        alert("Gagal membaca file JSON: " + err.message);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  initDOM() {
    this.setupTabs();
    this.renderAll();
  }

  setupTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach((p) => p.classList.remove("active"));

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

  renderAll() {
    this.renderProjectForm();
    this.updateStatsAndBadges();
    this.renderScenes();
    this.renderShotList();
    this.renderCast();
    this.renderCrew();
    this.renderEquipment();
    this.renderCallSheet();
  }

  updateStatsAndBadges() {
    document.getElementById("nav-brand-title").textContent = "CinePrep Studio";
    document.getElementById("top-project-title").textContent = this.data.title || "Untitled Project";
    document.getElementById("top-project-type").textContent = this.data.type || "Film/Video";
    document.getElementById("top-day-badge").textContent = `Day ${this.data.currentDay || 1} of ${this.data.totalDays || 1}`;
    document.getElementById("top-shoot-date").textContent = this.data.shootDate || "-";

    document.getElementById("stat-total-scenes").textContent = this.data.scenes.length;
    document.getElementById("stat-total-shots").textContent = this.data.shots.length;
    document.getElementById("stat-total-cast").textContent = this.data.cast.length;
    document.getElementById("stat-total-crew-gear").textContent = `${this.data.crew.length} Kru / ${this.data.equipment.length} Gear`;
  }

  // --- TAB 1: PROJECT SETUP ---
  renderProjectForm() {
    document.getElementById("inp-title").value = this.data.title || "";
    document.getElementById("inp-type").value = this.data.type || "Commercial (TVC & Digital)";
    document.getElementById("inp-production-co").value = this.data.productionCompany || "";
    document.getElementById("inp-client").value = this.data.client || "";
    document.getElementById("inp-agency").value = this.data.agency || "";
    document.getElementById("inp-director").value = this.data.director || "";
    document.getElementById("inp-producer").value = this.data.producer || "";
    document.getElementById("inp-first-ad").value = this.data.firstAD || "";
    document.getElementById("inp-dop").value = this.data.dop || "";

    document.getElementById("inp-shoot-date").value = this.data.shootDate || "";
    document.getElementById("inp-current-day").value = this.data.currentDay || 1;
    document.getElementById("inp-total-days").value = this.data.totalDays || 1;
    document.getElementById("inp-general-call").value = this.data.generalCall || "06:00 AM";
    document.getElementById("inp-sunrise").value = this.data.sunrise || "05:30 AM";
    document.getElementById("inp-sunset").value = this.data.sunset || "17:45 PM";
    document.getElementById("inp-weather").value = this.data.weather || "";
    document.getElementById("inp-location-name").value = this.data.locationName || "";
    document.getElementById("inp-location-address").value = this.data.locationAddress || "";
    document.getElementById("inp-parking-notes").value = this.data.parkingNotes || "";
    document.getElementById("inp-hospital-name").value = this.data.hospitalName || "";
    document.getElementById("inp-hospital-address").value = this.data.hospitalAddress || "";
    document.getElementById("inp-hospital-phone").value = this.data.hospitalPhone || "";
  }

  saveProjectDetails() {
    this.data.title = document.getElementById("inp-title").value;
    this.data.type = document.getElementById("inp-type").value;
    this.data.productionCompany = document.getElementById("inp-production-co").value;
    this.data.client = document.getElementById("inp-client").value;
    this.data.agency = document.getElementById("inp-agency").value;
    this.data.director = document.getElementById("inp-director").value;
    this.data.producer = document.getElementById("inp-producer").value;
    this.data.firstAD = document.getElementById("inp-first-ad").value;
    this.data.dop = document.getElementById("inp-dop").value;

    this.data.shootDate = document.getElementById("inp-shoot-date").value;
    this.data.currentDay = parseInt(document.getElementById("inp-current-day").value) || 1;
    this.data.totalDays = parseInt(document.getElementById("inp-total-days").value) || 1;
    this.data.generalCall = document.getElementById("inp-general-call").value;
    this.data.sunrise = document.getElementById("inp-sunrise").value;
    this.data.sunset = document.getElementById("inp-sunset").value;
    this.data.weather = document.getElementById("inp-weather").value;
    this.data.locationName = document.getElementById("inp-location-name").value;
    this.data.locationAddress = document.getElementById("inp-location-address").value;
    this.data.parkingNotes = document.getElementById("inp-parking-notes").value;
    this.data.hospitalName = document.getElementById("inp-hospital-name").value;
    this.data.hospitalAddress = document.getElementById("inp-hospital-address").value;
    this.data.hospitalPhone = document.getElementById("inp-hospital-phone").value;

    this.saveData();
    this.renderCallSheet();
    alert("Detail proyek berhasil diperbarui!");
  }

  // --- TAB 2: SCRIPT BREAKDOWN ---
  renderScenes() {
    const container = document.getElementById("scenes-list-container");
    if (!this.data.scenes || this.data.scenes.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">Belum ada adegan. Klik <strong>+ Tambah Adegan</strong> untuk memulai breakdown naskah.</div>`;
      return;
    }

    let html = "";
    this.data.scenes.forEach((sc) => {
      const isExt = (sc.setting || "").includes("EXT");
      const isNight = (sc.timeOfDay || "").includes("NIGHT");

      const settingBadgeClass = isExt ? "badge-ext" : "badge-int";
      const timeBadgeClass = isNight ? "badge-night" : "badge-day";

      const renderPills = (items) => {
        if (!items || items.length === 0) return `<span style="color:var(--text-dim); font-size:0.75rem;">-</span>`;
        return items.map((it) => `<span class="pill">${this.escapeHTML(it)}</span>`).join("");
      };

      html += `
        <div class="scene-card">
          <div class="scene-header">
            <div class="scene-title-wrap">
              <span class="scene-num">SC ${sc.sceneNumber}</span>
              <span class="badge ${settingBadgeClass}">${sc.setting}</span>
              <span class="badge ${timeBadgeClass}">${sc.timeOfDay}</span>
              <span class="scene-slugline">${this.escapeHTML(sc.slugline || `${sc.setting}. ${sc.location} - ${sc.timeOfDay}`)}</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size:0.8rem; color:var(--text-muted);">${sc.pages || "1 page"}</span>
              <button class="btn btn-secondary btn-sm" onclick="app.editScene('${sc.id}')">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="app.deleteScene('${sc.id}')">Hapus</button>
            </div>
          </div>
          <div class="scene-body">
            <p class="scene-synopsis"><strong>Sinopsis:</strong> ${this.escapeHTML(sc.synopsis || "Tidak ada ringkasan.")}</p>
            <div class="breakdown-tags-grid">
              <div class="tag-group">
                <h4>🎭 Cast / Karakter</h4>
                <div class="pill-container">${renderPills(sc.cast)}</div>
              </div>
              <div class="tag-group">
                <h4>📦 Props (Properti)</h4>
                <div class="pill-container">${renderPills(sc.props)}</div>
              </div>
              <div class="tag-group">
                <h4>👔 Wardrobe / Kostum</h4>
                <div class="pill-container">${renderPills(sc.wardrobe)}</div>
              </div>
              <div class="tag-group">
                <h4>✨ FX / Special Grip</h4>
                <div class="pill-container">${renderPills(sc.fx)}</div>
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
    const filterSelect = document.getElementById("filter-shot-scene");
    const currentFilter = filterSelect.value;
    filterSelect.innerHTML = `<option value="ALL">Semua Adegan</option>` + 
      this.data.scenes.map((s) => `<option value="${s.id}">Scene ${s.sceneNumber}: ${this.escapeHTML(s.location || s.slugline)}</option>`).join("");
    if (this.data.scenes.some(s => s.id === currentFilter)) {
      filterSelect.value = currentFilter;
    }

    const modalSceneSelect = document.getElementById("sht-scene-id");
    if (modalSceneSelect) {
      modalSceneSelect.innerHTML = this.data.scenes.map((s) => 
        `<option value="${s.id}">Scene ${s.sceneNumber} (${s.setting}. ${s.location})</option>`
      ).join("");
    }
  }

  openAddSceneModal() {
    document.getElementById("modal-scene-title").textContent = "Tambah Adegan (Scene)";
    document.getElementById("form-scene").reset();
    document.getElementById("scene-form-id").value = "";
    document.getElementById("sf-num").value = (this.data.scenes.length + 1).toString();
    this.openModal("modal-scene");
  }

  editScene(id) {
    const sc = this.data.scenes.find((s) => s.id === id);
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
      fx: parseList(document.getElementById("sf-fx").value),
      notes: ""
    };

    if (id) {
      const idx = this.data.scenes.findIndex((s) => s.id === id);
      if (idx !== -1) this.data.scenes[idx] = sceneData;
    } else {
      this.data.scenes.push(sceneData);
    }

    this.saveData();
    this.renderScenes();
    this.renderCallSheet();
    this.closeModal("modal-scene");
  }

  deleteScene(id) {
    if (confirm("Hapus adegan ini beserta kaitannya?")) {
      this.data.scenes = this.data.scenes.filter((s) => s.id !== id);
      this.data.shots = this.data.shots.filter((sh) => sh.sceneId !== id);
      this.saveData();
      this.renderScenes();
      this.renderShotList();
      this.renderCallSheet();
    }
  }

  // --- TAB 3: SHOT LIST ---
  renderShotList() {
    const tbody = document.getElementById("shot-list-table-body");
    const filter = document.getElementById("filter-shot-scene").value;

    let filtered = this.data.shots;
    if (filter && filter !== "ALL") {
      filtered = filtered.filter((s) => s.sceneId === filter);
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:1.5rem; color:var(--text-muted);">Belum ada shot yang ditambahkan. Klik <strong>+ Tambah Shot</strong> untuk merencanakan pengambilan gambar.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((sh) => {
      const parentScene = this.data.scenes.find((s) => s.id === sh.sceneId);
      const isTaken = sh.status === "Taken";
      const statusBadge = isTaken 
        ? `<span class="badge badge-green" style="cursor:pointer;" onclick="app.toggleShotStatus('${sh.id}')">✓ Taken</span>`
        : `<span class="badge badge-gold" style="cursor:pointer;" onclick="app.toggleShotStatus('${sh.id}')">Planned</span>`;

      return `
        <tr style="${isTaken ? 'opacity: 0.65;' : ''}">
          <td>${statusBadge}</td>
          <td><strong style="color:var(--accent-gold); font-size:0.95rem;">${sh.shotNumber}</strong></td>
          <td><span class="badge badge-cyan">SC ${parentScene ? parentScene.sceneNumber : "?"}</span></td>
          <td><strong>${this.escapeHTML(sh.size)}</strong><br><span style="font-size:0.75rem; color:var(--text-dim);">${this.escapeHTML(sh.angle || "")}</span></td>
          <td>${this.escapeHTML(sh.movement || "Static")}</td>
          <td>${this.escapeHTML(sh.lens || "-")}</td>
          <td>${this.escapeHTML(sh.fps || "24 fps")}</td>
          <td>${this.escapeHTML(sh.description || "")}</td>
          <td>
            <div style="display:flex; gap:0.25rem;">
              <button class="btn btn-secondary btn-sm" onclick="app.editShot('${sh.id}')">✏️</button>
              <button class="btn btn-danger btn-sm" onclick="app.deleteShot('${sh.id}')">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  toggleShotStatus(id) {
    const sh = this.data.shots.find((s) => s.id === id);
    if (!sh) return;
    sh.status = sh.status === "Taken" ? "Planned" : "Taken";
    this.saveData();
    this.renderShotList();
  }

  openAddShotModal() {
    if (this.data.scenes.length === 0) {
      alert("Harap buat minimal 1 adegan (Scene) di Script Breakdown terlebih dahulu.");
      return;
    }
    document.getElementById("modal-shot-title").textContent = "Tambah Shot";
    document.getElementById("form-shot").reset();
    document.getElementById("shot-form-id").value = "";
    this.updateSceneSelectOptions();

    // Default shot number suggestion
    const count = this.data.shots.length + 1;
    document.getElementById("sht-num").value = `${count}A`;
    this.openModal("modal-shot");
  }

  editShot(id) {
    const sh = this.data.shots.find((s) => s.id === id);
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
      const idx = this.data.shots.findIndex((s) => s.id === id);
      if (idx !== -1) {
        shotData.status = this.data.shots[idx].status;
        this.data.shots[idx] = shotData;
      }
    } else {
      this.data.shots.push(shotData);
    }

    this.saveData();
    this.renderShotList();
    this.closeModal("modal-shot");
  }

  deleteShot(id) {
    if (confirm("Hapus shot ini?")) {
      this.data.shots = this.data.shots.filter((s) => s.id !== id);
      this.saveData();
      this.renderShotList();
    }
  }

  // --- TAB 4: CAST & CREW ---
  renderCast() {
    const tbody = document.getElementById("cast-table-body");
    if (!this.data.cast || this.data.cast.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:1.5rem; color:var(--text-muted);">Belum ada cast. Klik <strong>+ Tambah Cast</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.data.cast.map((c) => `
      <tr>
        <td><strong>${c.castNumber || "#"}</strong></td>
        <td><strong>${this.escapeHTML(c.characterName)}</strong><br><span style="font-size:0.75rem; color:var(--text-dim);">${this.escapeHTML(c.role || "")}</span></td>
        <td>${this.escapeHTML(c.actorName)}<br><span style="font-size:0.75rem; color:var(--text-muted);">${this.escapeHTML(c.phone || "")}</span></td>
        <td><span class="badge badge-gold">${c.pickupTime || "-"}</span></td>
        <td>${c.hmuTime || "-"}</td>
        <td><span class="badge badge-cyan">${c.onSetTime || "-"}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="app.editCast('${c.id}')">✏️</button>
          <button class="btn btn-danger btn-sm" onclick="app.deleteCast('${c.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddCastModal() {
    document.getElementById("form-cast").reset();
    document.getElementById("cast-form-id").value = "";
    this.openModal("modal-cast");
  }

  editCast(id) {
    const c = this.data.cast.find((item) => item.id === id);
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
    const id = document.getElementById("cast-form-id").value;
    const castData = {
      id: id || `cast_${Date.now()}`,
      castNumber: (this.data.cast.length + 1).toString(),
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
      const idx = this.data.cast.findIndex((item) => item.id === id);
      if (idx !== -1) {
        castData.castNumber = this.data.cast[idx].castNumber;
        this.data.cast[idx] = castData;
      }
    } else {
      this.data.cast.push(castData);
    }

    this.saveData();
    this.renderCast();
    this.renderCallSheet();
    this.closeModal("modal-cast");
  }

  deleteCast(id) {
    if (confirm("Hapus cast ini?")) {
      this.data.cast = this.data.cast.filter((c) => c.id !== id);
      this.saveData();
      this.renderCast();
      this.renderCallSheet();
    }
  }

  renderCrew() {
    const tbody = document.getElementById("crew-table-body");
    if (!this.data.crew || this.data.crew.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-muted);">Belum ada kru. Klik <strong>+ Tambah Kru</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.data.crew.map((cr) => `
      <tr>
        <td><span class="badge badge-purple">${this.escapeHTML(cr.department)}</span></td>
        <td><strong>${this.escapeHTML(cr.role)}</strong></td>
        <td>${this.escapeHTML(cr.name)}</td>
        <td>${this.escapeHTML(cr.phone || "-")}</td>
        <td><span class="badge badge-gold">${cr.callTime || "-"}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="app.editCrew('${cr.id}')">✏️</button>
          <button class="btn btn-danger btn-sm" onclick="app.deleteCrew('${cr.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddCrewModal() {
    document.getElementById("form-crew").reset();
    document.getElementById("crew-form-id").value = "";
    this.openModal("modal-crew");
  }

  editCrew(id) {
    const cr = this.data.crew.find((c) => c.id === id);
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
      const idx = this.data.crew.findIndex((c) => c.id === id);
      if (idx !== -1) this.data.crew[idx] = crewData;
    } else {
      this.data.crew.push(crewData);
    }

    this.saveData();
    this.renderCrew();
    this.renderCallSheet();
    this.closeModal("modal-crew");
  }

  deleteCrew(id) {
    if (confirm("Hapus kru ini?")) {
      this.data.crew = this.data.crew.filter((c) => c.id !== id);
      this.saveData();
      this.renderCrew();
      this.renderCallSheet();
    }
  }

  // --- TAB 5: EQUIPMENT ---
  renderEquipment() {
    const tbody = document.getElementById("equipment-table-body");
    if (!this.data.equipment || this.data.equipment.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-muted);">Belum ada peralatan. Klik <strong>+ Tambah Peralatan</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.data.equipment.map((eq) => `
      <tr>
        <td><span class="badge badge-cyan">${this.escapeHTML(eq.category)}</span></td>
        <td><strong>${this.escapeHTML(eq.item)}</strong></td>
        <td>${this.escapeHTML(eq.qty || "1")}</td>
        <td>${this.escapeHTML(eq.source || "Rental")}</td>
        <td><span class="badge badge-green">${this.escapeHTML(eq.status || "Checked")}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="app.editEquipment('${eq.id}')">✏️</button>
          <button class="btn btn-danger btn-sm" onclick="app.deleteEquipment('${eq.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddEquipmentModal() {
    document.getElementById("form-equipment").reset();
    document.getElementById("eq-form-id").value = "";
    this.openModal("modal-equipment");
  }

  editEquipment(id) {
    const eq = this.data.equipment.find((e) => e.id === id);
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
      const idx = this.data.equipment.findIndex((e) => e.id === id);
      if (idx !== -1) this.data.equipment[idx] = eqData;
    } else {
      this.data.equipment.push(eqData);
    }

    this.saveData();
    this.renderEquipment();
    this.closeModal("modal-equipment");
  }

  deleteEquipment(id) {
    if (confirm("Hapus item peralatan ini?")) {
      this.data.equipment = this.data.equipment.filter((e) => e.id !== id);
      this.saveData();
      this.renderEquipment();
    }
  }

  // --- TAB 6: CALL SHEET GENERATOR ---
  renderCallSheet() {
    const cs = document.getElementById("printable-callsheet");
    if (!cs) return;

    const d = this.data;

    // Build Scene rows
    const scenesRows = d.scenes.map((s) => `
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

    // Build Cast rows
    const castRows = d.cast.map((c) => `
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

    // Build Schedule Timeline rows
    const scheduleRows = (d.daySchedule || []).map((sch) => `
      <tr>
        <td style="width:90px; font-weight:bold;">${sch.time}</td>
        <td>${this.escapeHTML(sch.activity)}</td>
      </tr>
    `).join("");

    // Build Department Notes
    const notes = d.departmentNotes || {};

    cs.innerHTML = `
      <div class="cs-header">
        <div class="cs-title-bar">
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#6b7280; font-weight:bold;">
              ${this.escapeHTML(d.productionCompany || "PRODUCTION HOUSE")} &bull; ${this.escapeHTML(d.type || "VIDEO PRODUCTION")}
            </div>
            <h1 class="cs-main-title">${this.escapeHTML(d.title || "UNTITLED PRODUCTION")}</h1>
            <div style="font-size:11px; color:#4b5563;">
              Client: <strong>${this.escapeHTML(d.client || "-")}</strong> &bull; Agency: <strong>${this.escapeHTML(d.agency || "-")}</strong>
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
          <div>⛅ WEATHER: ${this.escapeHTML(d.weather || "Clear")}</div>
        </div>
      </div>

      <div class="cs-info-grid">
        <div class="cs-box">
          <div class="cs-box-title">📍 SET LOCATION & BASECAMP</div>
          <div style="font-size:13px; font-weight:bold;">${this.escapeHTML(d.locationName || "-")}</div>
          <div style="font-size:11px; margin-top:2px;">${this.escapeHTML(d.locationAddress || "-")}</div>
          <div style="font-size:11px; margin-top:4px; color:#374151;"><strong>Catatan Parkir:</strong> ${this.escapeHTML(d.parkingNotes || "Sesuai petunjuk tim unit di lokasi.")}</div>
        </div>

        <div class="cs-box cs-hospital-box">
          <div class="cs-box-title cs-hospital-title">🚨 NEAREST EMERGENCY HOSPITAL (IGD 24 JAM)</div>
          <div style="font-size:12px; font-weight:bold; color:#b91c1c;">${this.escapeHTML(d.hospitalName || "RS Terdekat")}</div>
          <div style="font-size:10px; margin-top:2px;">${this.escapeHTML(d.hospitalAddress || "-")}</div>
          <div style="font-size:12px; font-weight:bold; margin-top:4px; color:#991b1b;">TELP DARURAT: ${this.escapeHTML(d.hospitalPhone || "-")}</div>
        </div>
      </div>

      <!-- SHOOTING SCHEDULE / SCENES -->
      <div style="font-size:12px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:2px solid #111827;">
        🎬 SCENES TO SHOOT TODAY
      </div>
      <table class="cs-table">
        <thead>
          <tr>
            <th style="width:35px; text-align:center;">SC#</th>
            <th style="width:45px;">I/E</th>
            <th style="width:75px;">D/N</th>
            <th style="width:170px;">SET & DESCRIPTION</th>
            <th style="width:45px; text-align:center;">PAGES</th>
            <th style="width:140px;">CAST</th>
            <th>SYNOPSIS / ACTION</th>
          </tr>
        </thead>
        <tbody>
          ${scenesRows || `<tr><td colspan="7" style="text-align:center;">Tidak ada scene terjadwal</td></tr>`}
        </tbody>
      </table>

      <!-- CAST CALL TIMES -->
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
            <th>SPECIAL NOTES / WARDROBE</th>
          </tr>
        </thead>
        <tbody>
          ${castRows || `<tr><td colspan="7" style="text-align:center;">Tidak ada data cast</td></tr>`}
        </tbody>
      </table>

      <!-- TIMELINE & DEPT NOTES -->
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
            📌 DEPARTMENT NOTES & REQUIREMENTS
          </div>
          <div style="font-size:10px; line-height:1.4;">
            <p><strong>PRODUCTION:</strong> ${this.escapeHTML(notes.production || "Tetap patuhi jadwal call time dan jaga kebersihan set.")}</p>
            <p style="margin-top:3px;"><strong>CAMERA & DIT:</strong> ${this.escapeHTML(notes.camera || "Pastikan media card terverifikasi & terbackup.")}</p>
            <p style="margin-top:3px;"><strong>GRIP & LIGHTING:</strong> ${this.escapeHTML(notes.lighting || "Safety first untuk rigging dan kabel listrik.")}</p>
            <p style="margin-top:3px;"><strong>SOUND:</strong> ${this.escapeHTML(notes.sound || "Jaga ketenangan set saat sound rolling.")}</p>
            <p style="margin-top:3px;"><strong>ART & WARDROBE:</strong> ${this.escapeHTML(notes.art || "Pastikan hero props siap sebelum blocking.")}</p>
          </div>
        </div>
      </div>

      <!-- KEY CONTACTS FOOTER -->
      <div class="cs-footer">
        <div><strong>Director:</strong> ${this.escapeHTML(d.director || "-")}</div>
        <div><strong>Producer:</strong> ${this.escapeHTML(d.producer || "-")}</div>
        <div><strong>1st AD:</strong> ${this.escapeHTML(d.firstAD || "-")}</div>
        <div><strong>DoP:</strong> ${this.escapeHTML(d.dop || "-")}</div>
      </div>
    `;
  }

  printCallSheet() {
    // Switch to tab callsheet first
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach((p) => p.classList.remove("active"));

    const csBtn = document.querySelector(`.tab-btn[data-tab="tab-callsheet"]`);
    if (csBtn) csBtn.classList.add("active");
    const csPane = document.getElementById("tab-callsheet");
    if (csPane) csPane.classList.add("active");

    this.renderCallSheet();
    window.print();
  }

  // --- MODAL UTILS ---
  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add("open");
  }

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove("open");
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
  app = new CinePrepApp();
});
