function Psychologist (histogram) {

  this.histogram = histogram;
  this.bot = new ElizaBot();

  this.respondTo = function (input) {
    var response = this.bot.transform(input).split('');
    var replyInterval = setInterval(function() {
      var char = response.shift();
      document.getElementsByTagName('P')[0].innerHTML += char;
      histogram.process(char.toUpperCase().charCodeAt(0));
      if (response.length === 0) {
        histogram.process(13);
        $('.row').remove();
        clearInterval(replyInterval);
      }
    }, 50);
  };

}

