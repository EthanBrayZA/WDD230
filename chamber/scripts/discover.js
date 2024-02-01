// Inside scripts/discover.js
document.addEventListener('DOMContentLoaded', function () {
    const visitDate = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    const oneDayInMillis = 24 * 60 * 60 * 1000; // Milliseconds in a day

    if (!visitDate) {
        // First visit
        document.querySelector('.sidebar').innerHTML = '<p>Welcome! Let us know if you have any questions.</p>';
    } else {
        const daysDifference = Math.floor((currentDate - visitDate) / oneDayInMillis);

        if (daysDifference < 1) {
            document.querySelector('.sidebar').innerHTML = '<p>Back so soon! Awesome!</p>';
        } else {
            const pluralSuffix = daysDifference === 1 ? '' : 's';
            document.querySelector('.sidebar').innerHTML = `<p>You last visited ${daysDifference} day${pluralSuffix} ago.</p>`;
        }
    }

    // Store the current date in localStorage for the next visit
    localStorage.setItem('lastVisit', currentDate);
});