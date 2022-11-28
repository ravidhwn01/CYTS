const setOfWords = [
  "The his honour and reputation. Everyone has the right against such interference or",
  "quick brown fox jumps over the lazy dog",
  "effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.",
  "brown is something witch",
  "No one shall be held in slavery or servitude slavery and the slave trade shall be prohibited in all their forms.",
  "No one his honour and reputation. Everyone has the right to the protection of the law against such interference or",
];
const msg = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;
const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};
const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let totalStr = typeWords.value;
  console.log(totalStr)
  let wordCount = wordCounter(totalStr);
  console.log(wordCount)

  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg = "You typed total words at speed " + speed + " words per minutes. ";
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};
const compareWords = (str1,str2)=>{
     let words1 = str1.split(" ");
     let words2 = str2.split(" ");
     let  count = 0;
     words1.forEach(function(item, index){
        if(item == words2[index]){
            count++;
        }
     })
     let errorWords = (words1.length-count); 
     return ( count + " correct out of " + words1.length +" words and the total number of error are " + errorWords + "." );

}
const wordCounter = (str) => {
    let res =  str.split(" ").length;
    console.log(res);
    return res;
};
btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
    typeWords.value = '';
  }
});
