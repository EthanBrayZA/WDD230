// Function to update and display the visit counter
function updateVisitCounter() {
    // Retrieve the current counter value from localStorage
    let counterValue = localStorage.getItem('pageVisitCounter');

    // If the counter is not present in localStorage, set it to 0
    if (counterValue === null) {
        counterValue = 0;
    }

    // Update the counter value in the HTML
    document.querySelector('.num-visits').textContent = counterValue;
}

// Function to increment the visit counter and update it
function incrementVisitCounter() {
    // Retrieve the current counter value from localStorage
    let counterValue = localStorage.getItem('pageVisitCounter');

    // If the counter is not present in localStorage, set it to 0
    if (counterValue === null) {
        counterValue = 0;
    }

    // Increment the counter value
    counterValue++;

    // Update the counter value in localStorage
    localStorage.setItem('pageVisitCounter', counterValue);

    // Update and display the counter value in the HTML
    updateVisitCounter();
}

// Call the incrementVisitCounter function on page load
incrementVisitCounter();