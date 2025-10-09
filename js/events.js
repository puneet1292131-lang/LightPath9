// 🌙 Cosmic Events Loader — LightPath9

const eventContainer = document.getElementById("event-list");

// Load events from JSON file
fetch("data/events.json")
  .then(response => response.json())
  .then(events => {
    events.forEach(event => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.borderLeft = "6px solid " + getColor(event.type);

      card.innerHTML = `
        <h2>${event.title}</h2>
        <p>${event.description}</p>
        <small>🗓️ ${event.date} | Type: ${event.type}</small>
      `;

      eventContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Event load failed:", error);
    eventContainer.innerHTML = "<p>Unable to load cosmic events at this time.</p>";
  });

// Color code by event type
function getColor(type) {
  switch (type.toLowerCase()) {
    case "lunar": return "#FFD700";      // Gold
    case "festival": return "#FF69B4";   // Pink
    case "celestial": return "#8A2BE2";  // Violet
    default: return "#2C2C54";           // Indigo
  }
}
