var scores, roundScore, activePlayer, gamePlaying, lastDice;//variable declaration
gamePlaying = true;//state
init();//creating a function that is gonna set the default value

document.querySelector('.btn-roll').addEventListener('click', kaka);//adding event listener,created funtion kaka and addded it in without parentesis so it get exicuted when event listerner click is done
    
    document.querySelector('.btn-hold').addEventListener('click', function () {
            if (gamePlaying) {//added true state condition

                scores[activePlayer] += roundScore;//set scores of players
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

                var input = document.querySelector(".final-score").value;//input 
                var winningScore;
                if (input) {
                    winningScore = input;
                } else {
                    winningScore = 100;
                }
                if (scores[activePlayer] >= winningScore) {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('#dice-1').style.display = 'none';
                    document.querySelector('#dice-2').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    gamePlaying = false;
                } else {
                    nextPlayer();
                }
            }
        });

        function nextPlayer() {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
        }
        document.querySelector('.btn-new').addEventListener('click', init);

        function init() {
            scores = [0, 0];
            roundScore = 0;
            activePlayer = 0;
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            gamePlaying = true;
        }
function kaka() {
            if (gamePlaying) {//when click is done on roll button thsi function get executed,value of diceA and diceB are evaluated and addd,and dice images are set accoriding to those values.
                var diceA=Math.floor(Math.random()*6+1);//random values are calulated then the floor funtion is used to get integer value
                var diceB=Math.floor(Math.random()*6+1);
                document.querySelector('#dice-1').style.display = 'block';//display property set here using Javascript
                document.querySelector('#dice-2').style.display = 'block';
                document.querySelector('#dice-1').src='dice-'+diceA+'.png';
                document.querySelector('#dice-2').src='dice-'+diceB+'.png';
//                document.querySelector('#dice-1).src = 'dice-' + diceA +'.png';
//                document.querySelector('#dice-2').src = 'dice-' + diceB +'.png';


                if (diceA !== 1 && diceB !== 1) {//condition of program set,if a&b not ==1 then add both the values and display as round score,if one of them is one then its turn of next player
                    roundScore += diceA + diceB;
                    document.getElementById('current-' + activePlayer).textContent = roundScore;

                } else {
                    nextPlayer();//next player function
                }
            }
}