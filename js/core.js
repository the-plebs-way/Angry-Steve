var game_el = $('div#game_cont');
var game = new Phaser.Game(900, 600, Phaser.CANVAS, game_el);

/*function collectStar (steve, star) {
    // Removes the star from the screen
    star.kill();
}*/

var background,
    steve,
    movement = {
      w: null,
      s: null,
      a: null,
      d: null,
      facing: true,
    }
    mainStage = {

  preload : function () {
    game.stage.backgroundColor = 'rgba(40, 41, 42, 1)';
    game.load.image('bg', 'assets/backgrounds/bg-overlay.png');
    game.load.spritesheet('steve', 'assets/dude.png', 32, 48);
    game.load.image('star', 'assets/star.png');
  },
  create : function () {
    // Background stuff
    //background = game.add.tileSprite(0, 0, 900, 600, 'bg');
    bg = game.add.tileSprite(game.width/2, game.height/2, 900, 600, 'bg');
    bg.anchor.setTo(.5);

    // steve stuff
    steve = game.add.sprite(game.width/2, game.height/2, 'steve');
    steve.frame = 4
    steve.animations.add('moving', [5, 6, 7, 8], 3, true);
    steve.enableBody = true;
    steve.anchor.setTo(.5);
    //steve.body.gravity.y = 300;
    game.physics.arcade.enable(steve);
    steve.body.collideWorldBounds = true;

    stars = game.add.group();
    stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 6; i++) {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 70, game.height/2 + 20, 'star');
    };

  },
  update : function () {
    // X is horizontal
    // Y is vertical
    steve.animations.play('moving');
  }

};

game.state.add('mainStage', mainStage);
game.state.start('mainStage');
