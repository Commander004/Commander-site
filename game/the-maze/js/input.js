// =====================
// INPUT
// =====================

const keys = {};

window.addEventListener("keydown", (e) => {

    keys[e.key.toLowerCase()] = true;

});


window.addEventListener("keyup", (e) => {

    keys[e.key.toLowerCase()] = false;

});

window.addEventListener("keydown", (e) => {
    console.log("Key:", e.key);
});
