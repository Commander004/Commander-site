// =====================
// UI
// =====================


function updateUI(){


}



// =====================
// DRAW UI
// =====================


function drawUI(){


    drawInventory();

    drawBattery();


}



// =====================
// BATTERY BAR
// =====================


function drawBattery(){


    const x = 20;

    const y = 20;


    const width = 220;

    const height = 22;



    // background

    ctx.fillStyle = "#222";

    ctx.fillRect(

        x,

        y,

        width,

        height

    );




    // battery amount


    ctx.fillStyle = 

        battery > 30

        ? "#00ff66"

        : "#ff3333";



    ctx.fillRect(

        x,

        y,

        width * (battery / 100),

        height

    );




    // border


    ctx.strokeStyle="#ffffff";

    ctx.strokeRect(

        x,

        y,

        width,

        height

    );




    // text


    ctx.fillStyle="white";

    ctx.font="16px Arial";


    ctx.fillText(

        "🔋 " + Math.floor(battery) + "%",

        x + 8,

        y + 17

    );


}
