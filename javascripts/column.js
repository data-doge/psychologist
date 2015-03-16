function Column () {
  this.element = $("<div class='column'></div>")
    .append($('<h1></h1>').text("."));
};

Column.prototype.initialize = function (graph) {
  graph.append(this.element);
};

Column.prototype.addRow = function () {
  this.element.append($("<div class='row'></div>"));
};

Column.prototype.changeColor = function (color) {
  this.element.css({background: color});
};