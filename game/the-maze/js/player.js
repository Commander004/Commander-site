// =====================
// PLAYER
// =====================

const player = {

    x: 0,
    y: 0,

    size: 24,

    speed: 4,

    health: 100

};


// =====================
// PLAYER IMAGES
// =====================

const playerImages = {

    idle: new Image(),

    up: new Image(),

    down: new Image(),

    left: new Image(),

    right: new Image()

};

playerImages.idle.src = "assets/player/player.png";
playerImages.up.src = "assets/player/player_up.png";
playerImages.down.src = "assets/player/player_down.png";
playerImages.left.src = "assets/player/player_left.png";
playerImages.right.src = "assets/player/player_right.png";


let currentPlayerImage = playerImages.idle;


// =====================
// FIND PLAYER START
// =====================

for (let y = 0; y < maze.length; y++) {

    for (let x = 0; x < maze[y].length; x++) {

        if (maze[y][x] === "P") {

            player.x = x * tileSize + 4;
            player.y = y * tileSize + 4;

        }

    }

}


// =====================
// COLLISION
// =====================

function isWall(x, y) {

    const col = Math.floor(x / tileSize);
    const row = Math.floor(y / tileSize);

    if (!maze[row] || maze[row][col] === undefined)
        return true;

    return maze[row][col] === "#";

}


function canMove(x, y) {

    return (

        !isWall(x, y) &&

        !isWall(x + player.size, y) &&

        !isWall(x, y + player.size) &&

        !isWall(x + player.size, y + player.size)

    );

}


// =====================
// UPDATE PLAYER
// =====================

function updatePlayer() {

    let nx = player.x;
    let ny = player.y;

    let moving = false;


    if (keys["w"] || keys["arrowup"]) {

        ny -= player.speed;

        currentPlayerImage = playerImages.up;

        moving = true;

    }


    if (keys["s"] || keys["arrowdown"]) {

        ny += player.speed;

        currentPlayerImage = playerImages.down;

        moving = true;

    }


    if (keys["a"] || keys["arrowleft"]) {

        nx -= player.speed;

        currentPlayerImage = playerImages.left;

        moving = true;

    }


    if (keys["d"] || keys["arrowright"]) {

        nx += player.speed;

        currentPlayerImage = playerImages.right;

        moving = true;

    }


    if (canMove(nx, player.y))
        player.x = nx;

    if (canMove(player.x, ny))
        player.y = ny;


    if (!moving) {

        currentPlayerImage = playerImages.idle;

    }

}


// =====================
// DRAW PLAYER
// =====================

function drawPlayer() {

    if (currentPlayerImage.complete) {

        ctx.drawImage(

            currentPlayerImage,

            player.x - camera.x,

            player.y - camera.y,

            player.size,

            player.size

        );

    } else {

        ctx.fillStyle = "#a855f7";

        ctx.fillRect(

            player.x - camera.x,

            player.y - camera.y,

            player.size,

            player.size

        );

    }

}
