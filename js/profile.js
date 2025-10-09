// 🧘 Profile Loader — LightPath9

const statsElement = document.getElementById("ripple-stats");
const affirmationElement = document.getElementById("profile-affirmation");
let affirmations = [];
let index = 0;

// Load ripple stats
fetch("data/ripples.json")
  .then(response => response.json())
  .then(ripples => {
    const total = ripples.length;
    const tiers = ripples.reduce((acc, ripple) => {
      acc[ripple.tier] = (acc[ripple.tier] || 0) + 1;
      return acc;
    }, {});
    statsElement.innerHTML = `
      <p>Total Ripples: ${total}</p>
      <p>Tier Breakdown:</p>
      <ul>
        ${Object.entries(tiers).map(([tier, count]) => `<li>${tier}: ${count}</li>`).join("")}
      </ul>
    `;
  })
  .catch(error => {
    console.error("Ripple stats load failed:", error);
    statsElement.innerHTML = "<p>Unable to load ripple stats.</p>";
  });

// Load affirmations
fetch("data/affirmations.json")
  .then(response => response.json())
  .then(data => {
    affirmations = data.map(item => item.text);
    rotateAffirmation();
  })
  .catch(error => {
    console.error("Affirmation load failed:", error);
    affirmationElement.textContent = "Your ripple carries light farther than you can see.";
  });

// Rotate every 7 seconds
function rotateAffirmation() {
  if (affirmations.length === 0) return;
  affirmationElement.textContent = affirmations[index];
  index = (index + 1) % affirmations.length;
  setTimeout(rotateAffirmation, 7000);
}
