document.addEventListener('DOMContentLoaded', () => {
  // Select the video element
  const video = document.querySelector('video');

  // Select the required elements
  const progressBar = document.querySelector('.progress__filled');
  const playPauseButton = document.querySelector('.toggle');
  const volumeInput = document.querySelector('input[name="volume"]');
  const playbackSpeedInput = document.querySelector('input[name="playbackRate"]');
  const skipButtons = document.querySelectorAll('[data-skip]');
  const rewindButton = document.querySelector('.rewind');
  const fastForwardButton = document.querySelector('.fastforward');

  // Initialize the playback speed to 1x
  video.playbackRate = 1;

  // Function to toggle play/pause
  function togglePlay() {
    if (video.paused) {
      video.play();
      playPauseButton.textContent = '❚ ❚'; // Set the pause symbol
    } else {
      video.pause();
      playPauseButton.textContent = '►'; // Set the play symbol
    }
  }

  // Event listener for play/pause button
  playPauseButton.addEventListener('click', togglePlay);

  // Event listener for progress bar
  video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  });

  // Function to update video time based on the skip value
  function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
  }

  // Event listeners for skip buttons
  skipButtons.forEach(button => button.addEventListener('click', skip));

  // Event listener for rewind button
  rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
  });

  // Event listener for fast forward button
  fastForwardButton.addEventListener('click', () => {
    video.currentTime += 25;
  });

  // Event listener for volume input
  volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value;
  });

  // Event listener for playback speed input
  playbackSpeedInput.addEventListener('input', () => {
    video.playbackRate = playbackSpeedInput.value;
  });
});
