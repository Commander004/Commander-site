const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;


// =====================
// MAP
// =====================

const tileSize = 50;

const maze = [

"################",
"#P       #     #",
"# ###### # ### #",
"#        #     #",
"# ###### ##### #",
"#            E#",
"################"

];


// =====================
// PLAYER
// =====================

let player = {

    x:0,
    y:0,

    size:30,

    speed:5

};


// پیدا کردن محل شروع

for(let row = 0; row < maze.length; row++){

    for(let col = 0; col < maze[row].length; col++){

        if(maze[row][col] === "P"){

            player.x = col * tileSize + 10;
            player.y = row * tileSize + 10;

        }

    }

}



// =====================
// KEYBOARD
// =====================

let keys = {};


window.addEventListener("keydown",(e)=>{

    keys[e.key.toLowerCase()] = true;

});


window.addEventListener("keyup",(e)=>{

    keys[e.key.toLowerCase()] = false;

});




// =====================
// COLLISION
// =====================

function isWall(x,y){


    let col = Math.floor(x / tileSize);
    let row = Math.floor(y / tileSize);


    if(
        row < 0 ||
        row >= maze.length ||
        col < 0 ||
        col >= maze[row].length
    ){

        return true;

    }


    return maze[row][col] === "#";

}




function canMove(x,y){


    return (

        !isWall(x,y) &&

        !isWall(x + player.size,y) &&

        !isWall(x,y + player.size) &&

        !isWall(x + player.size,y + player.size)

    );


}




// =====================
// UPDATE
// =====================

function update(){


    let nextX = player.x;
    let nextY = player.y;



    if(keys["w"] || keys["arrowup"]){

        nextY -= player.speed;

    }


    if(keys["s"] || keys["arrowdown"]){

        nextY += player.speed;

    }


    if(keys["a"] || keys["arrowleft"]){

        nextX -= player.speed;

    }


    if(keys["d"] || keys["arrowright"]){

        nextX += player.speed;

    }



    if(canMove(nextX, player.y)){

        player.x = nextX;

    }


    if(canMove(player.x, nextY)){

        player.y = nextY;

    }


}




// =====================
// DRAW
// =====================

function draw(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    // Background

    ctx.fillStyle="#050505";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    // MAP

    for(let row = 0; row < maze.length; row++){


        for(let col = 0; col < maze[row].length; col++){



            if(maze[row][col] === "#"){


                ctx.fillStyle="#8b5cf6";


                ctx.shadowBlur=20;

                ctx.shadowColor="#8b5cf6";


                ctx.fillRect(

                    col * tileSize,

                    row * tileSize,

                    tileSize,

                    tileSize

                );


            }



            if(maze[row][col] === "E"){


                ctx.fillStyle="#00ffff";


                ctx.shadowBlur=25;

                ctx.shadowColor="#00ffff";


                ctx.fillRect(

                    col * tileSize,

                    row * tileSize,

                    tileSize,

                    tileSize

                );


            }


        }


    }



    ctx.shadowBlur=0;



    // PLAYER

    ctx.fillStyle="#b794ff";


    ctx.shadowBlur=25;

    ctx.shadowColor="#b794ff";


    ctx.fillRect(

        player.x,

        player.y,

        player.size,

        player.size

    );


    ctx.shadowBlur=0;


}




// =====================
// GAME LOOP
// =====================

function gameLoop(){


    update();

    draw();


    requestAnimationFrame(gameLoop);


}



gameLoop();
