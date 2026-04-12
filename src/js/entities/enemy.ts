import type { Player } from "./player";

export interface EnemyState extends Damageable {
        x: number;
        y: number;
        spawnX: number;
        spawnY: number;
        w: number;
        h: number;
        vx: number;
        vy: number;
        moveSpeed: number;
        maxFallSpeed: number;
        direction: -1 | 1;
        grounded: boolean;
        health: number;
        maxHealth: number;
        damage: number;
        attackCooldown: number;
        attackTimer: number;
        isDead: boolean;
}

export interface Damageable {
    health: number;
    maxHealth: number;
    isDead: boolean;
}

export class Enemy implements EnemyState {
    x: number;
    y: number;
    spawnX: number;
    spawnY: number;
    w: number;
    h: number;
    vx: number;
    vy: number;
    moveSpeed: number;
    maxFallSpeed: number;
    direction: 1 | -1;
    grounded: boolean;
    health: number;
    maxHealth: number;
    damage: number;
    attackCooldown: number;
    attackTimer: number;
    isDead: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.spawnX = x;
        this.spawnY = y;
        this.w = 70;
        this.h = 70;
        this.vx = 0;
        this.vy = 0;
        this.moveSpeed = 100;
        this.maxFallSpeed = 1000;
        this.grounded = false;
        this.direction = -1;
        this.health = 3;
        this.maxHealth = 3;
        this.damage = 1;
        this.attackCooldown = 1;
        this.attackTimer = 0;
        this.isDead = false;

    }

    update(dt: number, player: Player): void {
        if (this.isDead) return;
        
        if (this.attackTimer > 0) {
            this.attackTimer -= dt;
            if (this.attackTimer < 0) {
                this.attackTimer = 0;
            }
        }

        const distanceX = player.x - this.x;

        if (Math.abs(distanceX) < 300) {
            this.direction = distanceX < 0 ? -1 : 1;
            this.vx = this.direction * this.moveSpeed;
        } else {
            this.vx = this.direction * this.moveSpeed * 0.5;
        }

        this.x += this.vx * dt;
    }
}

export const enemies: Enemy[] = [
    new Enemy(240, 1200),
    new Enemy(1500, 1200)
];