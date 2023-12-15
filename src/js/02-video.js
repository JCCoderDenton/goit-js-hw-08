import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const videoPlayer = new Player('vimeo-player');
const saveCurrentTime = throttle(() => {
  videoPlayer.getCurrentTime().then(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}, 1000);

videoPlayer.on('timeupdate', saveCurrentTime);

if (localStorage.getItem('videoplayer-current-time') !== null) {
  const currentTime = parseFloat(
    localStorage.getItem('videoplayer-current-time')
  );
  videoPlayer.setCurrentTime(currentTime);
}
