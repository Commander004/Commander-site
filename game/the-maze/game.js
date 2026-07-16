const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;


// =====================
// WORLD
// =====================

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



// =====================
// PLAYER
// =====================

let player = {

    x:0,
    y:0,

    size:24,

    speed:4,

    health:100

};



for(let y=0;y<maze.length;y++){

    for(let x=0;x<maze[y].length;x++){

        if(maze[y][x]=="P"){

            player.x=x*tileSize+4;
            player.y=y*tileSize+4;

        }

    }

}



// =====================
// ITEMS
// =====================

let items=[

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
// MONSTER
// =====================

let monster={

    x:900,

    y:300,

    size:26,

    speed:1.2

};





// =====================
// CAMERA
// =====================

let camera={

    x:0,

    y:0

};





// =====================
// INPUT
// =====================

let keys={};


window.addEventListener("keydown",e=>{

    keys[e.key.toLowerCase()]=true;

});


window.addEventListener("keyup",e=>{

    keys[e.key.toLowerCase()]=false;

});





// =====================
// COLLISION
// =====================

function isWall(x,y){


    let col=Math.floor(x/tileSize);

    let row=Math.floor(y/tileSize);



    if(!maze[row] || maze[row][col]===undefined)

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





// =====================
// UPDATE
// =====================

function update(){


    let nx=player.x;

    let ny=player.y;



    if(keys["w"] || keys["arrowup"])

        ny-=player.speed;



    if(keys["s"] || keys["arrowdown"])

        ny+=player.speed;



    if(keys["a"] || keys["arrowleft"])

        nx-=player.speed;



    if(keys["d"] || keys["arrowright"])

        nx+=player.speed;





    if(canMove(nx,player.y))

        player.x=nx;



    if(canMove(player.x,ny))

        player.y=ny;





    // Monster Follow

    let dx=player.x-monster.x;

    let dy=player.y-monster.y;


    let distance=Math.sqrt(dx*dx+dy*dy);



    if(distance<400){


        monster.x += (dx/distance)*monster.speed;

        monster.y += (dy/distance)*monster.speed;


    }





    // Camera

    camera.x=player.x-canvas.width/2;

    camera.y=player.y-canvas.height/2;



}






// =====================
// DRAW
// =====================

function draw(){


    ctx.fillStyle="#080808";


    ctx.fillRect(

        0,

        0,

        canvas.width,

        canvas.height

    );





    // MAP


    for(let y=0;y<maze.length;y++){


        for(let x=0;x<maze[y].length;x++){



            let sx=x*tileSize-camera.x;

            let sy=y*tileSize-camera.y;





            if(maze[y][x]!="#"){


                ctx.fillStyle="#151515";


                ctx.fillRect(

                    sx,

                    sy,

                    tileSize,

                    tileSize

                );


            }






            if(maze[y][x]=="#"){



                ctx.fillStyle="#292929";


                ctx.fillRect(

                    sx,

                    sy,

                    tileSize,

                    tileSize

                );



            }






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


                ctx.shadowBlur=0;


            }


        }

    }






    // ITEMS


    items.forEach(item=>{


        let sx=item.x*tileSize-camera.x;

        let sy=item.y*tileSize-camera.y;



        if(item.type=="battery")

            ctx.fillStyle="#ffe600";



        if(item.type=="medkit")

            ctx.fillStyle="#ff3333";



        if(item.type=="key")

            ctx.fillStyle="#00ffff";




        ctx.fillRect(

            sx,

            sy,

            20,

            20

        );



    });







    // MONSTER


    ctx.fillStyle="#ff0055";


    ctx.shadowBlur=15;

    ctx.shadowColor="#ff0055";


    ctx.fillRect(

        monster.x-camera.x,

        monster.y-camera.y,

        monster.size,

        monster.size

    );



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





// =====================
// LOOP
// =====================

function gameLoop(){


    update();

    draw();


    requestAnimationFrame(gameLoop);


}



gameLoop();
