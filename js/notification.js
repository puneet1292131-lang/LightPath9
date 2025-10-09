// 🔔 Notifications Loader — LightPath9

const notificationContainer = document.getElementById("notification-list");

// Load notifications from JSON file
fetch("data/notifications.json")
  .then(response => response.json())
  .then(notifications => {
    notifications.forEach(note => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${getIcon(note.type)} ${note.title}</h2>
        <p>${note.message}</p>
        <small>🗓️ ${note.date} | Type: ${note.type}</small>
      `;

      notificationContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Notification load failed:", error);
    notificationContainer.innerHTML = "<p>Unable to load notifications at this time.</p>";
  });

// Icon by type
function getIcon(type) {
  switch (type.toLowerCase()) {
    case "thank-you": return "🕊️";
    case "event": return "🌕";
    case "milestone": return "🛤️";
    default: return "🔔";
  }
}
