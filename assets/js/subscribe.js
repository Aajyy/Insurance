
document.getElementById("newsletterForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const email = document.getElementById("subscribeEmail").value.trim();
    const messageBox = document.getElementById("subscribeMessage");

    const response = await fetch("subscribe.php", {
        method: "POST",
        body: new FormData(this)
    });

    const data = await response.json();
    messageBox.style.display = "block";
    messageBox.style.color = data.success ? "green" : "red";
    messageBox.textContent = data.success || data.error;
});


// contact  form page 

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    const form = this;
    const formData = new FormData(form);

    fetch(form.action, { method:"POST", body:formData })
    .then(res => res.json())
    .then(data => {
        Swal.fire({
            icon: data.status === "success" ? 'success' : 'error',
            title: data.status === "success" ? 'Success!' : 'Oops!',
            text: data.message
        });
        if(data.status === "success") form.reset();
    })
    .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Try again later.'
        });
    });
});



<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });
        const result = await response.json();

        if (result.status === "success") {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Thank you for your message. It has been sent.",
                confirmButtonColor: "#4CAF50", // green theme
                confirmButtonText: "OK"
            });
            form.reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: result.message,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Try Again"
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#3085d6"
        });
    }
});

