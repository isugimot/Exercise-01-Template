// Exercise 01: Normalized Movement
// Name: Ichiro Sugimoto
// Date: 10/20/2023

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    render:{
        pixleArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    width: 800,
    height: 800,
    scene: [ Movement ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config