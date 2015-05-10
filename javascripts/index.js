var loadInterval;

$(document).ready(function () {
  var deg = 0;
  loadInterval = setInterval(function () {
    $('#load img').css({
      transform: 'rotateY(' + deg % 360 + 'deg)'
    });
    deg += 5;
  }, 20);
});

$(window).load(function() {

  clearInterval(loadInterval);
  $('#load').hide();
  $('#main').fadeIn(2000);

  var histogram = new Histogram($('#histogram'));
  var psychologist = new Psychologist(histogram);
  histogram.initialize();

  $('body').on('keyup', function(e) {
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