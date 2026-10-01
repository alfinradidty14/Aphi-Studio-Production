const DEFAULT_USERS = [
  {
    id: "usr_admin",
    name: "Aphi Master Admin",
    email: "admin@aphistudio.com",
    password: "admin123",
    role: "Studio Owner & Executive Producer",
    status: "approved",
    isAdmin: true,
    registeredAt: "2026-10-01"
  },
  {
    id: "usr_crew_budi",
    name: "Budi Santoso",
    email: "budi@aphistudio.com",
    password: "budi123",
    role: "1st Assistant Director",
    status: "approved",
    isAdmin: false,
    registeredAt: "2026-10-01"
  },
  {
    id: "usr_pending_rian",
    name: "Rian Hidayat",
    email: "rian@gmail.com",
    password: "rian123",
    role: "Lighting & Grip Crew",
    status: "pending",
    isAdmin: false,
    registeredAt: "2026-10-01"
  }
];

class ProductionApp {
  constructor() {
    this.storageProjectsKey = "aphi_studio_production_v6";
    this.storageUsersKey = "aphi_studio_users_v6";
    this.storageSessionKey = "aphi_studio_current_user_v6";

    this.projects = this.loadProjects();
    this.users = this.loadUsers();
    this.currentUser = this.loadSession();
    this.activeProjectId = null;
    this.searchQuery = "";

    this.initDOM();
  }

  loadProjects() {
    const saved = localStorage.getItem(this.storageProjectsKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return JSON.parse(JSON.stringify(INITIAL_PROJECTS));
  }

  saveProjects() {
    localStorage.setItem(this.storageProjectsKey, JSON.stringify(this.projects));
    if (this.activeProjectId) {
      this.updateWorkspaceStats();
    } else {
      this.renderLanding();
    }
  }

  loadUsers() {
    const saved = localStorage.getItem(this.storageUsersKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return JSON.parse(JSON.stringify(DEFAULT_USERS));
  }

  saveUsers() {
    localStorage.setItem(this.storageUsersKey, JSON.stringify(this.users));
    this.updateHeaderControls();
    this.renderAdminUsersList();
  }

  loadSession() {
    const saved = localStorage.getItem(this.storageSessionKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return null;
  }

  saveSession(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(this.storageSessionKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.storageSessionKey);
    }
    this.updateHeaderControls();
  }

  initDOM() {
    this.setupWorkspaceTabs();
    if (!this.currentUser) {
      this.showAuthView();
    } else {
      this.navToLanding();
    }
  }

  showAuthView() {
    document.getElementById("main-header").style.display = "none";
    document.getElementById("view-auth").style.display = "block";
    document.getElementById("view-landing").style.display = "none";
    document.getElementById("view-workspace").style.display = "none";
  }

  switchAuthTab(tab) {
    this.hideAuthAlert();
    const btnLogin = document.getElementById("btn-tab-login");
    const btnSignup = document.getElementById("btn-tab-signup");
    const formLogin = document.getElementById("form-login");
    const formSignup = document.getElementById("form-signup");
    const titleText = document.getElementById("auth-title-text");

    if (tab === "login") {
      btnLogin.classList.add("active");
      btnSignup.classList.remove("active");
      formLogin.style.display = "block";
      formSignup.style.display = "none";
      titleText.textContent = "Log In";
    } else {
      btnLogin.classList.remove("active");
      btnSignup.classList.add("active");
      formLogin.style.display = "none";
      formSignup.style.display = "block";
      titleText.textContent = "Join Us";
    }
  }

  showAuthAlert(message, type = "error") {
    const box = document.getElementById("auth-alert-box");
    box.className = `auth-alert auth-alert-${type}`;
    box.innerHTML = message;
    box.style.display = "block";
  }

  hideAuthAlert() {
    const box = document.getElementById("auth-alert-box");
    if (box) box.style.display = "none";
  }

  handleLogin() {
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;

    const user = this.users.find((u) => u.email.toLowerCase() === email && u.password === password);
    if (!user) {
      this.showAuthAlert("❌ Email atau password salah.", "error");
      return;
    }

    if (user.status === "pending") {
      this.showAuthAlert("⏳ <strong>Pendaftaran Menunggu Persetujuan:</strong><br>Akun Anda belum disetujui oleh Master Admin Aphi Studio. Silakan hubungi admin.", "warning");
      return;
    }

    if (user.status === "rejected") {
      this.showAuthAlert("🚫 Akun ini telah ditolak atau dinonaktifkan oleh Admin.", "error");
      return;
    }

    this.saveSession(user);
    this.hideAuthAlert();
    document.getElementById("form-login").reset();
    this.navToLanding();
  }

  handleSignUp() {
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim().toLowerCase();
    const role = document.getElementById("signup-role").value;
    const password = document.getElementById("signup-password").value;
    const confirmPass = document.getElementById("signup-password-confirm").value;

    if (password !== confirmPass) {
      this.showAuthAlert("❌ Password dan Konfirmasi Password tidak sama.", "error");
      return;
    }

    if (this.users.some((u) => u.email.toLowerCase() === email)) {
      this.showAuthAlert("⚠️ Email ini sudah terdaftar. Silakan log in.", "warning");
      return;
    }

    const newUser = {
      id: `usr_${Date.now()}`,
      name,
      email,
      password,
      role,
      status: "pending",
      isAdmin: false,
      registeredAt: new Date().toISOString().split("T")[0]
    };

    this.users.push(newUser);
    this.saveUsers();

    document.getElementById("form-signup").reset();
    this.switchAuthTab("login");
    this.showAuthAlert("🎉 <strong>Pendaftaran Berhasil!</strong><br>Akun Anda berstatus <strong>Pending Approval</strong>. Harap tunggu persetujuan Master Admin sebelum masuk.", "success");
  }

  quickDemoAdminLogin() {
    const admin = this.users.find(u => u.isAdmin);
    if (admin) {
      this.saveSession(admin);
      this.hideAuthAlert();
      this.navToLanding();
    }
  }

  logout() {
    if (confirm("Keluar dari sesi Aphi Studio Production?")) {
      this.saveSession(null);
      this.activeProjectId = null;
      this.showAuthView();
    }
  }

  openAdminApprovalsModal() {
    if (!this.currentUser || !this.currentUser.isAdmin) return;
    this.renderAdminUsersList();
    this.openModal("modal-admin-approvals");
  }

  renderAdminUsersList() {
    const tbody = document.getElementById("admin-users-table-body");
    if (!tbody) return;

    tbody.innerHTML = this.users.map((u) => {
      let statusBadge = "";
      if (u.status === "approved") {
        statusBadge = `<span class="badge badge-green">✓ Disetujui</span>`;
      } else if (u.status === "rejected") {
        statusBadge = `<span class="badge badge-red">✕ Ditolak</span>`;
      } else {
        statusBadge = `<span class="badge badge-gold">⏳ Menunggu (Pending)</span>`;
      }

      let actionButtons = "";
      if (u.isAdmin) {
        actionButtons = `<span style="font-size:0.75rem; color:var(--apple-blue); font-weight:bold;">👑 Master Admin</span>`;
      } else {
        actionButtons = `
          <div style="display:flex; gap:0.3rem;">
            ${u.status !== 'approved' ? `<button class="btn btn-primary btn-sm" onclick="app.approveUser('${u.id}')">Setujui</button>` : ''}
            ${u.status !== 'rejected' ? `<button class="btn btn-danger-glass btn-sm" onclick="app.rejectUser('${u.id}')">Tolak</button>` : ''}
            <button class="btn btn-glass btn-sm" onclick="app.deleteUser('${u.id}')" title="Hapus User">🗑️</button>
          </div>
        `;
      }

      return `
        <tr style="${u.status === 'pending' ? 'background: rgba(245, 158, 11, 0.05); font-weight:600;' : ''}">
          <td><strong>${this.escapeHTML(u.name)}</strong></td>
          <td>${this.escapeHTML(u.email)}</td>
          <td>${this.escapeHTML(u.role)}</td>
          <td>${statusBadge}</td>
          <td>${actionButtons}</td>
        </tr>
      `;
    }).join("");
  }

  approveUser(id) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return;
    user.status = "approved";
    this.saveUsers();
  }

  rejectUser(id) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return;
    user.status = "rejected";
    this.saveUsers();
  }

