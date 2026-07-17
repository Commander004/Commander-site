// =====================
// COMBAT
// =====================

let attackCooldown = 0;

const attackDistance = 35;


// =====================
// UPDATE COMBAT
// =====================

function updateCombat() {

    if (attackCooldown > 0)
        attackCooldown--;

    // اگر هیولا ترسیده است حمله نکند
    if (monsterFear)
        return;

    const dx = player.x - monster.x;
    const dy = player.y - monster.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= attackDistance && attackCooldown <= 0) {

        const damage =
            Math.floor(Math.random() * 26) + 10;

        player.health -= damage;

        if (player.health < 0)
            player.health = 0;

        attackCooldown = 48;

        if (player.health <= 0) {

            gameOver = true;

        }

    }

}
