class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  getPos($ele) {
    let pos;
    if ($ele.index() < 3) {
      pos = [0, $ele.index()];
    } else if ($ele.index() >= 3 && $ele.index() > 6) {
      pos = [1, $ele.index() % 3];
    } else {
      pos = [2, $ele.index() % 3];
    }
    return pos;
  }

  bindEvents() {
    this.el.on('click', "li", (event) => {
      // debugger
      event.preventDefault();
      let $liSquare = $(event.currentTarget);
      this.makeMove($liSquare);
      // event.target.addEventListener('click', this.playMove);
    });
  }

  makeMove($square) { 
    $square.addClass("white");
    let position = this.getPos($square);
    this.game.playMove(position);
    $square.text() === "x" ? $square.addClass("x") : $square.addClass("o"); 
  }

  setupBoard() {
    const $container = $(".ttt");
    $container.append("<ul></ul>")
    $($container).find("ul").addClass("gridUL");
    for (let i = 0; i < 9; i++) {
      $container.find("ul").append("<li></li>");
    }
  }
}

module.exports = View;
