/* ===============================
   SMART FIELD RULES
================================ */
function applyPlannerRules() {
  const purpose = document.getElementById("purpose").value;
  const days = document.getElementById("days").value;
  const group = document.getElementById("group");
  const stay = document.getElementById("stay");

  /* Rule 1: If Family Trip → lock Traveling With = Family */
  if (purpose === "family") {
    group.value = "family";
    [...group.options].forEach(opt => {
      opt.disabled = opt.value !== "family";
    });
  } else {
    [...group.options].forEach(opt => opt.disabled = false);
  }

  /* Rule 2: If Half Day → only No Stay allowed */
  if (days === "half") {
    stay.value = "none";
    [...stay.options].forEach(opt => {
      opt.disabled = opt.value !== "none";
    });
  } else {
    [...stay.options].forEach(opt => opt.disabled = false);
  }
}

/* Run rules whenever user changes selections */
document.getElementById("purpose").addEventListener("change", applyPlannerRules);
document.getElementById("days").addEventListener("change", applyPlannerRules);

/* ===============================
   PLAN GENERATION
================================ */
function generatePlan() {
  const purpose = document.getElementById("purpose").value;
  const days = document.getElementById("days").value;
  const stay = document.getElementById("stay").value;

  let plan = `<h3>Your Personalized Antarvedi Travel Plan</h3>`;

  /* ---------- HALF DAY ---------- */
  if (days === "half") {
    plan += `
      <h4>Half Day Itinerary</h4>
      <ul>
        ${purpose === "temple" ? `
          <li>Early morning darshan at Sri Lakshmi Narasimha Swamy Temple</li>
          <li>Brief visit to Sagar Sangamam</li>` : ``}

        ${purpose === "relax" ? `
          <li>Peaceful beach walk</li>
          <li>Lighthouse visit with sea breeze</li>` : ``}

        ${purpose === "nature" ? `
          <li>Beach exploration</li>
          <li>Panoramic lighthouse views</li>` : ``}

        ${purpose === "boating" ? `
          <li>Speed boating experience (weather permitting)</li>
          <li>Short regular boat ride</li>` : ``}

        ${purpose === "family" ? `
          <li>Temple darshan with family</li>
          <li>Calm beach visit suitable for all ages</li>` : ``}

        <li>Return journey before afternoon</li>
      </ul>`;
  }

  /* ---------- 1 DAY ---------- */
  if (days === "1") {
    plan += `
      <h4>Day 1</h4>
      <ul>
        ${purpose === "temple" ? `
          <li>Morning darshan and abhishekam</li>
          <li>Annadanam lunch</li>
          <li>Evening beach & lighthouse visit</li>` : ``}

        ${purpose === "relax" ? `
          <li>Late morning arrival</li>
          <li>Beach relaxation</li>
          <li>Calm evening boating</li>` : ``}

        ${purpose === "nature" ? `
          <li>Beach walk and lighthouse climb</li>
          <li>Sunset at river–sea confluence</li>` : ``}

        ${purpose === "boating" ? `
          <li>Regular boating to Sagar Sangamam</li>
          <li>Afternoon speed boating</li>` : ``}

        ${purpose === "family" ? `
          <li>Temple darshan and annadanam</li>
          <li>Evening beach walk</li>` : ``}
      </ul>`;
  }

  /* ---------- 2 DAYS ---------- */
  if (days === "2") {
    plan += `
      <h4>Day 1</h4>
      <ul>
        <li>Arrival and temple darshan</li>
        <li>Lunch and rest</li>
        <li>Evening beach walk & sunset</li>
      </ul>

      <h4>Day 2</h4>
      <ul>
        ${purpose === "temple" ? `
          <li>Sagar Sangamam boating</li>
          <li>Spiritual relaxation</li>` : ``}

        ${purpose === "relax" || purpose === "nature" ? `
          <li>Mada Adavulu mangrove forest boating</li>
          <li>Nature photography</li>` : ``}

        ${purpose === "boating" ? `
          <li>Mangrove boating</li>
          <li>Optional speed boating</li>` : ``}

        ${purpose === "family" ? `
          <li>Safe regular boating</li>
          <li>Family leisure time</li>` : ``}
      </ul>`;
  }

  /* ---------- 3 DAYS ---------- */
  if (days === "3") {
    plan += `
      <h4>Day 1</h4>
      <ul>
        <li>Temple darshan and rituals</li>
        <li>Evening beach walk</li>
      </ul>

      <h4>Day 2</h4>
      <ul>
        <li>Mada Adavulu mangrove boating</li>
        <li>Speed or leisure boating</li>
        <li>Sunset photography</li>
      </ul>

      <h4>Day 3</h4>
      <ul>
        <li>Relaxed morning darshan</li>
        <li>Explore nearby villages and fishing ponds</li>
        <li>Return journey</li>
      </ul>`;
  }

  /* ---------- STAY (ALWAYS SHOW) ---------- */
  if (stay === "none") {
    plan += `<p><strong>Stay:</strong> Same day return (no overnight stay).</p>`;
  }

  if (stay === "budget") {
    plan += `<p><strong>Stay:</strong> Budget local lodges, guest houses, and homestays near Antarvedi & Dindi.</p>`;
  }

  if (stay === "resort") {
    plan += `<p><strong>Stay:</strong> Riverside and backwater resorts at Dindi.</p>`;
  }

  /* ---------- AI TIP ---------- */
  plan += `
    <p><strong>AI Tip:</strong> Start early for darshan, confirm boating availability locally, and avoid peak afternoon heat.</p>`;

  document.getElementById("planResult").innerHTML = plan;
}
