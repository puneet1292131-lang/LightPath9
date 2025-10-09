// 🔥 Ripple Wall Loader — LightPath9

const rippleContainer = document.getElementById("ripple-list");

// Load ripples from JSON file
fetch("data/ripples.json")
  .then(response => response.json())
  .then(ripples => {
    ripples.forEach(ripple => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${ripple.name} <span style="float:right;">${getTierIcon(ripple.tier)} ${ripple.tier}</span></h2>
        <p>${ripple.message}</p>
        <small>🗓️ ${ripple.date}</small>
      `;

      rippleContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Ripple load failed:", error);
    rippleContainer.innerHTML = "<p>Unable to load ripple entries at this time.</p>";
  });

// Tier icons
function getTierIcon(tier) {
  switch (tier.toLowerCase()) {
    case "spark": return "🟡";
    case "ember": return "🟠";
    case "flame": return "🔴";
    case "torch": return "🟣";
    case "beacon": return "🔵";
    default: return "⚪";
  }
}
