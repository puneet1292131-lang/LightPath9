// 🔁 Affirmation Rotator — LightPath9

const affirmationElement = document.getElementById("affirmation-text");
let affirmations = [];
let index = 0;

// Load affirmations from JSON file
fetch("data/affirmations.json")
  .then(response => response.json())
  .then(data => {
    affirmations = data.map(item => item.text);
    rotateAffirmations();
  })
  .catch(error => {
    console.error("Affirmation load failed:", error);
    affirmationElement.textContent = "Your ripple carries light farther than you can see.";
  });

// Rotate every 5 seconds
function rotateAffirmations() {
  if (affirmations.length === 0) return;
  affirmationElement.textContent = affirmations[index];
  index = (index + 1) % affirmations.length;
  setTimeout(rotateAffirmations, 5000);
}
