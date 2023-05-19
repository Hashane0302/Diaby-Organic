
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'tBuO-gs-ROE',
      // Additional player options or events can be added here
    });
  }

  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    }
  });