console.log("Welcome To Spotify");

// Initialise the variables
let songIndex = 0;
let audioElement = new Audio('mixaund-feel');
let masterPlay = document.getElementById('masterPlan');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Salam-e-Ishq", filePath: "mixaund-feel", coverPath: "young-hip-hop-dancer-standing-white.jpg"}
]

// Handle play and pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-solid fa-play');
        gif.style.opacity = 0; 
    }
})
// List to events
audioElement.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    // Update seekbar
})