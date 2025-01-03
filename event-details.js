// Retrieve event data from localStorage
const event = JSON.parse(localStorage.getItem('selectedEvent'));

// If event data exists, display it
if (event) {
    const eventDetail = document.getElementById('event-detail');
    eventDetail.innerHTML = `
        <h2>${event.title}</h2>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Description:</strong> ${event.description}</p>
        <button class="register-btn">Register Now</button>
    `;
}

// Back button to navigate to event listing page
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html'; // Navigate back to the event listing page
});
