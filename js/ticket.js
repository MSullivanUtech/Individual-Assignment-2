let name = sessionStorage.getItem("fullName");
let email = sessionStorage.getItem("email");
let github = sessionStorage.getItem("github");
let avatar = sessionStorage.getItem("avatar");
if (!name || !email || !github || !avatar) {
    window.location.href = "index.html";
}
else {
    document.getElementById("welcomeName").textContent = name;
    document.getElementById("ticketName").textContent = name;
    document.getElementById("ticketEmail").textContent = email;
    document.getElementById("ticketAvatar").src = avatar;
    let username = github.replace(/^@/, "");

    let githubLink = document.getElementById("ticketGithub");
    githubLink.textContent = github;
    githubLink.href = "https://github.com/" + username;
    let ticketNumber = sessionStorage.getItem("ticketNumber");

    if (!ticketNumber) {
        let number = Math.floor(Math.random() * 9000) + 1000;
        ticketNumber = "CC-" + number;

        sessionStorage.setItem("ticketNumber", ticketNumber);
    }

    document.getElementById("ticketNumber").textContent = ticketNumber;
}
