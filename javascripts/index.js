$(document).ready(function() {
  var histogram = new Histogram($('#histogram'));
  histogram.initialize();
  $('textarea').on('keyup', function(e) {
    histogram.process(e.keyCode);
  });
});