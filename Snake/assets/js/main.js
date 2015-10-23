// Added By - Prashant Bansal
// Demo - http://demo.prashantb.me/Snake

var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, '');
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);
game.state.start('Menu');
