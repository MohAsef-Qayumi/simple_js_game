let input = document.querySelector('.in-number')
let checkBtn = document.querySelector('.btn-check')
let againBtn = document.querySelector(".btn-again");
let background = document.querySelector('body')
let number = document.querySelector('.number')
let message = document.querySelector('.message')
let score = document.querySelector('.score')
let randomNum = Math.floor(Math.random() * 20+1);
let highS = document.querySelector('.high-score');
let s = 20
let highScore = 0;

checkBtn.addEventListener('click' , ()=>{
    if (
      input.value > randomNum &&
      input.value <= 20 &&
      input.value != 0 &&
      input.value > 0
    ) { 
        if(s > 1){
        message.textContent = "📈 Too high";
        s--;
        score.textContent = s;
        }else{
            message.textContent = "💥 You lost the game!";
            score.textContent = 0;
        }
    } else if (
      input.value < randomNum &&
      input.value <= 20 &&
      input.value != 0 &&
      input.value > 0
    ) {
     if (s > 1) {
       message.textContent = "📉 Too low";
       s--;
       score.textContent = s;
     } else {
       message.textContent = "💥 You lost the game!";
       score.textContent = 0;
     }
    } else if (
      input.value == randomNum &&
      input.value <= 20 &&
      input.value != 0 &&
      input.value > 0
    ) {
      message.textContent = "🎉 correct number";
      number.textContent = randomNum;
      background.style.backgroundColor = "#60b347";
      number.style.width = '10rem'
      if(s > highScore){
          highScore = s
          highS.textContent = s; 
      }
    } else {
      message.textContent = "❌ Enter a number between 1 to 20";
    }
})

againBtn.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * 20 + 1);
  s = 20; 
  score.textContent = s;
  input.value = "";
  background.style.backgroundColor = ""; 
  number.textContent = "?"; 
  message.textContent = "✨ Start guessing again! "; 
});