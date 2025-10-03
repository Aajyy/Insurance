
document.addEventListener("DOMContentLoaded", function () {



   fetch("common-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("common-footer").innerHTML = data;
        });

});



