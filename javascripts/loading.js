var $loadContainer = $("<div id='load-container'></div>").css({
  position : 'fixed',
  width : '100%',
  height : '100%',
  textAlign : 'center',
  background: 'white',
  zIndex : 1000
});

var $loadDiv = $("<div id='load'></div>").css({
  position : 'absolute',
  top : '50%',
  left : '50%',
  transform : 'translate(-50%, -50%)'
});

var $h3 = $('<h3>fuckafucka is loading</h3>').css({
  fontSize : 20,
  letterSpacing : 2,
  margin : 10,
  fontFamily : 'Inconsolata'
});

$loadDiv.append($h3);
$loadDiv.append("<img src='./media/avocado.jpg' />");
$loadDiv.append("<img src='./media/avocado.jpg' />");
$loadDiv.append("<img src='./media/avocado.jpg' />");
$loadContainer.append($loadDiv)

$('body').append($loadContainer);

var deg = 0;
var loadingInterval = setInterval(function () {
    $('#load img').css({
      transform: 'rotateY(' + deg % 360 + 'deg)'
    });
    deg += 5;
}, 20);

$(window).load(function () {
  $('#load-container').remove();
  clearInterval(loadingInterval);
});