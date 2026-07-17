// =====================
// UPDATE
// =====================

function update() {

    updatePlayer();

    updateMonster();

    updateItems();

    updateCamera();

    updateInventory();

    updateUI();

    updateFlashlight();

}


// =====================
// DRAW MAP
// =====================

function drawMap() {

    ctx.fillStyle = "#080808";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for (let y = 0; y < maze.length; y++) {

        for (let x = 0; x < maze[y].length; x++) {

            const sx = x * tileSize - camera.x;
            const sy = y * tileSize - camera.y;

            if (maze[y][x] != "#") {

                ctx.fillStyle = "#151515";

                ctx.fillRect(
                    sx,
                    sy,
                    tileSize,
                    tileSize
                );

            }

            if (maze[y][x] == "#") {

                ctx.fillStyle = "#292929";

                ctx.fillRect(
                    sx,
                    sy,
                    tileSize,
                    tileSize
                );

            }

            if (maze[y][x] == "E") {

                ctx.fillStyle = "#00eaff";

                ctx.shadowBlur = 10;
                ctx.shadowColor = "#00eaff";

                ctx.fillRect(
                    sx,
                    sy,
                    tileSize,
                    tileSize
                );

                ctx.shadowBlur = 0;

            }

        }

    }

}


// =====================
// DRAW
// =====================

function draw() {

    drawMap();

    drawItems();

    drawMonster();

    drawPlayer();

    drawUI();

    drawFlashlight();

}


// =====================
// GAME LOOP
// =====================

function gameLoop() {

    update();

    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();
