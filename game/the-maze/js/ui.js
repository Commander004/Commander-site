// =====================
// UI
// =====================

function updateUI(){}



// =====================
// HEALTH BAR
// =====================

function drawHealthBar(){

    const x = 55;
    const y = 55;

    const width = 220;
    const height = 22;

    // Background

    ctx.fillStyle = "#222";

    ctx.fillRect(x,y,width,height);

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

    ctx.fillStyle = "white";

    ctx.font = "16px Arial";

    ctx.fillText(

        "Health " + player.health + "%",

        x + 60,

        y + 17

    );

}



// =====================
// DRAW UI
// =====================

function drawUI(){

    drawInventory();

    drawHealthBar();

}
