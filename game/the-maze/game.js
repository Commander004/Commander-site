const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;


// =====================
// Maze Map
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
// Player
// =====================

let player = {
    x:0,
    y:0,
    size:30,
    speed:5
};


// Find Player Position

for(let y = 0; y < maze.length; y++){

    for(let x = 0; x < maze[y].length; x++){

        if(maze[y][x] === "P"){

            player.x = x * tileSize + 10;
            player.y = y * tileSize + 10;

        }

    }

}



// =====================
// Keyboard
// =====================

let keys = {};

window.addEventListener("keydown",(e)=>{
    keys[e.key]=true;
});


window.addEventListener("keyup",(e)=>{
    keys[e.key]=false;
});




// =====================
// Collision
// =====================

function isWall(x,y){

    let col = Math.floor(x / tileSize);
    let row = Math.floor(y / tileSize);


    if(!maze[row]) return true;


    return maze[row][col] === "#";

}




// =====================
// Update
// =====================

function update(){


    let nextX = player.x;
    let nextY = player.y;



    if(keys["ArrowUp"] || keys["w"])
        nextY -= player.speed;


    if(keys["ArrowDown"] || keys["s"])
        nextY += player.speed;


    if(keys["ArrowLeft"] || keys["a"])
        nextX -= player.speed;


    if(keys["ArrowRight"] || keys["d"])
        nextX += player.speed;



    // Collision check

    if(
        !isWall(nextX, player.y) &&
        !isWall(nextX + player.size, player.y)
    ){
        player.x = nextX;
    }


    if(
        !isWall(player.x, nextY) &&
        !isWall(player.x, nextY + player.size)
    ){
        player.y = nextY;
    }



}



// =====================
// Draw
// =====================

function draw(){


    ctx.fillStyle="#050507";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    // Draw Maze

    for(let y=0; y<maze.length; y++){

        for(let x=0; x<maze[y].length; x++){


            if(maze[y][x]==="#"){


                ctx.fillStyle="#8b5cf6";

                ctx.shadowBlur=15;
                ctx.shadowColor="#8b5cf6";


                ctx.fillRect(
                    x*tileSize,
                    y*tileSize,
                    tileSize,
                    tileSize
                );


            }


            if(maze[y][x]==="E"){


                ctx.fillStyle="#00ffff";

                ctx.shadowBlur=20;
                ctx.shadowColor="#00ffff";


                ctx.fillRect(
                    x*tileSize,
                    y*tileSize,
                    tileSize,
                    tileSize
                );


            }

        }

    }


    ctx.shadowBlur=0;



    // Player

    ctx.fillStyle="#b794ff";

    ctx.shadowBlur=20;
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
// Loop
// =====================

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}


gameLoop();
