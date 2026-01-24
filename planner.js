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
    html += `<h4>Half-Day Plan</h4><ul>`;

    if (purpose === "temple") {
      html += `
        <li>Early morning darshan at Sri Lakshmi Narasimha Swamy Temple</li>
        <li>Short visit to Sagar Sangamam</li>
        <li>Return before afternoon</li>`;
    }

    if (purpose === "nature") {
      html += `
        <li>Antarvedi beach walk</li>
        <li>Lighthouse climb for panoramic views</li>`;
    }

    if (purpose === "boating") {
      html += `
        <li>Short regular boating experience</li>
        <li>Optional speed boating (weather permitting)</li>`;
    }

    if (purpose === "relax") {
      html += `
        <li>Quiet beach walk</li>
        <li>Sea breeze relaxation near lighthouse</li>`;
    }

    if (purpose === "family") {
      html += `
        <li>Temple darshan suitable for all ages</li>
        <li>Beach visit and light refreshments</li>`;
    }

    html += `</ul>`;
  }

  /* ================= 1 DAY ================= */
  if (days === "1") {
    html += `
      <h4>Day 1</h4>
      <ul>
        <li>Morning temple darshan and abhishekam</li>
        <li>Annadanam lunch at temple</li>
        <li>Afternoon rest or local exploration</li>
        <li>Evening beach walk and lighthouse visit</li>
      </ul>`;
  }

  /* ================= 2 DAYS ================= */
  if (days === "2") {
    html += `
      <h4>Day 1</h4>
      <ul>
        <li>Arrival and temple darshan</li>
        <li>Annadanam or local lunch</li>
        <li>Evening beach walk and sunset views</li>
      </ul>

      <h4>Day 2</h4>
      <ul>
        <li>Boating to Sagar Sangamam</li>
        <li>Mada Adavulu mangrove forest boating</li>
        <li>Relaxed return journey</li>
      </ul>`;
  }

  /* ================= 3 DAYS ================= */
  if (days === "3") {
    html += `
      <h4>Day 1 – Spiritual Focus</h4>
      <ul>
        <li>Temple darshan and rituals</li>
        <li>Evening beach walk</li>
      </ul>

      <h4>Day 2 – Nature & Boating</h4>
      <ul>
        <li>Mada Adavulu mangrove boating</li>
        <li>Optional speed boating</li>
        <li>Sunset photography</li>
      </ul>

      <h4>Day 3 – Relaxed Exploration</h4>
      <ul>
        <li>Morning darshan or meditation</li>
        <li>Explore nearby villages and fishing ponds</li>
        <li>Return journey</li>
      </ul>`;
  }

  /* ================= STAY ================= */
  html += `<h4>Stay Recommendation</h4><p>`;

  if (stay === "none") {
    html += `No overnight stay required. Same-day return recommended.`;
  }

  if (stay === "budget") {
    html += `Budget local lodges, guest houses, and homestays near Antarvedi and Dindi.`;
  }

  if (stay === "resort") {
    html += `Riverside and backwater resorts at Dindi for a peaceful stay.`;
  }

  html += `</p>`;

  /* ================= AI TIPS ================= */
  html += `
    <h4>AI Travel Tips</h4>
    <ul>
      <li>Start early for temple darshan</li>
      <li>Confirm boating availability locally</li>
      <li>Avoid noon beach visits in summer</li>
      <li>Best season: October to March</li>
    </ul>
  `;

  result.innerHTML = html;
  result.style.display = "block";
  result.scrollIntoView({ behavior: "smooth" });
}
