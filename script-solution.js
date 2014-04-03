var points = _.map(_.range(1000), function () {
   return [0, 0];
});

var averagePosition = null; // what is the averagePosition
var avgRadius = null; // what is the average radius?

var statsTpl = _.template('avg pos: [<%= averagePosition %>], avgRadius: <%= avgRadius %>')
var statsContainer = $('#stats');

var pointAfterStep = function (oldPoint) {
  var dx = Math.random() - 0.5 < 0 ? 1 : -1;
  var dy = Math.random() - 0.5 < 0 ? 1 : -1;
  return [oldPoint[0]+dx, oldPoint[1]+dy];
};

var histogram = function (points) {
  var h = {};
  _.each(points, function (p) {
    h[p[0]] = h[p[0]] ? h[p[0]] + 1 : 1;
  });
  return h;
};

var pointWorld2Canvas = function(point) {
  var x = point[0] + 400;
  var y = point[1] + 300;
  return [x, y];
};

var histogramBar2Canvas = function(key, value) {
  return [key + 400, value];
};

var planSketch = function(processing) {

  processing.setup = function () {
    processing.size(800, 600);
    processing.frameRate(5);
    processing.strokeWeight(1);
    processing.noFill();
  };

  processing.draw = function () {
    processing.background(255);

    statsContainer.html(statsTpl({averagePosition: averagePosition, avgRadius: avgRadius}));

    var points2draw = _.map(points, pointWorld2Canvas);
    _.each(points2draw, function (p) { processing.point(p[0], p[1]);});

    var totalPosition = _.reduce(points, function(memo, p) {
        return [memo[0] + p[0], memo[1] + p[1]];
    }, [0, 0]);
    averagePosition = [totalPosition[0]/points.length, totalPosition[1]/points.length];

    var totalRadius = _.reduce(points, function(memo, p) {
        return memo + Math.sqrt(p[0]*p[0]+p[1]*p[1]);
    }, 0);
    avgRadius = totalRadius/points.length;

    var middlePoint = pointWorld2Canvas([averagePosition[0], averagePosition[1]]);
    processing.ellipse(middlePoint[0], middlePoint[1], 10, 10);
    processing.ellipse(middlePoint[0], middlePoint[1], avgRadius, avgRadius);

    points = _.map(points, pointAfterStep);
  };

};

var histogramSketch = function(processing) {

    processing.setup = function () {
        processing.size(800, 200);
        processing.frameRate(5);
        processing.strokeWeight(1);
        processing.noFill();
    };

    processing.draw = function () {
        processing.background(255);
        var bars = _.map(_.pairs(histogram(points)), function (pair) {
            return histogramBar2Canvas(parseInt(pair[0]), pair[1]);
        });
        _.each(bars, function (bar) {
            processing.line(bar[0], 0, bar[0], bar[1]);
        });
    }

};


// -- don't touch this, this is the initialization stuff;
var planCanvas = document.getElementById("plan");
new Processing(planCanvas, planSketch);
var histogramCanvas = document.getElementById("histogram");
new Processing(histogramCanvas, histogramSketch);