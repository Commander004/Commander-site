// =====================
// ITEMS
// =====================

const items = [

    {

        type: "battery",

        x: 12,

        y: 5

    },

    {

        type: "medkit",

        x: 30,

        y: 15

    },

    {

        type: "key",

        x: 45,

        y: 22

    }

];


// =====================
// UPDATE ITEMS
// =====================

function updateItems() {

    // فعلاً خالی
    // بعداً:
    // برداشتن آیتم
    // اضافه شدن به Inventory
    // حذف از زمین

}


// =====================
// DRAW ITEMS
// =====================

function drawItems() {

    items.forEach(item => {

        const sx = item.x * tileSize - camera.x;
        const sy = item.y * tileSize - camera.y;

        switch (item.type) {

            case "battery":

                ctx.fillStyle = "#ffe600";
                break;

            case "medkit":

                ctx.fillStyle = "#ff3333";
                break;

            case "key":

                ctx.fillStyle = "#00ffff";
                break;

            default:

                ctx.fillStyle = "#ffffff";

        }

        ctx.shadowBlur = 8;
        ctx.shadowColor = ctx.fillStyle;

        ctx.fillRect(

            sx + 6,
            sy + 6,

            20,
            20

        );

        ctx.shadowBlur = 0;

    });

}
