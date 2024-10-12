// formHandler.js

// Step 1: Wait for the entire document to load
document.addEventListener('DOMContentLoaded', () => {
    // Step 2: Get the form element by its ID
    const form = document.getElementById('contactForm');
    
    // Step 3: Get the element that will show the success message
    const successMessage = document.getElementById('successMessage');

    // Step 4: Add an event listener to handle form submission
    form.addEventListener('submit', function(event) {
        // Step 5: Prevent the default form submission behavior (page reload)
        event.preventDefault();
        
        // Step 6: Display the success message
        successMessage.style.display = 'block';
        
        // Step 7: Reset the form fields
        form.reset();
    });
});
