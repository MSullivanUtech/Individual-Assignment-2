const form = document.getElementById("registrationForm");


let avatarInput = document.getElementById("avatar");
let avatarPreview = document.getElementById("avatarPreview");

avatarInput.addEventListener("change", function() {
    let file = avatarInput.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function() {
            avatarPreview.src = reader.result;
        };

        reader.readAsDataURL(file);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let github = document.getElementById("github").value.trim();
    let avatar = document.getElementById("avatar").files[0];

    let valid = true;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("githubError").textContent = "";
    document.getElementById("avatarError").textContent = "";
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your full name.";
        valid = false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Please enter your email address.";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        valid = false;
    }
    if (github === "") {
        document.getElementById("githubError").textContent =
            "Please enter your GitHub username.";
        valid = false;
    }
    else if (!github.startsWith("@") || github.length < 2) {
        document.getElementById("githubError").textContent =
            "Your GitHub username must start with @.";
        valid = false;
    }
    if (!avatar) {
        document.getElementById("avatarError").textContent =
            "Please upload an avatar.";
        valid = false;
    }
    else if (avatar.type !== "image/jpeg" && avatar.type !== "image/png") {
        document.getElementById("avatarError").textContent =
            "Only JPG and PNG images are allowed.";
        valid = false;
    }
    else if (avatar.size >= 500 * 1024) {
        document.getElementById("avatarError").textContent =
            "Image must be smaller than 500 KB.";
        valid = false;
    }
    if (!valid) {
        return;
    }
    let reader = new FileReader();

    reader.onload = function() {
        sessionStorage.setItem("fullName", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("github", github);
        sessionStorage.setItem("avatar", reader.result);
        window.location.href = "ticket.html";
    };

    reader.readAsDataURL(avatar);
});
