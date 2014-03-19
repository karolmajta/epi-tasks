var graphicBoard =  "    X   XX" + '\n' +
                    " X        " + '\n' +
                    " X     XXX" + '\n' +
                    " X  X     " + '\n' +
                    " X        " + '\n' +
                    "   X   XXX" + '\n' +
                    "          " + '\n' +
                    "  XX    X " + '\n' +
                    "        X " + '\n' +
                    "X         ";

var board = [];

var rows = graphicBoard.split('\n');
_.each(rows, function (row) {
   var letters = row.split('');
   var booleanRow = _.map(letters, function (l) { return l == 'X' ? true : null });
   board.push(booleanRow);
});