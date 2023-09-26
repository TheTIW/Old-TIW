const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

function goBack() {
    history.back();
  }
  
  function reloadPage() {
    location.reload();
  }
  
  function toggleFullscreen() {
    const iframe = document.getElementById('iframe');
    if (iframe.requestFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframe.requestFullscreen();
      }
    } else if (iframe.mozRequestFullScreen) { // Firefox
      if (document.mozFullScreenElement) {
        document.mozCancelFullScreen();
      } else {
        iframe.mozRequestFullScreen();
      }
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
      if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
      } else {
        iframe.webkitRequestFullscreen();
      }
    } else if (iframe.msRequestFullscreen) { // IE/Edge
      if (document.msFullscreenElement) {
        document.msExitFullscreen();
      } else {
        iframe.msRequestFullscreen();
      }
    }
  }
