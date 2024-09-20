document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('aileadgen-popupContainer');
    const closeBtn = document.getElementById('aileadgen-closePopup');
    const iframe = document.getElementById('aileadgen-iframe');

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

    window.addEventListener('message', function(event) {
        // Optionally check the origin of the message for security
        // if (event.origin !== "https://example.com") return;

        const height = event.data; // Get the height from the message
        iframe.style.height = height + 'px'; // Set the iframe height
    });

});
