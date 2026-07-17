// =====================
// INPUT
// =====================

const keys = {};

window.addEventListener("keydown", (e) => {

    keys[e.key.toLowerCase()] = true;

    // جلوگیری از اسکرول صفحه با Space
    if (e.code === "Space") {

        e.preventDefault();

        toggleBackpack();

    }

    // Inventory Select

    if (e.key >= "1" && e.key <= "9") {

        selectSlot(Number(e.key) - 1);

    }

    if (e.key === "0") {

        selectSlot(9);

    }

});


window.addEventListener("keyup", (e) => {

    keys[e.key.toLowerCase()] = false;

});
