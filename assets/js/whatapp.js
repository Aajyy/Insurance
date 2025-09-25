 // WhatsApp Modal Functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Get DOM elements
        const nkisWhatsappIcon = document.getElementById('nkisWhatsappIcon');
        const nkisWhatsappModal = document.getElementById('nkisWhatsappModal');
        const nkisCloseModal = document.getElementById('nkisCloseModal');
        const nkisCancelButton = document.getElementById('nkisCancelButton');
        
        // Show modal when clicking the WhatsApp icon
        if (nkisWhatsappIcon) {
            nkisWhatsappIcon.addEventListener('click', function() {
                nkisWhatsappModal.style.display = 'flex';
            });
        }
        
        // Close modal when clicking the close button or cancel button
        if (nkisCloseModal) {
            nkisCloseModal.addEventListener('click', closeNkisModal);
        }
        if (nkisCancelButton) {
            nkisCancelButton.addEventListener('click', closeNkisModal);
        }
        
        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === nkisWhatsappModal) {
                closeNkisModal();
            }
        });
        
        // Close modal function
        function closeNkisModal() {
            nkisWhatsappModal.style.display = 'none';
        }
        
        // Optional: Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeNkisModal();
            }
        });
    });