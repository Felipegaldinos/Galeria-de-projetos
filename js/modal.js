document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.getElementById('profileIcon');
    const aboutModal = document.getElementById('aboutModal');
    const closeModalButton = document.getElementById('closeModalButton'); // Ensure this ID matches your HTML

    // Function to open the modal
    if (profileIcon) { // Check if the element exists before adding listener
        profileIcon.addEventListener('click', function() {
            aboutModal.style.display = 'flex'; // Use 'flex' for centering with flexbox in CSS
        });
    }

    // Function to close the modal when 'X' is clicked
    if (closeModalButton) { // Check if the element exists before adding listener
        closeModalButton.addEventListener('click', function() {
            aboutModal.style.display = 'none';
        });
    }

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == aboutModal) {
            aboutModal.style.display = 'none';
        }
    });
});