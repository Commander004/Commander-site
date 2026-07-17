// =====================
// MOBILE CONTROLS
// =====================


// گرفتن دکمه ها

const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");




// =====================
// TOUCH START
// =====================

function pressKey(key){

    keys[key] = true;

}



// =====================
// TOUCH END
// =====================

function releaseKey(key){

    keys[key] = false;

}




// =====================
// BUTTON EVENTS
// =====================


upBtn.addEventListener("touchstart",()=>{

    pressKey("arrowup");

});


upBtn.addEventListener("touchend",()=>{

    releaseKey("arrowup");

});




downBtn.addEventListener("touchstart",()=>{

    pressKey("arrowdown");

});


downBtn.addEventListener("touchend",()=>{

    releaseKey("arrowdown");

});




leftBtn.addEventListener("touchstart",()=>{

    pressKey("arrowleft");

});


leftBtn.addEventListener("touchend",()=>{

    releaseKey("arrowleft");

});




rightBtn.addEventListener("touchstart",()=>{

    pressKey("arrowright");

});


rightBtn.addEventListener("touchend",()=>{

    releaseKey("arrowright");

});
