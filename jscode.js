'use strict';
let secreteNumber=Math.trunc(Math.random()*50)+1;
let score=20;
let highscore=0;
// console.log(secreteNumber);
// // document.querySelector('.number').textContent=secreteNumber;
// document.querySelector('.guess').value=54;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click',function(){
//     console.log(document.querySelector('.guess').value);
//     //console.log(guess,typeof guess);
// });
const messages=function(message)
{
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess)
    {
        messages('...no number');

    }
    else if(guess===secreteNumber)
    {
        messages('Correct Number....you won the game');
        document.querySelector('.number').textContent=secreteNumber;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='25rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.high').textContent=highscore;
        }
    }
    else if(guess!=secreteNumber){
        if(score>1){
            messages(guess>secreteNumber?'TOO high':'TOO low');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            messages('..you lost the game');
            document.querySelector('.score').textContent=0;

        }
    }
    
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secreteNumber=Math.trunc(Math.random()*50)+1;
    document.querySelector('.message').textContent='start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.high').textContent=highscore;

    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').style.width='16rem';
});