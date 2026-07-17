// =====================
// FLASHLIGHT SYSTEM
// =====================


let flashlightOn = false;


let battery = 100;


let batteryDrain = 0.02;



// =====================
// TOGGLE
// =====================


function toggleFlashlight(){


    flashlightOn = !flashlightOn;


}



// =====================
// UPDATE
// =====================


function updateFlashlight(){


    if(flashlightOn && battery > 0){


        battery -= batteryDrain;


    }



    if(battery <= 0){


        battery = 0;

        flashlightOn = false;


    }


}



// =====================
// DRAW LIGHT
// =====================


function drawFlashlight(){


    if(!flashlightOn)

        return;



    const gradient = ctx.createRadialGradient(

        player.x - camera.x + player.size/2,

        player.y - camera.y + player.size/2,

        20,

        player.x - camera.x + player.size/2,

        player.y - camera.y + player.size/2,

        180

    );



    gradient.addColorStop(0,"rgba(255,255,200,0.35)");

    gradient.addColorStop(1,"rgba(0,0,0,0)");



    ctx.fillStyle = gradient;


    ctx.fillRect(

        0,

        0,

        canvas.width,

        canvas.height

    );


}
