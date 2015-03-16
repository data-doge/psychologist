$(document).ready(function() {
  var histogram = new Histogram($('#histogram'));
  var psychologist = new Psychologist(histogram);
  histogram.initialize();

  $('body').on('keyup', function(e) {
    console.log(e.keyCode)
    if (e.keyCode === 9) {
      $('#office').css({display: "initial"})
    }
  });

  $('textarea').on('keyup', function(e) {
    if (e.keyCode === 13) {
      var input = histogram.extractInput();
      psychologist.respondTo(input);
    } else {
      histogram.process(e.keyCode);
    }
  });
});