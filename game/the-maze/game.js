const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;


// Player
let player = {
    x: 100,
    y: 100,
    size: 30,
    speed: 5
};


// Keyboard
let keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});


// Update player movement
function update() {

    if (keys["ArrowUp"] || keys["w"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"] || keys["s"]) {
        player.y += player.speed;
    }

    if (keys["ArrowLeft"] || keys["a"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"] || keys["d"]) {
        player.x += player.speed;
    }

}


// Draw
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // Player
    ctx.fillStyle = "#9b5cff";
    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );

}


// Game loop
function gameLoop() {

    update();
    draw();

    requestAnimationFrame(gameLoop);

}


gameLoop();
