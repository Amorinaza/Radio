window.onload = function () {

const background = document.querySelector('#background'); // background derived from album cover below
const song = document.querySelector('#song'); // audio object
const nextSong = document.querySelector('#next-song')
const prevSong = document.querySelector('#previous-song')

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['songs/1.mp3', 'songs/3.mp3']; // object storing paths for audio objects
songArtists = ['Lipps Inc', 'Kool & The Gang']; // object storing track artists
songTitles = ["Funky Town", "Celebrate Good Times"]; // object storing track titles

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
pPause.onclick = function playPause() {
    if (playing) {
        const song = document.querySelector('#song');
        pPause.src = "pause.png"
        song.play();
        playing = false;
    } else {
        pPause.src = "play.png"
        song.pause();
        playing = true;
    }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
nextSong.onclick = function nextSong() {
    songIndex++;
    if (songIndex > 1) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
prevSong.onclick = function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 1;
    };
    song.src = songs[songIndex];
    
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}
}

