$(document).ready(function() {
  var eliza = new ElizaBot();
  var initial = eliza.getInitial();
  var histogram = new Histogram($('#histogram'));
  histogram.initialize();
  $('textarea').on('keyup', function(e) {
    if (e.keyCode === 13) {
      $('.row').remove();
      $('p').html('');
      var input = $('textarea').val();
      $('textarea').val('');
      var response = eliza.transform(input).split('');
      var replyInterval = setInterval(function() {
        var char = response.shift();
        document.getElementsByTagName('P')[0].innerHTML += char;
        histogram.process(char.toUpperCase().charCodeAt(0));
        if (response.length === 0) {
          histogram.process(13);
          $('.row').remove();
          clearInterval(replyInterval);
        }
      },50);
    } else {
      histogram.process(e.keyCode);
    }
  });




  var inputstring = "meow";
  var reply = eliza.transform(inputstring);
});