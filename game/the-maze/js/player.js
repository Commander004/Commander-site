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


// پیدا کردن محل شروع بازیکن

for (let y = 0; y < maze.length; y++) {

    for (let x = 0; x < maze[y].length; x++) {

        if (maze[y][x] === "P") {

            player.x = x * tileSize + 4;
            player.y = y * tileSize + 4;

        }

    }

}


// =====================
// Collision
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
// Update
// =====================

function updatePlayer() {

    let nx = player.x;
    let ny = player.y;

    if (keys["w"] || keys["arrowup"])
        ny -= player.speed;

    if (keys["s"] || keys["arrowdown"])
        ny += player.speed;

    if (keys["a"] || keys["arrowleft"])
        nx -= player.speed;

    if (keys["d"] || keys["arrowright"])
        nx += player.speed;


    if (canMove(nx, player.y))
        player.x = nx;

    if (canMove(player.x, ny))
        player.y = ny;

}


// =====================
// Draw
// =====================

function drawPlayer() {

    ctx.fillStyle = "#a855f7";

    ctx.shadowBlur = 12;
    ctx.shadowColor = "#a855f7";

    ctx.fillRect(

        player.x - camera.x,
        player.y - camera.y,

        player.size,
        player.size

    );

    ctx.shadowBlur = 0;

}
