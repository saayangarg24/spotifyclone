console.log("Welcome to spotify")

//initialize the variables
let songIndex=0;
var audioElement = new Audio('1.mp3');
var audioElement2 = new Audio('2.mp3');
var audioElement3 = new Audio('3.mp3');
var audioElement4 = new Audio('4.mp3');
var audioElement5 = new Audio('5.mp3');
var audioElement6 = new Audio('6.mp3');
var audioElement7 = new Audio('7.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
// let songs= [
//     {songName: "", filePath: "D:\web development\projectclone\1.mp3", coverPath: ""},
//     {songName: "Salam-e-Ishq", filePath: "D:\web development\projectclone\2.mp3", coverPath: ""},
//     {songName: "Salam-e-Ishq", filePath: "D:\web development\projectclone\3.mp3", coverPath: ""},
//     {songName: "Salam-e-Ishq", filePath: "D:\web development\projectclone\4.mp3", coverPath: ""},
//     {songName: "Salam-e-Ishq", filePath: "D:\web development\projectclone\5.mp3", coverPath: ""},
//     {songName: "Salam-e-Ishq", filePath: "D:\web development\projectclone\6.mp3", coverPath: ""},
//     {songName: "Salam-e-Ishq", filePath: "D:\web development\projectclone\7.mp3", coverPath: ""},

// ]

// audioElement.play();    
//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
var balle=document.getElementById('balle');
balle.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        balle.classList.remove('fa-play-circle');
        balle.classList.add('fa-pause-circle');
        
    }else{
        audioElement.pause();
        balle.classList.remove('fa-pause-circle');
        balle.classList.add('fa-play-circle');
    }
})
var harley= document.getElementById('harley2');
harley.addEventListener('click',()=>{
    if(audioElement2.paused || audioElement2.currentTime<=0){
        audioElement2.play();
        harley.classList.remove('fa-play-circle');
        harley.classList.add('fa-pause-circle');
        
    }else{
        audioElement2.pause();
        harley.classList.remove('fa-pause-circle');
        harley.classList.add('fa-play-circle');
    }
})
var cute= document.getElementById('cute');
cute.addEventListener('click',()=>{
    if(audioElement3.paused || audioElement3.currentTime<=0){
        audioElement3.play();
        cute.classList.remove('fa-play-circle');
        cute.classList.add('fa-pause-circle');
        
    }else{
        audioElement3.pause();
        cute.classList.remove('fa-pause-circle');
        cute.classList.add('fa-play-circle');
    }
})
var bekhayali= document.getElementById('kabir');
bekhayali.addEventListener('click',()=>{
    if(audioElement4.paused || audioElement4.currentTime<=0){
        audioElement4.play();
        bekhayali.classList.remove('fa-play-circle');
        bekhayali.classList.add('fa-pause-circle');
        
    }else{
        audioElement4.pause();
        bekhayali.classList.remove('fa-pause-circle');
        bekhayali.classList.add('fa-play-circle');
    }
})
var lemoande= document.getElementById('lemonade');
lemoande.addEventListener('click',()=>{
    if(audioElement5.paused || audioElement5.currentTime<=0){
        audioElement5.play();
        lemoande.classList.remove('fa-play-circle');
        lemoande.classList.add('fa-pause-circle');
        
    }else{
        audioElement5.pause();
        lemoande.classList.remove('fa-pause-circle');
        lemoande.classList.add('fa-play-circle');
    }
})
var maiiya= document.getElementById('maiiya');
maiiya.addEventListener('click',()=>{
    if(audioElement6.paused || audioElement6.currentTime<=0){
        audioElement6.play();
        maiiya.classList.remove('fa-play-circle');
        maiiya.classList.add('fa-pause-circle');
        
    }else{
        audioElement6.pause();
        maiiya.classList.remove('fa-pause-circle');
        maiiya.classList.add('fa-play-circle');
    }
})
var kesariya= document.getElementById('kesariya');
kesariya.addEventListener('click',()=>{
    if(audioElement7.paused || audioElement7.currentTime<=0){
        audioElement7.play();
        kesariya.classList.remove('fa-play-circle');
        kesariya.classList.add('fa-pause-circle');
        
    }else{
        audioElement7.pause();
        kesariya.classList.remove('fa-pause-circle');
        kesariya.classList.add('fa-play-circle');
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress; 
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;
})