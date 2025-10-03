// loadHeaderFooter.js
document.addEventListener("DOMContentLoaded", function () {

    // Load Common Top Header
    //fetch("common-nav.html")
    //    .then(response => response.text())
    //    .then(data => {
    //        document.getElementById("mainNav").innerHTML = data;
    //    });

    // fetch("common-header.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("common-header").innerHTML = data;

    //         $('.btn-show-menu-mobile').on('click', function (e) {
    //             $(this).toggleClass('is-active');
    //             $('.menu-mobile').toggleClass('show');
    //             return false;
    //             e.preventDefault();
    //         });
    //     });

    fetch("common-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("common-footer").innerHTML = data;
        });

   fetch("common-footer.html")
        .then(response => response.text())
        .then(data => {
           document.getElementById("common-footer-wrapper").innerHTML = data;

            var currentYear = new Date().getFullYear();
            document.getElementById("curr-year").innerHTML = currentYear;
       });

});




// copy script in  
// call all id footer page