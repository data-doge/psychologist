function Column (letter) {
  this.element = $("<div class='column'></div>")
    .attr('id', letter)
    .append($('<h1></h1>').text(letter));
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