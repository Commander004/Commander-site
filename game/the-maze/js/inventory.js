// =====================
// INVENTORY
// =====================


// 10 Slots

const inventory = new Array(10).fill(null);


// شروع بازی

inventory[0] = {
    type: "flashlight"
};

inventory[1] = {
    type: "battery"
};


// Slot

let selectedSlot = 0;


// Backpack

let backpackOpen = false;


// =====================
// IMAGES
// =====================

const inventoryImages = {

    flashlight: new Image(),

    battery: new Image(),

    knife: new Image(),

    gun: new Image(),

    key: new Image(),

    medkit: new Image(),

    food: new Image(),

    water: new Image(),

    map: new Image()

};


inventoryImages.flashlight.src = "assets/items/flashlight.png";
inventoryImages.battery.src = "assets/items/battery.png";
inventoryImages.knife.src = "assets/items/knife.png";
inventoryImages.gun.src = "assets/items/gun.png";
inventoryImages.key.src = "assets/items/key.png";
inventoryImages.medkit.src = "assets/items/medkit.png";
inventoryImages.food.src = "assets/items/food.png";
inventoryImages.water.src = "assets/items/water.png";
inventoryImages.map.src = "assets/items/map.png";


// =====================
// TOGGLE
// =====================

function toggleBackpack(){

    backpackOpen = !backpackOpen;

}


// =====================
// SLOT
// =====================

function selectSlot(index){

    if(index >= 0 && index < inventory.length){

        selectedSlot = index;

    }

}


// =====================
// USE
// =====================

function useSelectedItem(){

    const item = inventory[selectedSlot];

    if(!item) return;


    switch(item.type){

        case "flashlight":

            toggleFlashlight();

            break;


        case "battery":

            addBattery(25);

            inventory[selectedSlot] = null;

            break;


        case "medkit":

            player.health += 25;

            if(player.health > 100)
                player.health = 100;

            inventory[selectedSlot] = null;

            break;


        case "food":

            inventory[selectedSlot] = null;

            break;


        case "water":

            inventory[selectedSlot] = null;

            break;


        case "knife":

            console.log("Knife Attack");

            break;


        case "gun":

            console.log("Shoot");

            break;


        case "map":

            console.log("Map");

            break;


        case "key":

            console.log("Key");

            break;

    }

}


// =====================
// UPDATE
// =====================

function updateInventory(){

}


// =====================
// DRAW
// =====================

function drawInventory(){

    if(!backpackOpen)
        return;


    const width = 420;
    const height = 220;

    const x = canvas.width/2-width/2;
    const y = canvas.height-height-20;


    ctx.fillStyle="rgba(20,20,30,.95)";
    ctx.strokeStyle="#8b5cf6";
    ctx.lineWidth=2;

    ctx.fillRect(x,y,width,height);

    ctx.strokeRect(x,y,width,height);


    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText("Backpack",x+20,y+30);


    const slot=48;
    const gap=12;


    for(let i=0;i<10;i++){

        const col=i%5;
        const row=Math.floor(i/5);

        const sx=x+25+col*(slot+gap);
        const sy=y+55+row*(slot+gap);


        ctx.fillStyle=

        i===selectedSlot

        ? "#8b5cf6"

        : "#2a2a35";


        ctx.fillRect(

            sx,

            sy,

            slot,

            slot

        );


        ctx.strokeStyle="#b794ff";

        ctx.strokeRect(

            sx,

            sy,

            slot,

            slot

        );


        const item=inventory[i];

        if(item){

            const img=inventoryImages[item.type];

            if(img.complete){

                ctx.drawImage(

                    img,

                    sx+6,

                    sy+6,

                    36,

                    36

                );

            }

        }

    }


    // Selected Item Name

    const current=inventory[selectedSlot];

    if(current){

        ctx.fillStyle="white";

        ctx.font="18px Arial";

        ctx.fillText(

            current.type.toUpperCase(),

            x+20,

            y+190

        );

    }


    // Use Button

    const bx=x+290;
    const by=y+170;

    ctx.fillStyle="#8b5cf6";

    ctx.fillRect(

        bx,

        by,

        90,

        35

    );

    ctx.fillStyle="white";

    ctx.font="18px Arial";

    ctx.fillText(

        "USE",

        bx+23,

        by+23

    );

}
