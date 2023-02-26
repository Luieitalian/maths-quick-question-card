
let score = +sessionStorage.getItem('score');
if(!score){
    sessionStorage.setItem('score','0');
}

let num1 = Math.ceil(Math.random() * 9 + 1);
let num2 = Math.ceil(Math.random() * 9 + 1);

let result = num1 * num2;

const formEl = document.querySelector('#form');
const inputEl = document.querySelector('#input');
const questionEl = document.querySelector('.question');
const scoreEl = document.querySelector('#score');
scoreEl.innerHTML = `score: ${score}`;

questionEl.innerHTML = `What is ${num1} multiplied by ${num2}?`;


formEl.addEventListener('submit', () => {

    const input = +inputEl.value;

    if (+input === result) {
        score++; updateScore();
    }
    else {
        score--; updateScore();
    }


});

function updateScore() {
    sessionStorage.setItem('score', `${JSON.stringify(score)}`)

    scoreEl.innerHTML = `score: ${score}`;
}
