$(document).ready(function() {
  var histogram = new Histogram($('#histogram'));
  var psychologist = new Psychologist(histogram);
  histogram.initialize();
  $('textarea').on('keyup', function(e) {
    if (e.keyCode === 13) {
      var input = histogram.extractInput();
      psychologist.respondTo(input);
    } else {
      histogram.process(e.keyCode);
    }
  });
});