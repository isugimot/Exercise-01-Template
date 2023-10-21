class Movement extends Phaser.Scene {
    constructor() {
        super('movementScene')
    }

    preload() {
        this.load.spritesheet('character', './assets/spritesheets/Character_002.png', {
            frameWidth: 48
        });
    }

    create() {
        this.cameras.main.setBackgroundColor(0xDDDDDD);
        this.player = this.physics.add.sprite(width/2, height/2, 'character', 1).setScale(2);
        this.player.body.setCollideWorldBounds(true);
        this.player.body.setSize(32, 32).setOffset(8,16);
        
        this.anims.create({
            key: 'idle-down',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 1,
                end: 1
            })
        });
        this.anims.create({
            key: 'idle-left',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 4,
                end: 4
            })
        });
        this.anims.create({
            key: 'idle-right',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 7,
                end: 7
            })
        });
        this.anims.create({
            key: 'idle-up',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 10,
                end: 10
            })
        });

        this.anims.create({
            key: 'walk-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 0,
                end: 2
            })
        });
        this.anims.create({
            key: 'walk-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 9,
                end: 11
            })
        });

        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 3,
                end: 5
            })
        });

        this.anims.create({
            key: 'walk-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 6,
                end: 8
            })
        });
        
        this.direction = 'idle-down';

        this.PLAYER_VELOCITY = 350;
        cursors = this.input.keyboard.createCursorKeys();
        console.log('now in movement scene 👍')
    }

    update() {
        let playerVector = new Phaser.Math.Vector2(0, 0);
        if(cursors.left.isDown){
            playerVector.x = -1;
            this.player.anims.play('walk-left', true);
            this.direction = 'idle-left';
        }else if(cursors.right.isDown){
            playerVector.x = 1;
            this.player.anims.play('walk-right', true);
            this.direction = 'idle-right';
        }else if(!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown){
            this.player.anims.play(this.direction, true);
        }
        if(cursors.up.isDown){
            playerVector.y = -1;
            this.player.anims.play('walk-up', true);
            this.direction = 'idle-up';
        }else if(cursors.down.isDown){
            playerVector.y = 1;
            this.player.anims.play('walk-down', true);
            this.direction = 'idle-down';
        }else if(!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown){
            this.player.anims.play(this.direction, true);
        }
        
        playerVector.normalize();
        this.player.setVelocity(playerVector.x * this.PLAYER_VELOCITY, playerVector.y * this.PLAYER_VELOCITY);
    }
}