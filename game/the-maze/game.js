const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;


// =====================
// WORLD SETTINGS
// =====================

const tileSize = 32;


// =====================
// BIG MAP
// =====================

const maze = [

"############################################################",
"#P........................................#.................#",
"#.#########################.#############.#.###############.#",
"#...............#...........#.............#...............#.#",
"###############.#.#########.#############.#############.#.#",
"#...............#.#.........#.............#.#...........#.#.#",
"#.##############.#.#########.#############.#.#########.#.#.#",
"#.#..............#.....#...#...............#.......#...#.#.#",
"#.#.#################.#.#.#######################.#.###.#.#",
"#.#.................#.#.#...............#.........#.....#.#",
"#.#################.#.#.###############.#.#############.#.#",
"#.................#.#.#.................#...............#.#",
"#################.#.#.###############################.#.#",
"#.................#.#.................................#.#",
"#.###############.#.#################################.#.#",
"#.#...............#...................................#.#.#",
"#.#.###############################################.#.#.#.#",
"#.#.................................................#.#...#",
"#.###############################################.#.#####.#",
"#.................................................#.......#",
"#.#######################################################.#",
"#.........................................................#",
"#.#######################################################.#",
"#.........................................................#",
"#.#######################################################.#",
"#.......................................................E#",
"############################################################"

];



// =====================
// PLAYER
// =====================

let player = {

    x:0,
    y:0,

    size:24,

    speed:4

};


// find player start

for(let y=0; y<maze.length; y++){

    for(let x=0; x<maze[y].length; x++){

        if(maze[y][x]=="P"){

            player.x = x * tileSize + 4;
            player.y = y * tileSize + 4;

        }

    }

}



// =====================
// CAMERA
// =====================

let camera = {

    x:0,
    y:0

};



// =====================
// KEYS
// =====================

let keys={};


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


    let col = Math.floor(x/tileSize);
    let row = Math.floor(y/tileSize);


    if(!maze[row] || maze[row][col] === undefined)
        return true;


    return maze[row][col] === "#";


}



function canMove(x,y){


    return (

        !isWall(x,y) &&
        !isWall(x+player.size,y) &&
        !isWall(x,y+player.size) &&
        !isWall(x+player.size,y+player.size)

    );


}




// =====================
// UPDATE
// =====================

function update(){


    let nx = player.x;
    let ny = player.y;



    if(keys["w"] || keys["arrowup"])
        ny -= player.speed;


    if(keys["s"] || keys["arrowdown"])
        ny += player.speed;


    if(keys["a"] || keys["arrowleft"])
        nx -= player.speed;


    if(keys["d"] || keys["arrowright"])
        nx += player.speed;



    if(canMove(nx,player.y))
        player.x = nx;


    if(canMove(player.x,ny))
        player.y = ny;




    // CAMERA FOLLOW

    camera.x = player.x - canvas.width/2;
    camera.y = player.y - canvas.height/2;


}



// =====================
// DRAW
// =====================

function draw(){


    ctx.fillStyle="#050505";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    // MAP DRAW

    for(let y=0; y<maze.length; y++){

        for(let x=0; x<maze[y].length; x++){



            let screenX = x*tileSize - camera.x;
            let screenY = y*tileSize - camera.y;



            if(maze[y][x]=="#"){


                ctx.fillStyle="#8b5cf6";

                ctx.shadowBlur=15;
                ctx.shadowColor="#8b5cf6";


                ctx.fillRect(

                    screenX,
                    screenY,
                    tileSize,
                    tileSize

                );

            }



            if(maze[y][x]=="E"){


                ctx.fillStyle="#00ffff";

                ctx.shadowBlur=20;
                ctx.shadowColor="#00ffff";


                ctx.fillRect(

                    screenX,
                    screenY,
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

        player.x-camera.x,
        player.y-camera.y,

        player.size,
        player.size

    );


    ctx.shadowBlur=0;


}




// =====================
// LOOP
// =====================

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}


gameLoop();
