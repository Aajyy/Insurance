// Newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    const subscribeMessage = document.getElementById('subscribeMessage');
    const subscribeBtn = document.getElementById('subscribeBtn');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate terms checkbox
            const termsCheckbox = document.getElementById('terms');
            if (!termsCheckbox.checked) {
                showMessage('Please agree to the terms and conditions.', 'error');
                return;
            }
            
            const formData = new FormData(this);
            
            // Show loading state
            const originalText = subscribeBtn.innerHTML;
            subscribeBtn.innerHTML = '<span class="txt">Subscribing...</span>';
            subscribeBtn.disabled = true;
            
            fetch('subscribe.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data === 'success') {
                    showMessage('Thank you for subscribing! You will receive updates soon.', 'success');
                    newsletterForm.reset();
                } else if (data === 'invalid_email') {
                    showMessage('Please enter a valid email address.', 'error');
                } else {
                    showMessage('Something went wrong. Please try again later.', 'error');
                }
            })
            .catch(error => {
                showMessage('Network error. Please check your connection and try again.', 'error');
            })
            .finally(() => {
                // Reset button state
                subscribeBtn.innerHTML = originalText;
                subscribeBtn.disabled = false;
            });
        });
    }
    
    function showMessage(message, type) {
        subscribeMessage.innerHTML = message;
        subscribeMessage.className = type;
        subscribeMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            subscribeMessage.style.display = 'none';
        }, 5000);
    }
});