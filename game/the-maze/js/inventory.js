// =====================
// INVENTORY
// =====================


// 10 Slot Inventory

const inventory = [

    {
        type: "flashlight",
        amount: 1
    },

    {
        type: "map",
        amount: 1
    },

    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null

];



// Selected Slot

let selectedSlot = 0;


// Backpack State

let backpackOpen = false;



// =====================
// TOGGLE BACKPACK
// =====================

function toggleBackpack(){

    backpackOpen = !backpackOpen;

}



// =====================
// SELECT SLOT
// =====================

function selectSlot(index){

    if(index >= 0 && index < inventory.length){

        selectedSlot = index;

    }

}



// =====================
// ADD ITEM
// =====================

function addItem(item){

    for(let i = 0; i < inventory.length; i++){

        if(inventory[i] === null){

            inventory[i] = {

                type:item,

                amount:1

            };

            return true;

        }

    }


    return false;

}



// =====================
// UPDATE
// =====================

function updateInventory(){


    // بعداً:
    // Pick up items
    // Use items
    // Stack system
    // Drop items


}



// =====================
// DRAW
// =====================

function drawInventory(){


    if(!backpackOpen)

        return;



    const width = 420;

    const height = 220;



    const x = canvas.width / 2 - width / 2;

    const y = canvas.height - height - 20;



    // PANEL

    ctx.fillStyle = "rgba(20,20,30,.95)";

    ctx.strokeStyle = "#8b5cf6";

    ctx.lineWidth = 2;



    ctx.fillRect(

        x,

        y,

        width,

        height

    );


    ctx.strokeRect(

        x,

        y,

        width,

        height

    );




    // TITLE

    ctx.fillStyle = "white";

    ctx.font = "20px Arial";


    ctx.fillText(

        "Backpack",

        x + 20,

        y + 30

    );





    // SLOTS


    const slot = 48;

    const gap = 12;



    for(let i = 0; i < 10; i++){



        const col = i % 5;

        const row = Math.floor(i / 5);



        const sx = x + 25 + col * (slot + gap);

        const sy = y + 55 + row * (slot + gap);




        // SLOT BACKGROUND


        ctx.fillStyle =

            i === selectedSlot

            ? "#8b5cf6"

            : "#2a2a35";



        ctx.fillRect(

            sx,

            sy,

            slot,

            slot

        );




        ctx.strokeStyle = "#b794ff";

        ctx.strokeRect(

            sx,

            sy,

            slot,

            slot

        );





        // ITEM TEXT


        if(inventory[i]){


            ctx.fillStyle = "white";

            ctx.font = "10px Arial";


            ctx.fillText(

                inventory[i].type,

                sx + 3,

                sy + 28

            );


        }



    }



}
