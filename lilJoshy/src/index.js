const View = require('./ttt-view');
const Game = require('../../solution12/game');

  $(() => {
    const game = new Game();
    const $container = $(".ttt");
    new View(game, $container);
  });

