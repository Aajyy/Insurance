
// NKIS Loader functionality
document.addEventListener('DOMContentLoaded', function() {
    const nkisLoader = document.getElementById('nkisLoader');
    const existingPreloader = document.querySelector('.loader-wrap');
    
    // Hide existing preloader immediately
    if (existingPreloader) {
        existingPreloader.style.display = 'none';
    }
    
    // Wait for everything to load
    window.addEventListener('load', function() {
        // Simulate minimum display time (you can adjust this)
        setTimeout(function() {
            // Add hidden class to fade out
            nkisLoader.classList.add('nkis-loader--hidden');
            
            // Remove from DOM after animation completes
            setTimeout(function() {
                nkisLoader.style.display = 'none';
            }, 800);
        }, 1000); // Minimum 2 seconds display time
    });
    
    // Fallback: hide loader after 5 seconds regardless
    setTimeout(function() {
        if (nkisLoader && !nkisLoader.classList.contains('nkis-loader--hidden')) {
            nkisLoader.classList.add('nkis-loader--hidden');
            setTimeout(function() {
                nkisLoader.style.display = 'none';
            }, 800);
        }
    }, 5000);
});
