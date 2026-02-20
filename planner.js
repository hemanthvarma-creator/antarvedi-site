function handlePurposeChange() {
  const purpose = document.getElementById("purpose").value;
  const group = document.getElementById("group");

  if (purpose === "family") {
    group.value = "family";
    [...group.options].forEach(opt => {
      opt.disabled = opt.value !== "family";
    });
  } else {
    [...group.options].forEach(opt => opt.disabled = false);
  }
}

function handleDaysChange() {
  const days = document.getElementById("days").value;
  const stay = document.getElementById("stay");

  if (days === "half") {
    stay.value = "none";
    [...stay.options].forEach(opt => {
      opt.disabled = opt.value !== "none";
    });
  } else {
    [...stay.options].forEach(opt => opt.disabled = false);
  }
}

function generatePlan() {
  const purpose = document.getElementById("purpose").value;
  const days = document.getElementById("days").value;
  const stay = document.getElementById("stay").value;
  const result = document.getElementById("planResult");

  let html = `<h3>Your Personalized Antarvedi Travel Plan</h3>`;

  /* ================= HALF DAY ================= */
  if (days === "half") {
    html += `<h4>Half Day Plan</h4><ul>`;

    if (purpose === "temple") {
      html += `
        <li>Early morning darshan at Sri Lakshmi Narasimha Swamy Temple</li>
        <li>Short visit to Sagara Sangamam</li>
        <li>Return before afternoon</li>`;
    }

    if (purpose === "boating") {
      html += `
        <li>Short boating experience</li>
        <li>Mangrove backwater ride</li>
        <li>Return by noon</li>`;
    }

    if (purpose === "relax") {
      html += `
        <li>Peaceful beach walk</li>
        <li>Lighthouse visit</li>
        <li>Relax and return</li>`;
    }

    html += `</ul>`;
  }

  /* ================= 1 DAY ================= */
  if (days === "1") {
    html += `<h4>Day 1</h4><ul>`;

    if (purpose === "temple") {
      html += `
        <li>Morning temple darshan and abhishekam</li>
        <li>Annanadam lunch</li>
        <li>Evening beach walk</li>`;
    }

    if (purpose === "boating") {
      html += `
        <li>Boating to Sagara Sangamam</li>
        <li>Mada Adavulu mangrove boating</li>
        <li>Optional speed boating</li>`;
    }

    if (purpose === "relax") {
      html += `
        <li>Relaxed beach visit</li>
        <li>Lighthouse and sunset views</li>
        <li>Calm evening</li>`;
    }

    html += `</ul>`;
  }

  /* ================= 2 DAYS ================= */
  if (days === "2") {

    /* ---------- DAY 1 ---------- */
    html += `<h4>Day 1</h4><ul>`;

    if (purpose === "temple") {
      html += `
        <li>Temple darshan and rituals</li>
        <li>Annanadam lunch</li>
        <li>Evening beach walk</li>`;
    }

    if (purpose === "boating") {
      html += `
        <li>Boating to Sagara Sangamam</li>
        <li>Mangrove forest boating</li>
        <li>Optional speed boating</li>`;
    }

    if (purpose === "relax") {
      html += `
        <li>Beach relaxation</li>
        <li>Lighthouse visit</li>
        <li>Sunset photography</li>`;
    }

    html += `</ul>`;

    /* ---------- DAY 2 ---------- */
    html += `<h4>Day 2</h4><ul>`;

    if (purpose === "temple") {
      html += `
        <li>Boating to Sagara Sangamam</li>
        <li>Local sightseeing</li>
        <li>Return journey</li>`;
    }

    if (purpose === "boating") {
      html += `
        <li>Morning temple darshan</li>
        <li>Dindi backwater resorts visit</li>
        <li>Leisure time and return</li>`;
    }

    if (purpose === "relax") {
      html += `
        <li>Dindi resort or backwater visit</li>
        <li>Village exploration</li>
        <li>Relaxed return</li>`;
    }

    html += `</ul>`;
  }

  /* ================= 3 DAYS ================= */
  if (days === "3") {

    html += `<h4>Day 1 – Spiritual Focus</h4><ul>
      <li>Temple darshan and rituals</li>
      <li>Evening beach walk</li>
    </ul>`;

    html += `<h4>Day 2 – Nature & Boating</h4><ul>
      <li>Mangrove forest boating</li>
      <li>Sagara Sangamam visit</li>
      <li>Sunset photography</li>
    </ul>`;

    html += `<h4>Day 3 – Relax & Explore</h4><ul>
      <li>Dindi backwater resorts</li>
      <li>Local sightseeing</li>
      <li>Return journey</li>
    </ul>`;
  }

  /* ================= STAY ================= */
  html += `<h4>Stay Recommendation</h4><p>`;

  if (stay === "none") {
    html += `No overnight stay required. Same-day return recommended.`;
  }

  if (stay === "budget") {
    html += `Budget lodges, guest houses, and homestays near Antarvedi and Dindi.`;
  }

  if (stay === "resort") {
    html += `Riverside and backwater resorts at Dindi for a peaceful stay.`;
  }

  html += `</p>`;

  /* ================= AI TIPS ================= */
  html += `
    <h4>AI Travel Tips</h4>
    <ul>
      <li>Start early to avoid crowds</li>
      <li>Confirm boating availability locally</li>
      <li>Avoid noon beach visits in summer</li>
      <li>Best season: October to March</li>
    </ul>
  `;

  result.innerHTML = html;
  result.style.display = "block";
  quickLinks.style.display = "flex";
  result.scrollIntoView({ behavior: "smooth" });
}
