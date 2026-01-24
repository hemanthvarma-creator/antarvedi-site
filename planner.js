function generatePlan() {
  const purpose = document.getElementById("purpose").value;
  const days = document.getElementById("days").value;
  const stay = document.getElementById("stay").value;

  let plan = `<h3>Your Antarvedi AI Travel Plan</h3><ul>`;

  /* ================= TEMPLE DARSHAN ================= */
  if (purpose === "temple") {
    if (days === "half") {
      plan += `
        <li>Early morning darshan at Sri Lakshmi Narasimha Swamy Temple</li>
        <li>Short visit to Sagar Sangamam</li>
        <li>Return before afternoon</li>`;
    }

    if (days === "1") {
      plan += `
        <li>Morning darshan and abhishekam</li>
        <li>Annadanam lunch at temple</li>
        <li>Evening visit to beach and lighthouse</li>`;
    }

    if (days >= "2") {
      plan += `
        <li>Day 1: Temple darshan, annadanam, and beach visit</li>
        <li>Day 2: Sagar Sangamam boating and spiritual relaxation</li>`;
    }

    if (days === "3") {
      plan += `
        <li>Day 3: Leisure morning darshan and nearby sightseeing</li>`;
    }
  }

  /* ================= RELAXATION ================= */
  if (purpose === "relax") {
    if (days === "half") {
      plan += `
        <li>Quiet beach walk and lighthouse visit</li>
        <li>Sunset relaxation by the sea</li>`;
    }

    if (days === "1") {
      plan += `
        <li>Late morning arrival and beach relaxation</li>
        <li>Evening calm boating experience</li>`;
    }

    if (days >= "2") {
      plan += `
        <li>Day 1: Beach walk, sunset views, and peaceful evening</li>
        <li>Day 2: Mangrove forest boating (Mada Adavulu)</li>`;
    }

    if (days === "3") {
      plan += `
        <li>Day 3: Free day for rest, photography, and slow travel</li>`;
    }
  }

  /* ================= BEACH & NATURE ================= */
  if (purpose === "nature") {
    if (days === "half") {
      plan += `
        <li>Antarvedi beach exploration</li>
        <li>Lighthouse climb for panoramic views</li>`;
    }

    if (days === "1") {
      plan += `
        <li>Morning beach visit and lighthouse adventure</li>
        <li>Evening sunset at river-mouth point</li>`;
    }

    if (days >= "2") {
      plan += `
        <li>Day 1: Beach, lighthouse, and sunset views</li>
        <li>Day 2: Mangrove forest boating and nature photography</li>`;
    }

    if (days === "3") {
      plan += `
        <li>Day 3: Explore fishing ponds and riverside areas</li>`;
    }
  }

  /* ================= BOATING & ADVENTURE ================= */
  if (purpose === "boating") {
    if (days === "half") {
      plan += `
        <li>Speed boating experience</li>
        <li>Quick visit to Sagar Sangamam</li>`;
    }

    if (days === "1") {
      plan += `
        <li>Morning regular boating to Sagar Sangamam</li>
        <li>Afternoon speed boating (weather permitting)</li>`;
    }

    if (days >= "2") {
      plan += `
        <li>Day 1: Regular boating and speed boating</li>
        <li>Day 2: Mada Adavulu mangrove forest boating</li>`;
    }

    if (days === "3") {
      plan += `
        <li>Day 3: Repeat favorite boating experience or relax</li>`;
    }
  }

  /* ================= FAMILY TRIP ================= */
  if (purpose === "family") {
    if (days === "half") {
      plan += `
        <li>Temple darshan with family</li>
        <li>Beach visit for children and elders</li>`;
    }

    if (days === "1") {
      plan += `
        <li>Morning darshan and annadanam</li>
        <li>Evening beach and lighthouse visit</li>`;
    }

    if (days >= "2") {
      plan += `
        <li>Day 1: Temple, beach, and leisure time</li>
        <li>Day 2: Safe regular boating and mangrove visit</li>`;
    }

    if (days === "3") {
      plan += `
        <li>Day 3: Rest day with optional sightseeing</li>`;
    }
  }

  /* ================= STAY LOGIC ================= */
  if (stay === "budget") {
    plan += `
      <li><strong>Stay:</strong> Local lodges, guest houses, and homestays near Antarvedi & Dindi</li>`;
  }

  if (stay === "resort") {
    plan += `
      <li><strong>Stay:</strong> Riverside and backwater resorts at Dindi</li>`;
  }

  plan += `</ul>
    <p><strong>AI Tip:</strong> Start early for darshan, confirm boating availability, and avoid peak noon hours.</p>`;

  document.getElementById("planResult").innerHTML = plan;
}
