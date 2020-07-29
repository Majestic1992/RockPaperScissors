// Starting parameters and variables 

let x = 1;
let y = 1;
let gamePlaying = true;
let activePlayer = 0;
let p2Button = document.getElementById('button2');
let p1Button = document.getElementById('button1');
p1Button.classList.add('active');
p2Button.disabled = true;
let p1Weapon1 = document.getElementById('p1-weapon-1');
let p1Weapon2 = document.getElementById('p1-weapon-2');
let p1Weapon3 = document.getElementById('p1-weapon-3');
let p2Weapon1 = document.getElementById('p2-weapon-1');
let p2Weapon2 = document.getElementById('p2-weapon-2');
let p2Weapon3 = document.getElementById('p2-weapon-3');
let player1 = document.getElementById('p1');
let player2 = document.getElementById('p2');
let p1Score = document.getElementById('score-1');
let p2Score = document.getElementById('score-2');
let player1Score = document.querySelector('.player1-score');
let player2Score = document.querySelector('.player2-score');
let newGame = document.getElementById('new-game');
newGame.style.display = 'none';
let applause = new Audio('local/js/applause.mp3');


// Set winning score
const winningScore = () => {
    let x = document.getElementById('length-input').value;
    return x;
}

// Start the game
const init= () => {
    document.querySelector('.weapon').classList.remove('active');
    document.querySelector('.battle-field').classList.remove('active');
    applause.pause();
    applause.currentTime = 0;
    gamePlaying = true;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    x = 1; 
    y = 1;
    player1.textContent = 'Player 1';
    player2.textContent = 'Player 2';
    activePlayer = 0;
    player1Score.classList.add('active');
    player1.title = '';
    player2.title = '';
    p1Button.classList.add('active');
    p1Button.style.display = 'grid';
    p2Button.style.display = 'grid';
    p1Button.disabled = false;
    p2Button.disabled = true;
    newGame.style.display = 'none';
    p1Weapon2.style.display='grid';
    p1Weapon3.style.display='grid';
    p1Weapon1.style.display='grid';
    p2Weapon2.style.display='grid';
    p2Weapon3.style.display='grid';
    p2Weapon1.style.display='grid';

    p1Weapon1.classList.remove('active');
    p1Weapon2.classList.remove('active');
    p1Weapon3.classList.remove('active');

    p2Weapon1.classList.remove('active');
    p2Weapon2.classList.remove('active');
    p2Weapon3.classList.remove('active');

    }

    // Switching between players 
    const nextPlayer = () => {
        player1Score.classList.toggle('active');
        player2Score.classList.toggle('active');
        p1Button.classList.toggle('active');
        p2Button.classList.toggle('active');

    }

    // Click audio effect
    const myPlay = () => {
        let audio = new Audio('local/js/click.mp3');
        audio.play();
    };

    



const p1 = () => {
        // Random number 1
    if (gamePlaying) {
            let value  = Math.ceil(Math.random() * 3);
            localStorage.setItem('number1', value);
            nextPlayer();
            document.querySelector('.weapon').classList.add('active');
            document.querySelector('.battle-field').classList.add('active');

            // Display weapon 

    if (localStorage.number1 == 1) {
        p1Weapon2.style.display='none';
        p1Weapon3.style.display='none';
        p1Weapon1.style.display='flex';
        p1Weapon1.classList.add('active');

    } else if (localStorage.number1 == 2) {
        p1Weapon1.style.display='none';
        p1Weapon3.style.display='none';
        p1Weapon2.style.display='flex';
        p1Weapon2.classList.add('active');


    } else {
        p1Weapon1.style.display='none';
        p1Weapon2.style.display='none';
        p1Weapon3.style.display='flex';
        p1Weapon3.classList.add('active');

    };
    p2Button.disabled = false;
    p1Button.disabled = true;
    p2Weapon2.style.display='none';
    p2Weapon3.style.display='none';
    p2Weapon1.style.display='none';

    }

}    




const comparison = () => {
        // Random number 2
    if (gamePlaying) {
        p1Button.disabled = false;

        let value  = Math.ceil(Math.random() * 3);
        localStorage.setItem('number2', value);
        nextPlayer();

            // Display weapon 

    if (localStorage.number2 == 1) {
        p2Weapon2.style.display='none';
        p2Weapon3.style.display='none';
        p2Weapon1.style.display='flex';
        p2Weapon1.classList.add('active');


    } else if (localStorage.number2 == 2) {
        p2Weapon1.style.display='none';
        p2Weapon3.style.display='none';
        p2Weapon2.style.display='flex';
        p2Weapon2.classList.add('active');

    } else {
        p2Weapon1.style.display='none';
        p2Weapon2.style.display='none';
        p2Weapon3.style.display='flex';
        p2Weapon3.classList.add('active');

    };

  

    // Who won the round?
        if (localStorage.number1 > 0 || localStorage.number1 <= 3) {
         

            if (localStorage.number1 == 1 && localStorage.number2 == 3)  {
                p1Score.textContent = x < winningScore() ? x++ : x+0;
    
            } else if (localStorage.number1  == 2 && localStorage.number2 == 1 ) {
                p1Score.textContent = x < winningScore() ? x++ : x+0;;
    
            } else if (localStorage.number1  == 3 && localStorage.number2 == 2) {
                p1Score.textContent = x < winningScore() ? x++ : x+0;;
    
            } else if (localStorage.number1  == localStorage.number2) {
            } else {
                p2Score.textContent = y < winningScore() ? y++ : y+0;;
            }
    
            p2Button.disabled = true;
        }
    

    // Who won the game?
    if (p1Score.textContent == winningScore()) {
        applause.play();
        player1.title = 'Winner';
        player1.innerText = 'Winner!!!';
        p1Button.style.display = 'none';
        p2Button.style.display = 'none';
        newGame.style.display = 'grid';
        player1Score.classList.remove('active');
        player2Score.classList.remove('active');
        gamePlaying = false;

    } else if (p2Score.textContent == winningScore()) {
        applause.play();
        player2.title = 'Winner';
        player2.innerText = 'Winner!!!';
        p1Button.style.display = 'none';
        p2Button.style.display = 'none';
        newGame.style.display = 'grid';
        player1Score.classList.remove('active');
        player2Score.classList.remove('active');
        gamePlaying = false;
    }
    
}};   



