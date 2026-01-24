function generatePlan() {
  const purpose = document.getElementById("purpose").value;
  const days = document.getElementById("days").value;
  const stay = document.getElementById("stay").value;

  let plan = "<h3>Your Antarvedi AI Travel Plan</h3><ul>";

  // DAY LOGIC
  if (days === "half") {
    plan += "<li>Early morning darshan at Sri Lakshmi Narasimha Swamy Temple</li>";
    plan += "<li>Visit Antarvedi Beach and Lighthouse</li>";
  }

  if (days === "1") {
    plan += "<li>Temple darshan in the morning</li>";
    plan += "<li>Boating to Sagar Sangamam</li>";
    plan += "<li>Evening beach visit</li>";
  }

  if (days >= "2") {
    plan += "<li>Day 1: Temple darshan and beach visit</li>";
    plan += "<li>Day 2: Mada Adavulu mangrove boating and relaxation</li>";
  }

  if (days === "3") {
    plan += "<li>Day 3: Optional speed boating and local sightseeing</li>";
  }

  // STAY LOGIC
  if (stay === "budget") {
    plan += "<li>Stay recommendation: Local lodges, guest houses, and homestays near Antarvedi and Dindi</li>";
  }

  if (stay === "resort") {
    plan += "<li>Stay recommendation: Riverside and backwater resorts at Dindi</li>";
  }

  plan += "</ul>";
  plan += "<p><strong>Tip:</strong> Start early for darshan and check boating availability based on weather.</p>";

  document.getElementById("planResult").innerHTML = plan;
}
