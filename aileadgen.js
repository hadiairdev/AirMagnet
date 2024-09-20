document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popupContainer');
    const closeBtn = document.getElementById('closePopup');

    // Function to show the popup
    window.aileadgenshowPopup = function() {
        popup.style.display = 'block';
    }

    // Close popup when close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close popup when clicking outside of the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});
