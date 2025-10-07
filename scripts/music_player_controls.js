class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.current = null;
    }
}
class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
const musicList = new DoublyLinkedList();
const current_track = document.getElementById('current-track');
const play_button = document.getElementById('play-button');
current_track.innerText = "No song is currently playing.";
function addMusic(data){
    const newNode = new Node(data);
    
    if(!musicList.head){
        musicList.head = newNode;
        musicList.tail = newNode;
        musicList.current = newNode;
    } else{
        newNode.prev = musicList.tail;
        musicList.tail.next = newNode;
        musicList.tail = newNode;
    }
}
function play(){
    if(musicList.current){
        play_button.classList.replace("fa-play", "fa-pause");
        play_button.innerText = ""; // Remove text if any
        play_button.title = "Stop";
        play_button.dataset.state = "playing";
        current_track.innerText = musicList.current.data;
        // centralized UI can log this event
    }
}
// Load music list from JSON file
fetch('scripts/JSON/musiclist.json')
    .then(response => response.json())
    .then(songs => {
        songs.forEach(song => addMusic(song));
    })
    .catch(err => { /* centralized UI can log this error */ });
function stop(){
    if(musicList.current){
        play_button.classList.replace("fa-pause", "fa-play");
        play_button.innerText = "";
        play_button.title = "Play";
        play_button.dataset.state = "stopped";
        current_track.innerText = "No song is currently playing.";
        // centralized UI can log this event
    } else{
        // centralized UI can log this event
    }
}
function next(){
    if(musicList.current && musicList.current.next){
        musicList.current = musicList.current.next;
        
    } else{
        musicList.current = musicList.head;
    }
    current_track.innerText = musicList.current.data;
    play();
}
function previous(){
    if(musicList.current && musicList.current.prev){
        musicList.current = musicList.current.prev;
    } else{
        musicList.current = musicList.tail;
    }
    current_track.innerText = musicList.current.data;
    play();
}

// Toggle play/stop on button click
if (play_button) {
    play_button.dataset.state = "stopped";
    play_button.addEventListener('click', function() {
        if (play_button.dataset.state === "stopped") {
            play();
        } else {
            stop();
        }
    });
}
export {play, stop, next, previous, musicList};
