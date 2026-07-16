const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;


// WORLD

const tileSize = 32;


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


// PLAYER

let player = {
    x:0,
    y:0,
    size:24,
    speed:4
};



for(let y=0;y<maze.length;y++){

    for(let x=0;x<maze[y].length;x++){

        if(maze[y][x]=="P"){

            player.x=x*tileSize+4;
            player.y=y*tileSize+4;

        }

    }

}



// CAMERA

let camera={
    x:0,
    y:0
};



// INPUT

let keys={};


window.addEventListener("keydown",e=>{
    keys[e.key.toLowerCase()]=true;
});


window.addEventListener("keyup",e=>{
    keys[e.key.toLowerCase()]=false;
});




// COLLISION

function isWall(x,y){

    let col=Math.floor(x/tileSize);
    let row=Math.floor(y/tileSize);


    if(!maze[row] || !maze[row][col])
        return true;


    return maze[row][col]=="#";

}



function canMove(x,y){

    return(
        !isWall(x,y) &&
        !isWall(x+player.size,y) &&
        !isWall(x,y+player.size) &&
        !isWall(x+player.size,y+player.size)
    );

}




// UPDATE

function update(){


    let nx=player.x;
    let ny=player.y;


    if(keys["w"]||keys["arrowup"])
        ny-=player.speed;


    if(keys["s"]||keys["arrowdown"])
        ny+=player.speed;


    if(keys["a"]||keys["arrowleft"])
        nx-=player.speed;


    if(keys["d"]||keys["arrowright"])
        nx+=player.speed;



    if(canMove(nx,player.y))
        player.x=nx;


    if(canMove(player.x,ny))
        player.y=ny;



    camera.x=player.x-canvas.width/2;
    camera.y=player.y-canvas.height/2;

}




// DRAW

function draw(){


    ctx.fillStyle="#080808";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    for(let y=0;y<maze.length;y++){

        for(let x=0;x<maze[y].length;x++){


            let sx=x*tileSize-camera.x;
            let sy=y*tileSize-camera.y;



            // FLOOR

            if(maze[y][x]!== "#"){

                ctx.fillStyle="#151515";

                ctx.fillRect(
                    sx,
                    sy,
                    tileSize,
                    tileSize
                );


                // floor dots

                ctx.fillStyle="#1c1c1c";

                ctx.fillRect(
                    sx+14,
                    sy+14,
                    3,
                    3
                );

            }



            // WALL

            if(maze[y][x]=="#"){


                ctx.shadowBlur=0;


                ctx.fillStyle="#292929";


                ctx.fillRect(
                    sx,
                    sy,
                    tileSize,
                    tileSize
                );


                ctx.strokeStyle="#3d3d3d";

                ctx.lineWidth=1;


                ctx.strokeRect(
                    sx,
                    sy,
                    tileSize,
                    tileSize
                );


            }



            // EXIT

            if(maze[y][x]=="E"){


                ctx.fillStyle="#00eaff";

                ctx.shadowBlur=10;
                ctx.shadowColor="#00eaff";


                ctx.fillRect(
                    sx,
                    sy,
                    tileSize,
                    tileSize
                );


            }


        }

    }



    ctx.shadowBlur=0;



    // PLAYER

    ctx.fillStyle="#a855f7";

    ctx.shadowBlur=12;
    ctx.shadowColor="#a855f7";


    ctx.fillRect(
        player.x-camera.x,
        player.y-camera.y,
        player.size,
        player.size
    );


    ctx.shadowBlur=0;


}





function gameLoop(){

    update();
    draw();

    requestAnimationFrame(gameLoop);

}


gameLoop();
