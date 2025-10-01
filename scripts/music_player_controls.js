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
        console.log(`Playing: ${musicList.current.data}`);
    }
}
addMusic("Song 1");
addMusic("Song 2");
addMusic("Song 3");
addMusic("Song 4");
addMusic("Song 5");
function stop(){
    if(musicList.current){
        console.log(`Stopped: ${musicList.current.data}`);
    } else{
        console.log("No song is currently playing.");
    }
}
function next(){
    if(musicList.current && musicList.current.next){
        musicList.current = musicList.current.next;
        current_track.innerText = musicList.current.data;
        play();
    } else{
        console.log("You are at the end of the playlist.");
    }
}
function previous(){
    if(musicList.current && musicList.current.prev){
        musicList.current = musicList.current.prev;
        current_track.innerText = musicList.current.data;
        play();
    } else{
        console.log("You are at the beginning of the playlist.");
    }
}
export {play, stop, next, previous, musicList};
