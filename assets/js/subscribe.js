
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



