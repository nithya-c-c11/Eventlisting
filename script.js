const events = [
    { title: "Music Fest", date: "2024-12-28", location: "Mech Gallery", description: "An evening of live music.", category: "music",image:"music.jpg" },
    { title: "Football Match", date: "2025-01-15", location: "Ground", description: "Exciting football game.", category: "sports",image:"football.jpg" },
    { title: "Coding Workshop", date: "2025-02-10", location: "COding gives wisdom", description: "Learn coding in a day.", category: "education",image:"coding.jpg" },
    { title: "Ideathon", date: "2024-12-28", location: "MCA Lab", description: "Structured presentation of research.", category: "education",image:"paper.jpg" },
    { title: "Treasure Hunt", date: "2025-01-15", location: "A game find of hidden items", description: "Exciting football game.", category: "sports",image:"treasure.jpg" },
    { title: "Dance", date: "2024-12-28", location: "Mech Gallery", description: "A rhythmyc moment to music", category: "music",image:"dance.jpg" },
    { title: "PosterPresentation", date: "2025-01-15", location: "'pg-1020,1010", description: "Visible display reasercgh items ", category: "education",image:"poster.jpg" },
    { title: "Technical Quiz", date: "2025-02-10", location: "CIVIL galery", description: "A competitive technical Quiz", category: "education",image:"quiz.jpg" }
];

// Function to display events
function displayEvents(filteredEvents) {
    const eventListing = document.getElementById('event-listing');
    eventListing.innerHTML = '';

    filteredEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <button class="register-btn" onclick="registerEvent('${event.title}')">Register</button>
        `;
        eventListing.appendChild(eventItem);
    });
}

// Function to filter events based on search or category
function filterEvents() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const selectedCategory = document.querySelector('.category.active')?.getAttribute('data-category') || 'all';

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm) || event.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayEvents(filteredEvents);
}

// Event listener for search bar
document.getElementById('search-bar').addEventListener('input', filterEvents);

// Event listener for category buttons
document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        filterEvents();
    });
});

// Initialize with all events
displayEvents(events);

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Store event details in localStorage and navigate to event-detail.html
function registerEvent(title) {
    const event = events.find(event => event.title === title);
    localStorage.setItem('selectedEvent', JSON.stringify(event)); // Store event in localStorage
    window.location.href = 'event-details.html'; // Navigate to event detail page
}
