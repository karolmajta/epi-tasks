var game = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    players: [
        {id: 'red', active: true},
        {id: 'green', active: false}
    ]
};

/* let's bind events to table cells */
_.each($('#board').children(), function (tr, x) {
   // here we iterate over each row
    _.each($(tr).children(), function (td, y) {
        // here we iterate over each table cell
        // and bind a click event
        $(td).on('click', function () { onCellClick(x, y); });
    });
});


/* here we define our click handler */
var onCellClick = function (x, y) {
    // first we want to decide if the game is over or not, and if it is,
    // well, we should do nothing more.
    if(gameIsOver()) {
      return;
    }
    // first we want to update board model
    makeMarkAt(x, y);
    // then we want to redraw our view
    redrawBoard();
    redrawState();
};


/* here we define how we make changes to our model */
var makeMarkAt = function (x, y) {
    // first let's have a referrence to currently active player
    // and inactive one
    var activePlayer = getActivePlayer();
    var inactivePlayer = getInactivePlayer();
    // if board[x][y] is falsy we make active players mark, if it's truthy, then
    // this field is already taken and we sould do nothing
    if(!game.board[x][y]) {
        game.board[x][y] = activePlayer.id;
        activePlayer.active = false;
        inactivePlayer.active = true;
    }
};


/* here we define how to tell if game is over */
var gameIsOver = function () {
    var over = false;
    var b = game.board;
    over |= b[0][0] && b[0][0] == b[0][1] && b[0][1] == b[0][2];
    over |= b[1][0] && b[1][0] == b[1][1] && b[1][1] == b[1][2];
    over |= b[2][0] && b[2][0] == b[2][1] && b[2][1] == b[2][2];
    over |= b[0][0] && b[0][0] == b[1][0] && b[1][0] == b[2][0];
    over |= b[0][1] && b[0][1] == b[1][1] && b[1][1] == b[2][1];
    over |= b[0][2] && b[0][2] == b[1][2] && b[1][2] == b[2][2];
    over |= b[0][0] && b[0][0] == b[1][1] && b[1][1] == b[2][2];
    over |= b[0][2] && b[0][2] == b[1][1] && b[1][1] == b[2][0];
    // if all fields are taken it's over too...
    over |= allFieldsAreTaken();
    return over;
};


/* here we define how to tell if all fields in board are taken */
var allFieldsAreTaken = function () {
    return _.every(_.flatten(game.board), function (elem) { return elem; });
};


/* here we define how to tell which player is active */
var getActivePlayer = function () {
    return _.filter(game.players, function (player) { return player.active; })[0];
};


/* here we define how to tell which player is inactive */
var getInactivePlayer = function () {
    return _.filter(game.players, function (player) { return !player.active; })[0];
};


/* here we define how to tell who the winner is */
var getWinner = function() {
    if(!gameIsOver()) {
        return null;
    } else {
        if(allFieldsAreTaken()) {
            return null;
        } else {
            return getInactivePlayer();
        }
    }
};


/* here we define how to redraw board */
var redrawBoard = function () {
    _.each($('#board').children(), function (tr, x) {
        _.each($(tr).children(), function (td, y) {
            // if in our model the cell is marked, we colour it in view
            if (game.board[x][y] && !$(td).hasClass(game.board[x][y])) {
                $(td).addClass(game.board[x][y]);
            }
        });
    });
};


/* here we define how to redraw state */
var redrawState = function () {
  var gameState;
  if (gameIsOver()) {
      gameState = 'state-over';
  } else {
      if (getActivePlayer().id == 'red') {
          gameState = 'state-red-move';
      } else {
          gameState = 'state-green-move';
      }
  }
  $('p').removeClass('active-state');
  $('p#' + gameState).addClass('active-state');
};

redrawBoard();
redrawState();