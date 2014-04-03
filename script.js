var points = [
    // i want a thousand points here...
];

var averagePosition = null; // what is the averagePosition
var avgRadius = null; // what is the average radius?

var statsTpl = _.template('avg. pos: [<%= averagePosition %>] | avg. radius: <%= avgRadius %>')
var statsContainer = $('#stats');

var pointAfterStep = function (oldPoint) {
    // how are we going to calculate next position of point?
};

var histogram = function (points) {
    // how are we goint to create histogram?
};

var pointWorld2Canvas = function(point) {
    // how are we going to calculate point position on plan canvas
};

var histogramBar2Canvas = function(bar) {
    // how are we going to represent bars of histogram as lines on canvas?
};

var planSketch = function(processing) {

    processing.setup = function () {
        processing.size(800, 600);
        processing.frameRate(5);
        processing.strokeWeight(1);
    };

    processing.draw = function () {
        processing.background(255)
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
    }

};

// -- don't touch this, this is the initialization stuff;
var planCanvas = document.getElementById("plan");
new Processing(planCanvas, planSketch);
var histogramCanvas = document.getElementById("histogram");
new Processing(histogramCanvas, histogramSketch);