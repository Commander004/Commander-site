// =====================
// FLASHLIGHT SYSTEM
// =====================

let flashlightOn = false;

let battery = 100;

const batteryDrain = 0.02;


// =====================
// TOGGLE FLASHLIGHT
// =====================

function toggleFlashlight() {

    console.log("F Pressed");

    // اگر باتری خالی است روشن نشود
    if (!flashlightOn && battery <= 0)
        return;

    flashlightOn = !flashlightOn;

    // ترساندن هیولا
    if (flashlightOn) {

        monsterFear = true;

        monsterFearTimer = 120;

    }

}


// =====================
// UPDATE
// =====================

function updateFlashlight() {

    if (flashlightOn) {

        battery -= batteryDrain;

        if (battery <= 0) {

            battery = 0;

            flashlightOn = false;

        }

    }

}


// =====================
// ADD BATTERY
// =====================

function addBattery(amount) {

    battery += amount;

    if (battery > 100)
        battery = 100;

}


// =====================
// DRAW FLASHLIGHT
// =====================

function drawFlashlight() {

    if (!flashlightOn)
        return;

    const cx = player.x - camera.x + player.size / 2;
    const cy = player.y - camera.y + player.size / 2;

    // تاریک کردن کل صفحه
    ctx.save();

    ctx.fillStyle = "rgba(0,0,0,0.75)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ایجاد نور
    ctx.globalCompositeOperation = "destination-out";

    const light = ctx.createRadialGradient(

        cx,
        cy,
        20,

        cx,
        cy,
        180

    );

    light.addColorStop(0, "rgba(255,255,255,1)");
    light.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = light;

    ctx.beginPath();
    ctx.arc(cx, cy, 180, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

}
