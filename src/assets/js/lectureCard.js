var myVideoPlayer = document.getElementById('video_player'),
    meta = document.getElementById('meta');

myVideoPlayer.addEventListener('loadedmetadata', function () {
    var duration = myVideoPlayer.duration;
    meta.innerHTML = "Duration is " + duration.toFixed(2) + " seconds."
});
           