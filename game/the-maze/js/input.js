// =====================
// INPUT
// =====================


const keys = {};



window.addEventListener("keydown", (e)=>{


    keys[e.key.toLowerCase()] = true;



    // Inventory Select

    if(e.key >= "1" && e.key <= "9"){

        selectSlot(Number(e.key) - 1);

    }


    if(e.key === "0"){

        selectSlot(9);

    }



});




window.addEventListener("keyup",(e)=>{


    keys[e.key.toLowerCase()] = false;


});
