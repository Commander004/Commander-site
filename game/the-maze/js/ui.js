// =====================
// UI
// =====================

function updateUI() {

}



// =====================
// BATTERY BAR
// =====================

function drawBatteryBar() {

    const x = 20;
    const y = 20;

    const width = 220;
    const height = 22;

    // Background

    ctx.fillStyle = "#222";

    ctx.fillRect(

        x,

        y,

        width,

        height

    );

    // Battery

    ctx.fillStyle = "#ffe600";

    ctx.fillRect(

        x,

        y,

        width * (battery / 100),

        height

    );

    // Border

    ctx.strokeStyle = "#ffffff";

    ctx.lineWidth = 2;

    ctx.strokeRect(

        x,

        y,

        width,

        height

    );

    // Text

    ctx.fillStyle = "#ffffff";

    ctx.font = "16px Arial";

    ctx.fillText(

        "🔋 Battery " + Math.floor(battery) + "%",

        x + 40,

        y + 17

    );

}



// =====================
// HEALTH BAR
// =====================

function drawHealthBar() {

    const x = 20;
    const y = 55;

    const width = 220;
    const height = 22;

    // Background

    ctx.fillStyle = "#222";

    ctx.fillRect(

        x,

        y,

        width,

        height

    );

    // Health

    ctx.fillStyle = "#ff4040";

    ctx.fillRect(

        x,

        y,

        width * (player.health / 100),

        height

    );

    // Border

    ctx.strokeStyle = "#ffffff";

    ctx.lineWidth = 2;

    ctx.strokeRect(

        x,

        y,

        width,

        height

    );

    // Text

    ctx.fillStyle = "#ffffff";

    ctx.font = "16px Arial";

    ctx.fillText(

        "❤️ Health " + player.health + "%",

        x + 45,

        y + 17

    );

}



// =====================
// DRAW UI
// =====================

function drawUI() {

    drawBatteryBar();

    drawHealthBar();

    drawInventory();

}
