// =========================
// Commander Profile System
// =========================

const usernameInput = document.getElementById("username");
const createButton = document.getElementById("createProfile");
const avatars = document.querySelectorAll(".avatar");

let selectedAvatar = "";

// =========================
// Avatar Selection
// =========================

avatars.forEach((avatar) => {

    avatar.addEventListener("click", () => {

        avatars.forEach((img) => {

            img.style.border = "2px solid #8b5cf6";
            img.style.boxShadow = "0 0 15px rgba(139,92,246,.3)";

        });

        avatar.style.border = "3px solid white";
        avatar.style.boxShadow = "0 0 35px rgba(139,92,246,1)";

        selectedAvatar = avatar.getAttribute("src");

    });

});

// =========================
// Create Profile
// =========================

createButton.addEventListener("click", () => {

    const username = usernameInput.value.trim();

    if (username === "") {

        alert("Please enter a username.");
        return;

    }

    if (selectedAvatar === "") {

        alert("Please choose an avatar.");
        return;

    }

    localStorage.setItem("commander_username", username);
    localStorage.setItem("commander_avatar", selectedAvatar);

    location.href = "home.html";

});
