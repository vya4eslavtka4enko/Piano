window.addEventListener('DOMContentLoaded',() => {
    const greeting = ['PIANO 1.0'];
    let writeText = () => {
        let count = 0;
        let line = 0;
        let greetingHTML =  document.querySelector('.greeting');
        let body = document.querySelector('body');
        let writeLine = () =>{
            let interval = setTimeout(()=>{
                greetingHTML.innerHTML += greeting[line][count];
                count++;
                if(count>=greeting[line].length){
                    count=0;
                    line++;
                }if(line == greeting.length){
                    clearInterval(interval);
                    setTimeout(()=>{
                        greetingHTML.remove();
                        body.style.display = 'flex';
                    },1000);
                    return true;
                    
                }
                writeLine();
            },100);
        };
        writeLine();
    };
    writeText();
});
const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','f','g','h']
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.white.key');
const blackKeys = document.querySelectorAll('.black.key');
keys.forEach(key => {
    key.addEventListener('click',()=>{
        playNote(key);
    });
});
document.addEventListener('keydown',(e)=>{
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    if(whiteKeyIndex > -1)playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1)playNote(blackKeys[blackKeyIndex])
})
let playNote = (key)=> {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended',()=>{
        key.classList.remove('active');
    });
};