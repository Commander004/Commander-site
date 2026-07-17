// =====================
// MONSTER
// =====================

const monster = {

    x: 900,
    y: 300,

    size: 32,

    speed: 1.2,

    health: 100

};


// =====================
// MONSTER IMAGE
// =====================

const monsterImage = new Image();

monsterImage.src = "assets/enemies/monster.png";


// =====================
// UPDATE
// =====================

function updateMonster() {

    const dx = player.x - monster.x;
    const dy = player.y - monster.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 400 && distance > 0) {

        monster.x += (dx / distance) * monster.speed;
        monster.y += (dy / distance) * monster.speed;

    }

}


// =====================
// DRAW
// =====================

function drawMonster() {

    const drawX = monster.x - camera.x;
    const drawY = monster.y - camera.y;

    // Glow
    ctx.save();

    ctx.shadowBlur = 20;
    ctx.shadowColor = "#ff0033";

    if (monsterImage.complete) {

        ctx.drawImage(

            monsterImage,

            drawX,
            drawY,

            monster.size,
            monster.size

        );

    } else {

        ctx.fillStyle = "#ff0033";

        ctx.fillRect(

            drawX,
            drawY,

            monster.size,
            monster.size

        );

    }

    ctx.restore();

}

// =====================
// FEAR SYSTEM
// =====================

let monsterFear = false;

let monsterFearTimer = 0;
