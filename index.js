const setOfWords = [
    "The his honour and reputation. Everyone has the right against such interference or",
    "quick brown fox jumps over the lazy dog",
    "effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.",
    "brown is something witch",
    "No one shall be held in slavery or servitude slavery and the slave trade shall be prohibited in all their forms.",
    "No one his honour and reputation. Everyone has the right to the protection of the law against such interference or",
];
console.log(setOfWords);
const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime, endTime;
const playGame = ()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    console.log(randomNumber);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime); 
}
btn.addEventListener('click', function(){
    console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == 'Done'){
        typeWords.disabled = true;
        btn.innerText = 'Start';
        endPlay();
    }

} )

