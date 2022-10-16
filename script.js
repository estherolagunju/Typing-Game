const quote= document.getElementById('quote');
const input= document.getElementById('typed-value');
const start= document.getElementById('start');
// const timer = document.getElementById('timer');
const timebar = document.getElementById("timebar");

// start function
let targetWord =""

function startGame(){
console.log("Game Started!");

targetWord ='TYPE IN 30SECONDS:  "My Home page is the first page displayed. And I have three other menus."'; 
// but before I can do that, I have to pick a plan.They have Monthly plan, Yearly plan, 2 years, and 3years with some percentage discount for each plan.And also, on this screen, I can see the Orders, Products, And Store icons right below the page."';

quote.innerHTML = `<span>${targetWord}</span>`;

// timer function inside of the start function
var timeLeft = 30;
var downloadTimer = setInterval(function(){
    if(timeLeft <= 0){
        clearInterval(downloadTimer);
        // alert(`Time is up, Refresh to start again!`)
    }
    timebar.value = 30 - timeLeft;
    timeLeft -= 1;

}, 1000);
}
start.addEventListener('click', startGame)


// Read input value function
// let checkInput = targetWord;
// let timeRemaining = 29;
function checkInput(){
    console.log(input.value);

}
input.addEventListener('input', checkInput);





quoteText = "type me";
wordQueue = quoteText.split('');

quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');

quote.childNodes[highlightPosition].className =" ";
highlightPosition++;

quote.childNodes[highlightPosition].className = 'highlight';

// const timer = new Date();
// const milliseconds = timer.getTime();
// console.log(milliseconds);

// const timer = 345621
// const seconds = Math.floor(1000 * 60) ;
// console.log(seconds);



// function timeUp(timeLeft){
//     if(timeLeft = 30){
//         console.log("Time Up!");
//     }
//     else{
//         console.log("Fantabulous!")
//     }
// }
// addEventListener.timeU

// console.log(timeLeft)
// var counter = setInterval(()=> {

// }, 1000);
// console.log(counter)


