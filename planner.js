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

  const purposeActivities = {
    temple: [
      "Early morning darshan at Sri Lakshmi Narasimha Swamy Temple",
      "Abhishekam and temple rituals",
      "Annanadanam lunch at temple"
    ],
    nature: [
      "Antarvedi beach walk",
      "Lighthouse visit for panoramic views",
      "Sunset photography"
    ],
    boating: [
      "Boating to Sagara Sangamam",
      "Mada Adavulu mangrove forest boating",
      "Optional speed boating (weather permitting)"
    ],
    relax: [
      "Quiet beach walk",
      "Sea-breeze relaxation near lighthouse",
      "Evening leisure time"
    ],
    family: [
      "Temple darshan suitable for all ages",
      "Beach visit with family",
      "Light refreshments and rest time"
    ]
  };

  let html = `<h3>Your Personalized Antarvedi Travel Plan</h3>`;

  const totalDays = days === "half" ? 1 : parseInt(days);

  for (let day = 1; day <= totalDays; day++) {
    html += `<h4>Day ${day}</h4><ul>`;
    purposeActivities[purpose].forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += `</ul>`;
  }

  /* Stay Recommendation */
  html += `<h4>Stay Recommendation</h4><p>`;
  if (stay === "none") {
    html += "No overnight stay required. Same-day return recommended.";
  }
  if (stay === "budget") {
    html += "Budget local lodges, guest houses, and homestays near Antarvedi and Dindi.";
  }
  if (stay === "resort") {
    html += "Riverside and backwater resorts at Dindi for a peaceful stay.";
  }
  html += `</p>`;

  /* AI Travel Tips */
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
  result.scrollIntoView({ behavior: "smooth" });
}
