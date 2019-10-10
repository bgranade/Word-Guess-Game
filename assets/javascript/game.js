let wins = 0;
let wrongGuesses = [];
let newArray=[];
let totalChances = 0;
let vocab= "";
let Players=["Kobe", "Jordan", "Harden", "Duncan", "Curry", "Durant"]

let Word = document.getElementById("word");
let totalWins = document.getElementById("wins");
let chancesLeft = document.getElementById("chances");
let userGuess = document.getElementById("user-guess");
let newMessage = document.getElementById("message");

function addToArray(letter,display){
    newArray.push({letter,display});
}

function buildArray(word){
    for(let n of word){
        if(n===" "){
            addToArray(n," ");
        }else{
        addToArray(n,"_");
        }
    }
}


//start a new game
function newGame(){
    newMessage.textContent = ""
    newArray=[];
    vocab=Players[(Math.floor((Math.random()) * Players.length))]; 
    console.log(vocab); 
    buildArray(vocab);
    wrongGuesses =[];
    totalChances = 13;
    userGuess.textContent = wrongGuesses;
    chancesLeft.textContent= totalChances;
    displayArray = newArray.map(function(entry){
        for(i=0;i<vocab.length;i++){
        return entry.display;
        }});
    Word.textContent=displayArray.join(" ");
}

let allLetters=[];
for(i=97;i<=122;i++){
    allLetters.push(String.fromCharCode(i));
}