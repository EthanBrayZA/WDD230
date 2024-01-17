/*In your js file, declare three const variables that hold references to the input, button, and .list elements.*/

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

/*Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function. */

button.addEventListener('click', () => {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create li element
        const listItem = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Populate li element with input value
        listItem.textContent = input.value;

        // Append delete button to li element
        listItem.appendChild(deleteButton);

        // Append li element to the unordered list
        list.appendChild(listItem);

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        // Clear the input field
        input.value = '';

        // Send focus to the input element
        input.focus();
    } else {
        // Provide a message or do nothing if the input is blank
        alert('Please enter a valid value.');
        input.focus();
    }
});
