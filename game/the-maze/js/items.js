// =====================
// ITEMS
// =====================


const items = [

    {
        type:"battery",
        x:12,
        y:5
    },


    {
        type:"medkit",
        x:30,
        y:15
    },


    {
        type:"key",
        x:45,
        y:22
    }

];




// =====================
// ITEM IMAGES
// =====================


const itemWorldImages = {

    battery: new Image(),

    medkit: new Image(),

    key: new Image(),

    flashlight: new Image(),

    map: new Image()

};



itemWorldImages.battery.src =
"assets/items/battery.png";


itemWorldImages.medkit.src =
"assets/items/medkit.png";


itemWorldImages.key.src =
"assets/items/key.png";


itemWorldImages.flashlight.src =
"assets/items/flashlight.png";


itemWorldImages.map.src =
"assets/items/map.png";





// =====================
// UPDATE
// =====================


function updateItems(){


}





// =====================
// DRAW ITEMS
// =====================


function drawItems(){


    items.forEach(item=>{


        const sx =
        item.x * tileSize - camera.x;


        const sy =
        item.y * tileSize - camera.y;



        const img =
        itemWorldImages[item.type];



        if(img && img.complete){



            ctx.drawImage(

                img,

                sx + 4,

                sy + 4,

                24,

                24

            );


        }


    });


}
