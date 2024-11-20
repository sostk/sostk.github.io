// script.js

// Function to load video dynamically (if you want to manage them dynamically from a folder)
function loadVideos() {
  const videoContainer = document.querySelector('.video-container');
  const videoSources = [
    { name: 'Friend 1', src: 'friend1-video.mp4' },
    { name: 'Friend 2', src: 'friend2-video.mp4' },
    { name: 'Friend 3', src: 'friend3-video.mp4' }
  ];

  videoSources.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = video.name;
    videoItem.appendChild(videoTitle);

    const videoPlayer = document.createElement('video');
    videoPlayer.classList.add('video-player');
    videoPlayer.setAttribute('controls', '');

    const source = document.createElement('source');
    source.setAttribute('src', video.src);
    source.setAttribute('type', 'video/mp4');
    videoPlayer.appendChild(source);

    videoItem.appendChild(videoPlayer);
    videoContainer.appendChild(videoItem);
  });
}

// Call the loadVideos function when the page is loaded
window.onload = loadVideos;