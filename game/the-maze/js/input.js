// =====================
// INPUT
// =====================

const keys = {};

let spacePressed = false;

window.addEventListener("keydown", (e) => {

    keys[e.key.toLowerCase()] = true;

    // =====================
    // BACKPACK
    // =====================

    if (e.code === "Space" && !spacePressed) {

        e.preventDefault();

        toggleBackpack();

        spacePressed = true;

    }


    // =====================
    // FLASHLIGHT
    // =====================

    if (e.code === "KeyF") {

    e.preventDefault();

    toggleFlashlight();

}


    // =====================
    // INVENTORY SELECT
    // =====================

    if (e.key >= "1" && e.key <= "9") {

        selectSlot(Number(e.key) - 1);

    }

    if (e.key === "0") {

        selectSlot(9);

    }

});


window.addEventListener("keyup", (e) => {

    keys[e.key.toLowerCase()] = false;

    if (e.code === "Space") {

        spacePressed = false;

    }

});
