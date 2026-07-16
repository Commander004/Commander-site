// =========================
// Commander Welcome Page
// =========================

// Get Data

const username = localStorage.getItem("commander_username");
const avatar = localStorage.getItem("commander_avatar");
const memberID = localStorage.getItem("commander_memberid");

// If profile doesn't exist

if (!username || !avatar || !memberID) {

    window.location.href = "profile.html";

}

// Elements

const welcomeTitle = document.getElementById("welcomeTitle");
const avatarImage = document.getElementById("avatar");
const memberText = document.getElementById("memberID");
const enterButton = document.getElementById("enterButton");

// Show User Data

welcomeTitle.textContent = `Welcome, ${username}!`;

avatarImage.src = avatar;

memberText.textContent = memberID;

// Enter Website

enterButton.addEventListener("click", () => {

    window.location.href = "main.html";

});
