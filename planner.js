function generatePlan() {
  const purpose = document.getElementById("purpose").value;
  const days = document.getElementById("days").value;
  const stay = document.getElementById("stay").value;

  let plan = `<h3>Your Personalized Antarvedi AI Travel Plan</h3>`;

  /* ================= HALF DAY ================= */
  if (days === "half") {
    plan += `<h4>Half Day Plan</h4><ul>`;

    if (purpose === "temple") {
      plan += `
        <li>Early morning darshan at Sri Lakshmi Narasimha Swamy Temple</li>
        <li>Brief visit to Sagar Sangamam</li>
        <li>Return journey before afternoon</li>`;
    }

    if (purpose === "relax") {
      plan += `
        <li>Quiet beach walk</li>
        <li>Lighthouse visit with sea breeze</li>
        <li>Sunset relaxation by the shore</li>`;
    }

    if (purpose === "nature") {
      plan += `
        <li>Antarvedi beach exploration</li>
        <li>Lighthouse climb for panoramic views</li>`;
    }

    if (purpose === "boating") {
      plan += `
        <li>Speed boating experience (weather permitting)</li>
        <li>Short regular boat ride</li>`;
    }

    if (purpose === "family") {
      plan += `
        <li>Temple darshan with family</li>
        <li>Beach visit suitable for all ages</li>`;
    }

    plan += `</ul>`;
  }

  /* ================= 1 DAY ================= */
  if (days === "1") {
    plan += `<h4>Day 1</h4><ul>`;

    if (purpose === "temple") {
      plan += `
        <li>Morning darshan and abhishekam</li>
        <li>Annadanam lunch at temple</li>
        <li>Evening visit to beach and lighthouse</li>`;
    }

    if (purpose === "relax") {
      plan += `
        <li>Late morning arrival and beach relaxation</li>
        <li>Calm evening boating experience</li>`;
    }

    if (purpose === "nature") {
      plan += `
        <li>Beach walk and lighthouse adventure</li>
        <li>Sunset at river–sea confluence</li>`;
    }

    if (purpose === "boating") {
      plan += `
        <li>Morning regular boating to Sagar Sangamam</li>
        <li>Afternoon speed boating</li>`;
    }

    if (purpose === "family") {
      plan += `
        <li>Temple darshan and annadanam</li>
        <li>Evening beach walk and relaxation</li>`;
    }

    plan += `</ul>`;
  }

  /* ================= 2 DAYS ================= */
  if (days === "2") {
    plan += `<h4>Day 1</h4><ul>`;

    plan += `
      <li>Arrival and temple darshan</li>
      <li>Lunch and short rest</li>
      <li>Evening beach walk and sunset views</li>
    </ul>`;

    plan += `<h4>Day 2</h4><ul>`;

    if (purpose === "temple") {
      plan += `
        <li>Sagar Sangamam boating</li>
        <li>Peaceful spiritual relaxation</li>`;
    }

    if (purpose === "relax" || purpose === "nature") {
      plan += `
        <li>Mada Adavulu mangrove forest boating</li>
        <li>Nature photography and slow travel</li>`;
    }

    if (purpose === "boating") {
      plan += `
        <li>Mangrove forest boating</li>
        <li>Optional speed boating</li>`;
    }

    if (purpose === "family") {
      plan += `
        <li>Safe regular boating</li>
        <li>Leisure time with family</li>`;
    }

    plan += `</ul>`;
  }

  /* ================= 3 DAYS ================= */
  if (days === "3") {
    plan += `<h4>Day 1</h4><ul>
      <li>Temple darshan and rituals</li>
      <li>Evening beach walk</li>
    </ul>`;

    plan += `<h4>Day 2</h4><ul>
      <li>Mada Adavulu mangrove boating</li>
      <li>Speed boating or leisure boating</li>
      <li>Sunset photography</li>
    </ul>`;

    plan += `<h4>Day 3</h4><ul>
      <li>Relaxed morning darshan</li>
      <li>Explore nearby villages and fishing ponds</li>
      <li>Return journey</li>
    </ul>`;
  }

  /* ================= STAY ================= */
  if (stay === "budget") {
    plan += `<p><strong>Stay:</strong> Budget local lodges, guest houses, and homestays near Antarvedi & Dindi.</p>`;
  }

  if (stay === "resort") {
    plan += `<p><strong>Stay:</strong> Riverside and backwater resorts at Dindi.</p>`;
  }

  plan += `<p><strong>AI Tip:</strong> Start early for darshan, confirm boating availability locally, and avoid peak noon hours.</p>`;

  document.getElementById("planResult").innerHTML = plan;
}
