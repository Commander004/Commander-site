// =====================
// MONSTER
// =====================

const monster = {

    x: 900,
    y: 300,

    size: 26,

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

    ctx.fillStyle = "#ff0055";

    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ff0055";

    ctx.fillRect(

        monster.x - camera.x,
        monster.y - camera.y,

        monster.size,
        monster.size

    );

    ctx.shadowBlur = 0;

}
