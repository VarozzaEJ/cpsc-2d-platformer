import { checkHazard } from "./systems/mapCollision.js";
import { playerMovement } from "./systems/playerMovement.js";
import { render, initializeLevels } from "./maps/render.js";
import { updateCollectables } from "./collectables/updateCollectables.js";

import { player } from "./entities/player.js";
import { enemies } from "./entities/enemy.js";

import {
    combatTimers,
    enemyAttack,
    playerAttack,
    removeEnemy,
    resetPlayer
} from "./systems/damageSystem.js";

let lastTime = 0;

// temporary input flag for attacks
let attackPressed = false;

window.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.code === "KeyF") {
        attackPressed = true;
    }
});

function loop(timestamp: number): void {
    if (lastTime === 0) lastTime = timestamp;

    let dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (dt > 0.1) dt = 0.1;

    // movement
    playerMovement(dt);

    // enemy AI / movement
    for (const enemy of enemies) {
        enemy.update(dt, player);
    }

    // map hazards
    checkHazard(player);

    // collectables
    updateCollectables(dt);

    // combat timers
    combatTimers(player, enemies, dt);

    // player attack input
    if (attackPressed) {
        playerAttack(player, enemies);
        attackPressed = false;
    }

    // enemy touching player
    enemyAttack(player, enemies);

    // remove dead enemies
    removeEnemy(enemies);

    // player death/reset
    if (player.isDead) {
        resetPlayer(player);
    }

    // draw everything
    render();

    requestAnimationFrame(loop);
}

export function startGame(canvas: HTMLCanvasElement): void {
    if (!canvas || typeof canvas.getContext !== "function") {
        console.error("startGame requires a valid canvas element");
        return;
    }

    window.startGame = startGame;
    initializeLevels(canvas);
    requestAnimationFrame(loop);
}

// Make it available globally for the React component
declare global {
    interface Window {
        startGame: (canvas: HTMLCanvasElement) => void;
    }
}

window.startGame = startGame;