  deleteUser(id) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return;
    if (confirm(`Hapus akun "${user.name}"?`)) {
      this.users = this.users.filter((u) => u.id !== id);
      this.saveUsers();
    }
  }

  updateHeaderControls() {
    const container = document.getElementById("header-user-controls");
    if (!container) return;

    if (!this.currentUser) {
      container.innerHTML = ``;
      return;
    }

    const pendingCount = this.users.filter((u) => u.status === "pending").length;
    const adminBtn = this.currentUser.isAdmin ? `
      <button class="btn btn-admin-glass btn-sm" onclick="app.openAdminApprovalsModal()" title="Persetujuan Akun">
        🛡️ Kru ${pendingCount > 0 ? `<span class="badge badge-gold" style="background:#b45309; color:#fff; font-size:0.68rem; padding:0.1rem 0.4rem; margin-left:0.2rem;">${pendingCount} Pending</span>` : ''}
      </button>
    ` : '';

    container.innerHTML = `
      <div class="user-profile-badge">
        <span>👤 <strong>${this.escapeHTML(this.currentUser.name)}</strong></span>
        ${this.currentUser.isAdmin ? '<span class="badge badge-purple">Admin</span>' : `<span style="font-size:0.75rem; color:var(--apple-text-sub);">${this.escapeHTML(this.currentUser.role)}</span>`}
      </div>
      ${adminBtn}
      <button class="btn btn-glass btn-sm" onclick="app.exportAllJSON()" title="Export Backup">💾</button>
      <button class="btn btn-danger-glass btn-sm" onclick="app.logout()">Keluar</button>
    `;
  }

  handleSearch(val) {
    this.searchQuery = (val || "").trim().toLowerCase();
    this.renderLanding();
  }

  navToLanding() {
    if (!this.currentUser) return this.showAuthView();

    this.activeProjectId = null;
    document.getElementById("main-header").style.display = "flex";
    document.getElementById("view-auth").style.display = "none";
    document.getElementById("view-landing").style.display = "block";
    document.getElementById("view-workspace").style.display = "none";
    document.getElementById("header-search-wrap").style.display = "flex";

    document.getElementById("user-greeting-heading").textContent = `Selamat datang, ${this.currentUser.name.split(' ')[0]} 👋`;

    this.updateHeaderControls();
    this.renderLanding();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openProject(projectId) {
    if (!this.currentUser) return this.showAuthView();

    this.activeProjectId = projectId;
    const proj = this.getActiveProject();
    if (!proj) return;

    // Ensure array objects exist for 5 new modules
    if (!proj.storyboards) proj.storyboards = [];
    if (!proj.stripboard) proj.stripboard = [];
    if (!proj.continuityLogs) proj.continuityLogs = [];
    if (!proj.budget) proj.budget = { totalEstimated: 150000000, categories: [], pettyCash: [] };
    if (!proj.cloudConfig) proj.cloudConfig = { provider: "supabase", url: "", anonKey: "", enabled: false, lastSynced: null };

    document.getElementById("main-header").style.display = "flex";
    document.getElementById("view-auth").style.display = "none";
    document.getElementById("view-landing").style.display = "none";
    document.getElementById("view-workspace").style.display = "block";
    document.getElementById("header-search-wrap").style.display = "none";

    document.getElementById("ws-project-title").textContent = proj.title || "Untitled";
    document.getElementById("ws-project-type").textContent = proj.type || "Film/Video";
    document.getElementById("ws-day-badge").textContent = `Day ${proj.currentDay || 1}/${proj.totalDays || 1}`;
    document.getElementById("ws-project-sub").innerHTML = `Klien: <strong>${this.escapeHTML(proj.client || "-")}</strong> &bull; Sutradara: <strong>${this.escapeHTML(proj.director || "-")}</strong> &bull; Tanggal: <strong>${proj.shootDate || "-"}</strong>`;

    this.updateHeaderControls();
    this.switchTab("tab-overview");
    this.renderWorkspaceAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  switchTab(tabId) {
    document.querySelectorAll(".seg-tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll("#view-workspace .tab-pane").forEach((p) => p.classList.remove("active"));

    const btn = document.querySelector(`.seg-tab-btn[data-tab="${tabId}"]`);
    if (btn) btn.classList.add("active");
    const pane = document.getElementById(tabId);
    if (pane) pane.classList.add("active");

    if (tabId === "tab-callsheet") this.renderCallSheet();
    if (tabId === "tab-stripboard") this.renderStripboard();
    if (tabId === "tab-storyboard") this.renderStoryboard();
    if (tabId === "tab-continuity") this.renderContinuity();
    if (tabId === "tab-budget") this.renderBudget();
    if (tabId === "tab-cloud") this.renderCloudSync();
  }

  openFirstProjectCallSheet() {
    const first = this.projects[0];
    if (first) {
      this.openProject(first.id);
      this.switchTab("tab-callsheet");
    }
  }

  getActiveProject() {
    return this.projects.find((p) => p.id === this.activeProjectId) || this.projects[0];
  }

  setupWorkspaceTabs() {
    const tabBtns = document.querySelectorAll(".seg-tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab");
        this.switchTab(targetId);
      });
    });
  }

  renderLanding() {
    const grid = document.getElementById("folder-projects-container");
    const draftsContainer = document.getElementById("drafts-list-container");
    if (!grid) return;

    let filtered = this.projects;
    if (this.searchQuery) {
      filtered = this.projects.filter(p => 
        (p.title || "").toLowerCase().includes(this.searchQuery) ||
        (p.client || "").toLowerCase().includes(this.searchQuery) ||
        (p.type || "").toLowerCase().includes(this.searchQuery)
      );
    }

    document.getElementById("badge-total-callsheets").textContent = this.projects.length;
    document.getElementById("drafts-count-heading").textContent = `Drafts & Projects (${filtered.length})`;

    let folderHtml = "";
    filtered.forEach((p, idx) => {
      let themeClass = "theme-gradient-blue";
      if (p.type.includes("Music Video") || p.type.includes("MV")) themeClass = "theme-gradient-red";
      else if (p.type.includes("Short Film") || p.type.includes("Feature")) themeClass = "theme-gradient-green";
      else if (idx % 3 === 1) themeClass = "theme-gradient-purple";

      const sceneCount = (p.scenes || []).length;
      const shotCount = (p.shots || []).length;

      folderHtml += `
        <div class="folder-card ${themeClass}" onclick="app.openProject('${p.id}')">
          <div class="peeking-sheets-wrapper">
            <div class="peeking-sheet sheet-left">
              <div class="paper-line" style="width:75%;"></div>
              <div class="paper-line" style="width:90%;"></div>
              <div class="paper-line" style="width:60%;"></div>
            </div>
            <div class="peeking-sheet sheet-right">
              <div class="paper-line" style="width:85%;"></div>
              <div class="paper-line" style="width:70%;"></div>
              <div class="paper-line" style="width:50%;"></div>
            </div>
            <div class="peeking-sheet sheet-center">
              <div class="paper-line" style="width:80%;"></div>
              <div class="paper-line" style="width:95%;"></div>
              <div class="paper-line" style="width:65%;"></div>
              <div class="paper-line" style="width:85%;"></div>
            </div>
          </div>

          <div class="folder-dark-pocket">
            <div class="folder-pocket-tab-cut"></div>
            <div class="folder-title-row">
              <h4>${this.escapeHTML(p.title)}</h4>
              <span style="cursor:pointer; font-size:1.1rem; opacity:0.8;" onclick="event.stopPropagation(); app.deleteProject('${p.id}')" title="Hapus Proyek">•••</span>
            </div>
            <div class="folder-subtext">${this.escapeHTML(p.type)} &bull; ${this.escapeHTML(p.status || "In Prep")}</div>

            <div class="folder-footer-stats">
              <span>📄 ${sceneCount} Scenes &bull; ${shotCount} Shots</span>
              <span style="font-weight:600; color:#ffffff;">Day ${p.currentDay || 1}/${p.totalDays || 1}</span>
            </div>
          </div>
        </div>
      `;
    });

    folderHtml += `
      <div class="folder-card" style="background:#ffffff; border: 2px dashed #cbd5e1; display:flex; align-items:center; justify-content:center; text-align:center;" onclick="app.openNewProjectModal()">
        <div>
          <div style="font-size:2.8rem; margin-bottom:0.5rem;">✨</div>
          <h4 style="font-size:1.05rem; font-weight:800; color:#1d4ed8; margin-bottom:0.25rem;">+ New Production</h4>
          <p style="font-size:0.78rem; color:var(--apple-text-sub);">Start a new TVC, MV, or Film</p>
        </div>
      </div>
    `;

    grid.innerHTML = folderHtml;

    let draftsHtml = "";
    filtered.forEach((p) => {
      draftsHtml += `
        <div class="draft-item-row" onclick="app.openProject('${p.id}')" style="cursor:pointer;">
          <div class="draft-item-left">
            <div class="draft-icon-box">📁</div>
            <div>
              <div style="font-weight:700; font-size:0.86rem; color:var(--apple-dark);">${this.escapeHTML(p.title)}</div>
              <div style="font-size:0.74rem; color:var(--apple-text-tertiary);">${this.escapeHTML(p.type)} &bull; ${p.shootDate || "No date"}</div>
            </div>
          </div>
          <button class="btn btn-glass btn-sm" style="font-size:0.75rem;" onclick="event.stopPropagation(); app.openProject('${p.id}')">
            Resume
          </button>
        </div>
      `;
    });
    draftsContainer.innerHTML = draftsHtml || `<div style="text-align:center; padding:1rem; color:var(--apple-text-sub);">No projects found.</div>`;
  }

  // ==========================================
  // WORKSPACE VIEW ALL RENDERING
  // ==========================================
  renderWorkspaceAll() {
    this.updateWorkspaceStats();
    this.renderWorkspaceProjectForm();
    this.renderScenes();
    this.renderStripboard();
    this.renderStoryboard();
    this.renderShotList();
    this.renderContinuity();
    this.renderCast();
    this.renderCrew();
    this.renderEquipment();
    this.renderBudget();
    this.renderCallSheet();
    this.renderCloudSync();
  }

  updateWorkspaceStats() {
    const p = this.getActiveProject();
    if (!p) return;
    document.getElementById("stat-ws-scenes").textContent = (p.scenes || []).length;
    document.getElementById("stat-ws-shots").textContent = (p.shots || []).length;
    document.getElementById("stat-ws-cast").textContent = (p.cast || []).length;
    document.getElementById("stat-ws-crew-gear").textContent = `${(p.crew || []).length} Kru / ${(p.equipment || []).length} Gear`;

    // Cloud status badge
    const badge = document.getElementById("ws-cloud-badge");
    if (badge && p.cloudConfig) {
      if (p.cloudConfig.enabled && p.cloudConfig.url) {
        badge.className = "badge badge-green";
        badge.innerHTML = "🟢 Cloud Synced";
      } else {
        badge.className = "badge badge-gold";
        badge.innerHTML = "⚪ Local Mode";
      }
    }
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
      container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--apple-text-sub);">Belum ada adegan. Klik <strong>+ Tambah Adegan</strong>.</div>`;
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
    if (filterSelect) {
      const currentVal = filterSelect.value;
      filterSelect.innerHTML = `<option value="ALL">Semua Adegan</option>` +
        (p.scenes || []).map((s) => `<option value="${s.id}">Scene ${s.sceneNumber}: ${this.escapeHTML(s.location || s.slugline)}</option>`).join("");
      if ((p.scenes || []).some(s => s.id === currentVal)) filterSelect.value = currentVal;
    }

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

      // Auto-add to stripboard schedule as well
      if (!p.stripboard) p.stripboard = [];
      p.stripboard.push({
        id: `st_${Date.now()}`,
        type: "scene",
        sceneNumber: num,
        setting,
        timeOfDay,
        location,
        pages: pages || "1 page",
        estMinutes: 120
      });
    }

    this.saveProjects();
    this.renderScenes();
    this.renderStripboard();
    this.renderCallSheet();
    this.closeModal("modal-scene");
  }

  deleteScene(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus adegan ini beserta shot terkait?")) {
      p.scenes = p.scenes.filter((s) => s.id !== id);
      p.shots = (p.shots || []).filter((sh) => sh.sceneId !== id);
      p.stripboard = (p.stripboard || []).filter((st) => st.sceneNumber !== id && st.id !== id);
      this.saveProjects();
      this.renderScenes();
      this.renderStripboard();
      this.renderShotList();
      this.renderCallSheet();
    }
  }

  // ==========================================
  // FEATURE 2: DIGITAL STRIPBOARD LOGIC
  // ==========================================
  renderStripboard() {
    const p = this.getActiveProject();
    const container = document.getElementById("stripboard-list-container");
    if (!container || !p) return;

    if (!p.stripboard || p.stripboard.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--apple-text-sub);">Stripboard kosong. Klik <strong>+ Tambah Strip Adegan</strong> atau susun dari Script Breakdown.</div>`;
      return;
    }

    let totalMinutes = 0;
    let sceneCount = 0;

    let html = p.stripboard.map((strip, idx) => {
      if (strip.type === "daybreak") {
        return `
          <div class="strip-daybreak" style="display:flex; justify-content:space-between; align-items:center;">
            <div>🏁 ${this.escapeHTML(strip.title || `END OF SHOOT DAY ${strip.dayNumber || 1}`)}</div>
            <div style="display:flex; gap:0.4rem;">
              <button class="btn btn-glass btn-sm" style="color:#fff; background:rgba(255,255,255,0.15);" onclick="app.moveStripUp(${idx})">▲</button>
              <button class="btn btn-glass btn-sm" style="color:#fff; background:rgba(255,255,255,0.15);" onclick="app.moveStripDown(${idx})">▼</button>
              <button class="btn btn-danger-glass btn-sm" onclick="app.deleteStrip(${idx})">🗑️</button>
            </div>
          </div>
        `;
      }

      sceneCount++;
      totalMinutes += parseInt(strip.estMinutes) || 120;

      const isExt = (strip.setting || "").includes("EXT");
      const isNight = (strip.timeOfDay || "").includes("NIGHT");

      let stripClass = "strip-int-day";
      if (isExt && !isNight) stripClass = "strip-ext-day";
      else if (isExt && isNight) stripClass = "strip-ext-night";
      else if (!isExt && isNight) stripClass = "strip-int-night";

      return `
        <div class="strip-item ${stripClass}">
          <div class="strip-left-info">
            <span class="strip-scene-num">SC ${strip.sceneNumber}</span>
            <span class="badge" style="background:rgba(0,0,0,0.08); font-weight:800;">${strip.setting}.</span>
            <span class="badge" style="background:rgba(0,0,0,0.08); font-weight:800;">${strip.timeOfDay}</span>
            <strong style="font-family:var(--font-mono); font-size:0.86rem;">${this.escapeHTML(strip.location || "-")}</strong>
          </div>

          <div style="display:flex; align-items:center; gap:1.25rem;">
            <span>⏱️ ${(parseInt(strip.estMinutes) || 120) / 60} Jam</span>
            <span>📄 ${strip.pages || "1 page"}</span>
            <div style="display:flex; gap:0.3rem;">
              <button class="btn btn-glass btn-sm" style="background:rgba(255,255,255,0.6);" onclick="app.moveStripUp(${idx})">▲</button>
              <button class="btn btn-glass btn-sm" style="background:rgba(255,255,255,0.6);" onclick="app.moveStripDown(${idx})">▼</button>
              <button class="btn btn-danger-glass btn-sm" onclick="app.deleteStrip(${idx})">🗑️</button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = html;
    document.getElementById("st-total-strips").textContent = `${sceneCount} Adegan`;
    document.getElementById("st-total-pages").textContent = `${p.scenes.length * 1.2} Halaman`;
    document.getElementById("st-total-hours").textContent = `${(totalMinutes / 60).toFixed(1)} Jam`;
  }

  moveStripUp(idx) {
    const p = this.getActiveProject();
    if (idx <= 0) return;
    const temp = p.stripboard[idx];
    p.stripboard[idx] = p.stripboard[idx - 1];
    p.stripboard[idx - 1] = temp;
    this.saveProjects();
    this.renderStripboard();
  }

  moveStripDown(idx) {
    const p = this.getActiveProject();
    if (idx >= p.stripboard.length - 1) return;
    const temp = p.stripboard[idx];
    p.stripboard[idx] = p.stripboard[idx + 1];
    p.stripboard[idx + 1] = temp;
    this.saveProjects();
    this.renderStripboard();
  }

  deleteStrip(idx) {
    const p = this.getActiveProject();
    p.stripboard.splice(idx, 1);
    this.saveProjects();
    this.renderStripboard();
  }

  addDayBreakToStripboard() {
    const p = this.getActiveProject();
    const count = p.stripboard.filter(s => s.type === "daybreak").length + 1;
    p.stripboard.push({
      id: `st_break_${Date.now()}`,
      type: "daybreak",
      dayNumber: count,
      title: `END OF SHOOT DAY ${count} & ESTIMATED WRAP`,
      totalPages: "2 pages"
    });
    this.saveProjects();
    this.renderStripboard();
  }

  // ==========================================
  // FEATURE 1: VISUAL STORYBOARD & MOODBOARD
  // ==========================================
  renderStoryboard() {
    const p = this.getActiveProject();
    const container = document.getElementById("storyboard-grid-container");
    if (!container || !p) return;

    if (!p.storyboards || p.storyboards.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--apple-text-sub); grid-column:1/-1;">Belum ada frame storyboard. Klik <strong>+ Tambah Frame Storyboard</strong>.</div>`;
      return;
    }

    container.innerHTML = p.storyboards.map((sb) => {
      const img = sb.imageUrl || "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80";
      return `
        <div class="storyboard-card">
          <div class="storyboard-frame-box">
            <img src="${img}" alt="Storyboard Frame" onerror="this.src='https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80'">
            <div class="sb-shot-badge">SC ${sb.sceneNumber} &bull; SHOT ${sb.shotNumber}</div>
          </div>
          <div class="storyboard-body">
            <div>
              <div class="sb-framing-title">${this.escapeHTML(sb.framing || "Shot Framing")}</div>
              <p class="sb-caption-text">${this.escapeHTML(sb.caption || "-")}</p>
            </div>
            <div class="sb-footer-meta">
              <span>🎥 ${this.escapeHTML(sb.movement || "Static")}</span>
              <div style="display:flex; gap:0.3rem;">
                <button class="btn btn-glass btn-sm" onclick="app.editStoryboard('${sb.id}')">✏️</button>
                <button class="btn btn-danger-glass btn-sm" onclick="app.deleteStoryboard('${sb.id}')">🗑️</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  openAddStoryboardModal() {
    document.getElementById("sb-form-id").value = "";
    document.getElementById("sbf-scene").value = "1";
    document.getElementById("sbf-shot").value = "1A";
    document.getElementById("sbf-framing").value = "Medium Shot (MS)";
    document.getElementById("sbf-movement").value = "Static 24fps";
    document.getElementById("sbf-image").value = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80";
    document.getElementById("sbf-caption").value = "";
    this.openModal("modal-storyboard");
  }

  editStoryboard(id) {
    const p = this.getActiveProject();
    const sb = (p.storyboards || []).find(s => s.id === id);
    if (!sb) return;
    document.getElementById("sb-form-id").value = sb.id;
    document.getElementById("sbf-scene").value = sb.sceneNumber;
    document.getElementById("sbf-shot").value = sb.shotNumber;
    document.getElementById("sbf-framing").value = sb.framing || "";
    document.getElementById("sbf-movement").value = sb.movement || "";
    document.getElementById("sbf-image").value = sb.imageUrl || "";
    document.getElementById("sbf-caption").value = sb.caption || "";
    this.openModal("modal-storyboard");
  }

  saveStoryboardForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("sb-form-id").value;
    const sbData = {
      id: id || `sb_${Date.now()}`,
      sceneNumber: document.getElementById("sbf-scene").value.trim(),
      shotNumber: document.getElementById("sbf-shot").value.trim(),
      framing: document.getElementById("sbf-framing").value.trim(),
      movement: document.getElementById("sbf-movement").value.trim(),
      imageUrl: document.getElementById("sbf-image").value.trim(),
      caption: document.getElementById("sbf-caption").value.trim()
    };

    if (id) {
      const idx = p.storyboards.findIndex(s => s.id === id);
      if (idx !== -1) p.storyboards[idx] = sbData;
    } else {
      if (!p.storyboards) p.storyboards = [];
      p.storyboards.push(sbData);
    }

    this.saveProjects();
    this.renderStoryboard();
    this.closeModal("modal-storyboard");
  }

  deleteStoryboard(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus frame storyboard ini?")) {
      p.storyboards = p.storyboards.filter(s => s.id !== id);
      this.saveProjects();
      this.renderStoryboard();
    }
  }

  printStoryboardDeck() {
    window.print();
  }

  // ==========================================
  // FEATURE 3: CONTINUITY & CAMERA REPORT
  // ==========================================
  renderContinuity() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("continuity-table-body");
    if (!tbody || !p) return;

    if (!p.continuityLogs || p.continuityLogs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada catatan take. Klik <strong>+ Catat Take Baru</strong> saat kamera rolling di set.</td></tr>`;
      return;
    }

    let circles = 0;
    let ngs = 0;

    tbody.innerHTML = p.continuityLogs.map((cl) => {
      if (cl.isCircleTake) circles++;
      if ((cl.status || "").includes("NG")) ngs++;

      const starClass = cl.isCircleTake ? "circle-take-star active" : "circle-take-star";

      return `
        <tr style="${cl.isCircleTake ? 'background:rgba(245, 158, 11, 0.05); font-weight:600;' : ''}">
          <td style="text-align:center;"><span class="${starClass}" onclick="app.toggleCircleTake('${cl.id}')" title="Circle Take (Pilihan Editor)">★</span></td>
          <td><strong>SC ${cl.sceneNumber} / ${cl.shotNumber}</strong></td>
          <td style="font-weight:700;">TK ${cl.takeNumber}</td>
          <td><code style="font-size:0.75rem;">${this.escapeHTML(cl.clipName || "-")}</code></td>
          <td>${this.escapeHTML(cl.soundRoll || "-")}</td>
          <td><code style="font-size:0.75rem;">${cl.timecode || "-"}</code></td>
          <td><span class="badge ${cl.status.includes('Good') ? 'badge-green' : (cl.status.includes('NG') ? 'badge-red' : 'badge-gold')}">${cl.status}</span></td>
          <td style="max-width:260px;">${this.escapeHTML(cl.description || "-")}</td>
          <td>
            <button class="btn btn-danger-glass btn-sm" onclick="app.deleteContinuityTake('${cl.id}')">🗑️</button>
          </td>
        </tr>
      `;
    }).join("");

    document.getElementById("cnt-total-takes").textContent = p.continuityLogs.length;
    document.getElementById("cnt-circle-takes").textContent = circles;
    document.getElementById("cnt-ng-takes").textContent = ngs;
  }

  toggleCircleTake(id) {
    const p = this.getActiveProject();
    const cl = (p.continuityLogs || []).find(c => c.id === id);
    if (!cl) return;
    cl.isCircleTake = !cl.isCircleTake;
    this.saveProjects();
    this.renderContinuity();
  }

  openAddTakeModal() {
    const p = this.getActiveProject();
    const count = (p.continuityLogs || []).length + 1;
    document.getElementById("cntf-scene").value = "1";
    document.getElementById("cntf-shot").value = "1A";
    document.getElementById("cntf-take").value = count;
    document.getElementById("cntf-clip").value = `A001_C${String(count).padStart(3, '0')}`;
    document.getElementById("cntf-sound").value = "SR01";
    document.getElementById("cntf-tc").value = "08:30:00:00";
    document.getElementById("cntf-status").value = "Good Take";
    document.getElementById("cntf-circle").checked = true;
    document.getElementById("cntf-desc").value = "";
    this.openModal("modal-continuity");
  }

  saveContinuityForm() {
    const p = this.getActiveProject();
    const logData = {
      id: `cl_${Date.now()}`,
      sceneNumber: document.getElementById("cntf-scene").value.trim(),
      shotNumber: document.getElementById("cntf-shot").value.trim(),
      takeNumber: parseInt(document.getElementById("cntf-take").value) || 1,
      clipName: document.getElementById("cntf-clip").value.trim(),
      soundRoll: document.getElementById("cntf-sound").value.trim(),
      timecode: document.getElementById("cntf-tc").value.trim(),
      status: document.getElementById("cntf-status").value,
      isCircleTake: document.getElementById("cntf-circle").checked,
      description: document.getElementById("cntf-desc").value.trim()
    };

    if (!p.continuityLogs) p.continuityLogs = [];
    p.continuityLogs.push(logData);
    this.saveProjects();
    this.renderContinuity();
    this.closeModal("modal-continuity");
  }

  deleteContinuityTake(id) {
    const p = this.getActiveProject();
    p.continuityLogs = p.continuityLogs.filter(c => c.id !== id);
    this.saveProjects();
    this.renderContinuity();
  }

  exportContinuityCSV() {
    const p = this.getActiveProject();
    if (!p.continuityLogs || p.continuityLogs.length === 0) return alert("Belum ada data take untuk diekspor.");
    
    let csv = "Scene,Shot,Take,CircleTake,ClipName,SoundRoll,Timecode,Status,Notes\n";
    p.continuityLogs.forEach(c => {
      csv += `"${c.sceneNumber}","${c.shotNumber}","${c.takeNumber}","${c.isCircleTake ? 'YES' : 'NO'}","${c.clipName}","${c.soundRoll}","${c.timecode}","${c.status}","${(c.description || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Camera_Report_${(p.title || 'project').replace(/\s+/g, '_')}.csv`;
    link.click();
  }

  // ==========================================
  // FEATURE 4: BUDGET & PETTY CASH TRACKER
  // ==========================================
  renderBudget() {
    const p = this.getActiveProject();
    if (!p || !p.budget) return;

    const b = p.budget;
    const cats = b.categories || [];
    const pcs = b.pettyCash || [];

    let totalEst = 0;
    let totalAct = 0;

    const tbodyItems = document.getElementById("budget-items-table-body");
    tbodyItems.innerHTML = cats.map((item, idx) => {
      totalEst += parseInt(item.estimated) || 0;
      totalAct += parseInt(item.actual) || 0;
      const variance = (parseInt(item.estimated) || 0) - (parseInt(item.actual) || 0);

      const varianceHtml = variance >= 0 
        ? `<span style="color:var(--accent-green); font-weight:700;">+Rp ${variance.toLocaleString('id-ID')}</span>`
        : `<span style="color:var(--accent-red); font-weight:700;">-Rp ${Math.abs(variance).toLocaleString('id-ID')}</span>`;

      return `
        <tr>
          <td><span class="badge ${item.type.includes('Above') ? 'badge-purple' : 'badge-blue'}">${this.escapeHTML(item.type)}</span></td>
          <td><strong>${this.escapeHTML(item.item)}</strong></td>
          <td>Rp ${(parseInt(item.estimated) || 0).toLocaleString('id-ID')}</td>
          <td>Rp ${(parseInt(item.actual) || 0).toLocaleString('id-ID')}</td>
          <td>${varianceHtml}</td>
          <td><span style="font-size:0.75rem; color:var(--apple-text-sub);">${this.escapeHTML(item.notes || "-")}</span></td>
          <td><button class="btn btn-danger-glass btn-sm" onclick="app.deleteBudgetItem(${idx})">🗑️</button></td>
        </tr>
      `;
    }).join("");

    let pettyTotal = 0;
    const tbodyPetty = document.getElementById("petty-cash-table-body");
    tbodyPetty.innerHTML = pcs.map((pc, idx) => {
      pettyTotal += parseInt(pc.amount) || 0;
      return `
        <tr>
          <td>${pc.date || "-"}</td>
          <td><strong>${this.escapeHTML(pc.desc)}</strong></td>
          <td>Rp ${(parseInt(pc.amount) || 0).toLocaleString('id-ID')}</td>
          <td>${this.escapeHTML(pc.pic || "-")}</td>
          <td><span class="badge badge-green">${this.escapeHTML(pc.status || "Ada Nota")}</span></td>
          <td><button class="btn btn-danger-glass btn-sm" onclick="app.deletePettyCash(${idx})">🗑️</button></td>
        </tr>
      `;
    }).join("");

    const remaining = totalEst - totalAct;
    const pct = totalEst > 0 ? Math.min(100, Math.round((totalAct / totalEst) * 100)) : 0;

    document.getElementById("bg-stat-total").textContent = `Rp ${totalEst.toLocaleString('id-ID')}`;
    document.getElementById("bg-stat-actual").textContent = `Rp ${totalAct.toLocaleString('id-ID')}`;
    document.getElementById("bg-stat-remaining").textContent = `Rp ${remaining.toLocaleString('id-ID')}`;
    document.getElementById("bg-progress-bar").style.width = `${pct}%`;
    document.getElementById("bg-progress-text").textContent = `${pct}% Terpakai`;
    document.getElementById("bg-petty-total").textContent = `Total Kas: Rp ${pettyTotal.toLocaleString('id-ID')}`;
  }

  openAddBudgetItemModal() {
    document.getElementById("bgf-item").value = "";
    document.getElementById("bgf-estimated").value = "";
    document.getElementById("bgf-actual").value = "";
    document.getElementById("bgf-notes").value = "";
    this.openModal("modal-budget-item");
  }

  saveBudgetItemForm() {
    const p = this.getActiveProject();
    const itemData = {
      id: `b_${Date.now()}`,
      type: document.getElementById("bgf-type").value,
      item: document.getElementById("bgf-item").value.trim(),
      estimated: parseInt(document.getElementById("bgf-estimated").value) || 0,
      actual: parseInt(document.getElementById("bgf-actual").value) || 0,
      notes: document.getElementById("bgf-notes").value.trim()
    };
    if (!p.budget) p.budget = { totalEstimated: 150000000, categories: [], pettyCash: [] };
    p.budget.categories.push(itemData);
    this.saveProjects();
    this.renderBudget();
    this.closeModal("modal-budget-item");
  }

  deleteBudgetItem(idx) {
    const p = this.getActiveProject();
    p.budget.categories.splice(idx, 1);
    this.saveProjects();
    this.renderBudget();
  }

  openAddPettyCashModal() {
    document.getElementById("pcf-date").value = new Date().toISOString().split("T")[0];
    document.getElementById("pcf-amount").value = "";
    document.getElementById("pcf-desc").value = "";
    document.getElementById("pcf-pic").value = "Tim Unit / PA";
    this.openModal("modal-petty-cash");
  }

  savePettyCashForm() {
    const p = this.getActiveProject();
    const pcData = {
      id: `pc_${Date.now()}`,
      date: document.getElementById("pcf-date").value,
      amount: parseInt(document.getElementById("pcf-amount").value) || 0,
      desc: document.getElementById("pcf-desc").value.trim(),
      pic: document.getElementById("pcf-pic").value.trim(),
      status: document.getElementById("pcf-status").value
    };
    if (!p.budget) p.budget = { totalEstimated: 150000000, categories: [], pettyCash: [] };
    if (!p.budget.pettyCash) p.budget.pettyCash = [];
    p.budget.pettyCash.push(pcData);
    this.saveProjects();
    this.renderBudget();
    this.closeModal("modal-petty-cash");
  }

  deletePettyCash(idx) {
    const p = this.getActiveProject();
    p.budget.pettyCash.splice(idx, 1);
    this.saveProjects();
    this.renderBudget();
  }

  // ==========================================
  // FEATURE 5: CLOUD DATABASE SYNC ENGINE
  // ==========================================
  renderCloudSync() {
    const p = this.getActiveProject();
    if (!p || !p.cloudConfig) return;
    const c = p.cloudConfig;
    document.getElementById("cloud-provider").value = c.provider || "supabase";
    document.getElementById("cloud-url").value = c.url || "";
    document.getElementById("cloud-key").value = c.anonKey || "";
    document.getElementById("cloud-enable-toggle").checked = !!c.enabled;

    const dot = document.getElementById("cloud-indicator-dot");
    const title = document.getElementById("cloud-status-title");

    if (c.enabled && c.url) {
      dot.style.background = "#10b981";
      dot.style.boxShadow = "0 0 12px #10b981";
      title.textContent = `Online Cloud Synced (${c.provider.toUpperCase()} Active)`;
    } else {
      dot.style.background = "#94a3b8";
      dot.style.boxShadow = "none";
      title.textContent = "Offline Local Mode (Browser Storage)";
    }
  }

  saveCloudSettings() {
    const p = this.getActiveProject();
    if (!p) return;
    p.cloudConfig = {
      provider: document.getElementById("cloud-provider").value,
      url: document.getElementById("cloud-url").value.trim(),
      anonKey: document.getElementById("cloud-key").value.trim(),
      enabled: document.getElementById("cloud-enable-toggle").checked,
      lastSynced: new Date().toISOString()
    };
    this.saveProjects();
    this.renderCloudSync();
    this.updateWorkspaceStats();
    alert("Konfigurasi Cloud Database berhasil disimpan!");
  }

  syncCloudNow() {
    const p = this.getActiveProject();
    if (!p.cloudConfig || !p.cloudConfig.url) {
      alert("Harap masukkan Project URL dan API Key cloud database Anda terlebih dahulu.");
      return;
    }
    p.cloudConfig.lastSynced = new Date().toISOString();
    this.saveProjects();
    alert(`Sinkronisasi berhasil! Data proyek "${p.title}" telah diperbarui ke ${p.cloudConfig.provider.toUpperCase()}.`);
  }

  // ==========================================
  // OTHER PRODUCTION TOOLS (SHOTS, CAST, CREW, GEAR, CALL SHEET)
  // ==========================================
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
      storyboards: [],
      stripboard: [],
      continuityLogs: [],
      budget: { totalEstimated: 100000000, categories: [], pettyCash: [] },
      cloudConfig: { provider: "supabase", url: "", anonKey: "", enabled: false, lastSynced: null },
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
    if (confirm(`Hapus proyek "${p.title}"?`)) {
      this.projects = this.projects.filter((item) => item.id !== id);
      this.saveProjects();
      this.renderLanding();
    }
  }

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
    this.switchTab("tab-callsheet");
    this.renderCallSheet();
    window.print();
  }

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

let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new ProductionApp();
});