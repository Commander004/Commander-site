// =====================
// INVENTORY
// =====================


// Inventory Slots

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


// Backpack

let backpackOpen = false;



// =====================
// ITEM IMAGES
// =====================


const itemImages = {

    flashlight: new Image(),

    map: new Image(),

    battery: new Image(),

    medkit: new Image(),

    key: new Image(),

    gun: new Image()

};



itemImages.flashlight.src =
"assets/items/flashlight.png";


itemImages.map.src =
"assets/items/map.png";


itemImages.battery.src =
"assets/items/battery.png";


itemImages.medkit.src =
"assets/items/medkit.png";


itemImages.key.src =
"assets/items/key.png";


itemImages.gun.src =
"assets/items/gun.png";





// =====================
// TOGGLE
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


function addItem(type){


    for(let i = 0; i < inventory.length; i++){


        if(inventory[i] === null){


            inventory[i] = {

                type:type,

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




        ctx.strokeStyle="#b794ff";


        ctx.strokeRect(

            sx,

            sy,

            slot,

            slot

        );







        // DRAW ITEM IMAGE


        if(inventory[i]){


            const img = itemImages[inventory[i].type];



            if(img && img.complete){



                ctx.drawImage(

                    img,

                    sx + 6,

                    sy + 6,

                    36,

                    36

                );


            }


        }



    }



}


// =====================
// MOBILE SLOT SELECT
// =====================


canvas.addEventListener("touchstart",(e)=>{


    if(!backpackOpen)

        return;



    const rect = canvas.getBoundingClientRect();


    const touch = e.touches[0];


    const mx = touch.clientX - rect.left;

    const my = touch.clientY - rect.top;



    const width = 420;

    const height = 220;


    const x = canvas.width / 2 - width / 2;

    const y = canvas.height - height - 20;



    const slot = 48;

    const gap = 12;



    for(let i=0;i<10;i++){


        const col = i % 5;

        const row = Math.floor(i / 5);



        const sx = x + 25 + col * (slot + gap);

        const sy = y + 55 + row * (slot + gap);



        if(

            mx >= sx &&

            mx <= sx + slot &&

            my >= sy &&

            my <= sy + slot

        ){

            selectSlot(i);

        }


    }


});


// =====================
// USE ITEM
// =====================

function useSelectedItem(){


    const item = inventory[selectedSlot];


    if(!item)

        return;



    switch(item.type){


        case "flashlight":

            toggleFlashlight();

            break;



        case "map":

            openMap();

            break;



        default:

            console.log(
                "No action for:",
                item.type
            );

    }


}
