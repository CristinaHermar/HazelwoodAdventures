(function () {
  "use strict";

  const STORAGE_KEY = "glasgow-plan-v1";

  // ⚠️ Replace with your WhatsApp number, country code first, digits only
  // (no "+", no spaces, no leading 0). Example UK: "447123456789".
  const WHATSAPP_NUMBER = "5215588068950";

  const bikeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6h4l-3 6.5H9l3-8H6"/><path d="M9 12.5l2.5 5"/></svg>`;
  const waIcon = `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.9-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 17.8a9 9 0 0 1-4.6-1.3l-.3-.2-3 1 1-2.9-.2-.3A9 9 0 1 1 12 21.3Zm5-6.7c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.8.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3Z"/></svg>`;

  function whatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  const cardList = document.getElementById("cardList");
  const resultCount = document.getElementById("resultCount");
  const searchInput = document.getElementById("search");
  const sortSelect = document.getElementById("sortBy");
  const zoneFiltersEl = document.getElementById("zoneFilters");
  const typeFiltersEl = document.getElementById("typeFilters");

  const state = {
    query: "",
    zone: "all",
    type: "all",
    sort: "bike",
    plan: loadPlan()
  };

  function loadPlan() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return {
        sat: parsed?.sat || [],
        sun: parsed?.sun || [],
        when: {
          sat: { date: parsed?.when?.sat?.date || "", time: parsed?.when?.sat?.time || "" },
          sun: { date: parsed?.when?.sun?.date || "", time: parsed?.when?.sun?.time || "" }
        }
      };
    } catch (e) {
      return { sat: [], sun: [], when: { sat: { date: "", time: "" }, sun: { date: "", time: "" } } };
    }
  }

  function savePlan() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.plan));
    } catch (e) {
      /* storage unavailable, ignore */
    }
  }

  function idFor(place) {
    return place.place + "|" + place.location;
  }

  // ---------- Build filter chip lists ----------
  function uniqueSorted(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
  }

  const zones = uniqueSorted(PLACES.map((p) => p.location));
  const types = uniqueSorted(PLACES.map((p) => p.type));

  function buildChips(container, values, key) {
    const allChip = makeChip("All", "all", key);
    container.appendChild(allChip);
    values.forEach((v) => container.appendChild(makeChip(v, v, key)));
  }

  function makeChip(label, value, key) {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.type = "button";
    btn.textContent = label;
    btn.dataset.value = value;
    btn.setAttribute("aria-pressed", String(state[key] === value));
    btn.addEventListener("click", () => {
      state[key] = value;
      [...container(key).children].forEach((c) =>
        c.setAttribute("aria-pressed", String(c.dataset.value === value))
      );
      render();
    });
    return btn;
  }

  function container(key) {
    return key === "zone" ? zoneFiltersEl : typeFiltersEl;
  }

  buildChips(zoneFiltersEl, zones, "zone");
  buildChips(typeFiltersEl, types, "type");

  // ---------- Search & sort ----------
  searchInput.addEventListener("input", (e) => {
    state.query = e.target.value.trim().toLowerCase();
    render();
  });

  sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  // ---------- Rendering ----------
  function matches(place) {
    const q = state.query;
    const inQuery =
      !q ||
      place.place.toLowerCase().includes(q) ||
      place.location.toLowerCase().includes(q) ||
      place.type.toLowerCase().includes(q) ||
      place.desc.toLowerCase().includes(q);
    const inZone = state.zone === "all" || place.location === state.zone;
    const inType = state.type === "all" || place.type === state.type;
    return inQuery && inZone && inType;
  }

  function sortList(list) {
    const copy = list.slice();
    if (state.sort === "bike") copy.sort((a, b) => a.bike - b.bike);
    else if (state.sort === "place") copy.sort((a, b) => a.place.localeCompare(b.place));
    else if (state.sort === "location") copy.sort((a, b) => a.location.localeCompare(b.location));
    return copy;
  }

  function render() {
    const filtered = sortList(PLACES.filter(matches));
    resultCount.textContent = `${filtered.length} of ${PLACES.length} places`;
    cardList.innerHTML = "";

    filtered.forEach((place) => {
      cardList.appendChild(renderCard(place));
    });

    renderPlanBar();
    renderDrawer();
  }

  function renderCard(place) {
    const id = idFor(place);
    const li = document.createElement("li");
    li.className = "card";

    const inSat = state.plan.sat.includes(id);
    const inSun = state.plan.sun.includes(id);

    li.innerHTML = `
      <div class="card__top">
        <div>
          <p class="card__name">${escapeHtml(place.place)}</p>
          <p class="card__meta">${escapeHtml(place.location)} · ${escapeHtml(place.time)}</p>
        </div>
        <span class="card__bike">${bikeIcon} ~${place.bike} min</span>
      </div>
      <p class="card__desc">${escapeHtml(place.desc)}</p>
      <div class="card__tags">
        <span class="tag tag--price">${escapeHtml(place.price)}</span>
        <span class="tag">${escapeHtml(place.type)}</span>
      </div>
      <div class="card__actions">
        <button class="day-btn" data-day="sat" aria-pressed="${inSat}">Sat</button>
        <button class="day-btn" data-day="sun" aria-pressed="${inSun}">Sun</button>
        <a class="wa-icon-btn" href="${whatsappLink(singlePlaceMessage(place))}" target="_blank" rel="noopener" aria-label="Send this plan on WhatsApp">${waIcon}</a>
      </div>
    `;

    li.querySelectorAll(".day-btn").forEach((btn) => {
      btn.addEventListener("click", () => toggleDay(id, btn.dataset.day, btn));
    });

    return li;
  }

  function singlePlaceMessage(place) {
    return `Hey Cristina! I'd like to do this plan with you: ${place.place} (${place.location}). Are you in?`;
  }

  function toggleDay(id, day, btn) {
    const list = state.plan[day];
    const idx = list.indexOf(id);
    if (idx >= 0) {
      list.splice(idx, 1);
      btn.setAttribute("aria-pressed", "false");
    } else {
      list.push(id);
      btn.setAttribute("aria-pressed", "true");
    }
    savePlan();
    renderPlanBar();
    if (drawerOpenDay) renderDrawer();
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
  }

  // ---------- Plan bar + drawer ----------
  const countSat = document.getElementById("countSat");
  const countSun = document.getElementById("countSun");
  const tabSat = document.getElementById("tabSat");
  const tabSun = document.getElementById("tabSun");
  const sendSat = document.getElementById("sendSat");
  const sendSun = document.getElementById("sendSun");
  const drawer = document.getElementById("drawer");
  const drawerHandle = document.getElementById("drawerHandle");
  const drawerTitle = document.getElementById("drawerTitle");
  const drawerTotal = document.getElementById("drawerTotal");
  const drawerList = document.getElementById("drawerList");
  const drawerEmpty = document.getElementById("drawerEmpty");

  let drawerOpenDay = null;

  const drawerWhatsApp = document.getElementById("drawerWhatsApp");
  const drawerWhatsAppLabel = document.getElementById("drawerWhatsAppLabel");
  const drawerDate = document.getElementById("drawerDate");
  const drawerTime = document.getElementById("drawerTime");

  drawerDate.addEventListener("input", () => {
    if (!drawerOpenDay) return;
    state.plan.when[drawerOpenDay].date = drawerDate.value;
    savePlan();
    renderPlanBar();
  });

  drawerTime.addEventListener("input", () => {
    if (!drawerOpenDay) return;
    state.plan.when[drawerOpenDay].time = drawerTime.value;
    savePlan();
    renderPlanBar();
  });

  function renderPlanBar() {
    const satItems = dayPlaces("sat");
    const sunItems = dayPlaces("sun");

    countSat.textContent = satItems.length;
    countSun.textContent = sunItems.length;

    sendSat.classList.toggle("is-empty", satItems.length === 0);
    sendSun.classList.toggle("is-empty", sunItems.length === 0);
    sendSat.href = satItems.length ? whatsappLink(dayMessage("sat", satItems)) : "#";
    sendSun.href = sunItems.length ? whatsappLink(dayMessage("sun", sunItems)) : "#";
  }

  function openDrawer(day) {
    drawerOpenDay = day;
    drawer.classList.add("open");
    renderDrawer();
  }

  function closeDrawer() {
    drawerOpenDay = null;
    drawer.classList.remove("open");
  }

  tabSat.addEventListener("click", () => (drawerOpenDay === "sat" ? closeDrawer() : openDrawer("sat")));
  tabSun.addEventListener("click", () => (drawerOpenDay === "sun" ? closeDrawer() : openDrawer("sun")));
  drawerHandle.addEventListener("click", closeDrawer);

  function dayPlaces(day) {
    return state.plan[day]
      .map((id) => PLACES.find((p) => idFor(p) === id))
      .filter(Boolean);
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  }

  function dayMessage(day, items) {
    const dayName = day === "sat" ? "Saturday" : "Sunday";
    if (!items.length) return "";
    const list = items.map((p) => `• ${p.place} (${p.location})`).join("\n");
    const when = state.plan.when[day];
    const dateLabel = formatDate(when.date) || dayName;
    const timePart = when.time ? ` at ${when.time}` : "";
    return `Hey Cristina! I'd like to do this plan with you:\n${list}\n\nI could do it on ${dateLabel}${timePart}. Are you in?`;
  }

  function renderDrawer() {
    if (!drawerOpenDay) return;
    const day = drawerOpenDay;
    drawerTitle.textContent = day === "sat" ? "Saturday" : "Sunday";
    drawerDate.value = state.plan.when[day].date;
    drawerTime.value = state.plan.when[day].time;

    const items = dayPlaces(day);

    drawerList.innerHTML = "";
    drawerEmpty.style.display = items.length ? "none" : "block";
    drawerWhatsApp.style.display = items.length ? "flex" : "none";

    let totalBike = 0;
    items.forEach((place) => {
      totalBike += place.bike;
      const li = document.createElement("li");
      li.className = "drawer__item";
      li.innerHTML = `
        <span>${escapeHtml(place.place)} <small style="color:#8a7f8f">(~${place.bike} min)</small></span>
        <button type="button">Remove</button>
      `;
      li.querySelector("button").addEventListener("click", () => {
        const idx = state.plan[day].indexOf(idFor(place));
        if (idx >= 0) state.plan[day].splice(idx, 1);
        savePlan();
        render();
      });
      drawerList.appendChild(li);
    });

    drawerTotal.textContent = items.length
      ? `${items.length} stop${items.length > 1 ? "s" : ""} · ~${totalBike} min biking (travel time only)`
      : "";

    drawerWhatsAppLabel.textContent = `Send ${day === "sat" ? "Saturday" : "Sunday"} plan on WhatsApp`;
    drawerWhatsApp.onclick = () => {
      const msg = dayMessage(day, items);
      if (msg) window.open(whatsappLink(msg), "_blank", "noopener");
    };
  }

  render();

  // ---------- Suggest-something link ----------
  const suggestBtn = document.getElementById("suggestBtn");
  suggestBtn.href = whatsappLink(
    "Hi Cristina! I have a recommendation for you: "
  );
})();
