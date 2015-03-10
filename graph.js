function Histogram (element) {
  this.element = element;
  this.columns = {};
  this.randomColor = function() {
    var colors = ['#F2274C', '#F2F2F2', '#5ABFBF', '#66D9D9', '#F22E2E'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
}

Histogram.prototype.initialize = function() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (var i = 0; i < letters.length; i++) {
    var column = new Column(letters[i]);
    column.initialize(this.element);
    this.columns[letters[i]] = column;
  }
};

Histogram.prototype.process = function (keyCode) {
  var letter = String.fromCharCode(keyCode);
  if (this.columns[letter]) {
    this.columns[letter].addRow();
    this.columns[letter].changeColor(this.randomColor());
  } else if (keyCode === 32) {
    for (var letter in this.columns) {
      this.columns[letter].changeColor('white');
    }
  } else if (keyCode === 13) {
    $('.row').remove();
    $('textarea').val('');
  }
};