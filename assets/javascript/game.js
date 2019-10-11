let wins = 0;
let wrongGuesses = [];
let newArray=[];
let totalChances = 0;
let vocab= "";
let Players=["Kobe", "Jordan", "Harden", "Duncan", "Curry", "Durant","Murray", "Joker","Derozan","Lillard","Davis","Green","Leonard","James","Antetokounmpo","Bird","Thompson"]

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
    totalChances = 10;
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

document.onkeyup=function(recordGuess){
    newMessage.textContent = ""
    //test if one of 26 letters, case insensitive
    if(allLetters.includes(recordGuess.key.toLowerCase())){
        //tests if letter is in the word
        if(vocab.toLowerCase().includes(recordGuess.key.toLowerCase())){
            //tests if already guessed
            if(displayArray.includes(recordGuess.key.toLowerCase()) || displayArray.includes(recordGuess.key.toUpperCase())){
                userGuess.textContent = wrongGuesses.join("");
                newMessage.textContent = "You already guessed this one!";
            } else {
            //Reveal letters
            displayArray = newArray.map(function(entry){
                for(i=0;i<vocab.length;i++){
                if (entry.letter.toLowerCase()===recordGuess.key.toLowerCase()) {
                entry.display = entry.letter;
                
                } else {entry.display}
                }
                return entry.display;
            });
            }
            Word.textContent=displayArray.join(" ");
            if(displayArray.join("")===vocab){
                      //if to see if all revealed
        
            wins++;
            totalWins.textContent=wins;
            newGame();
            }
        
     
        //if the letter is not in the word :  
        } else {
            // checks first if it was previously guessed 
            if(wrongGuesses.includes(recordGuess.key.toLowerCase())){
                userGuess.textContent = wrongGuesses.join("");
                newMessage.textContent = "You already guessed one!";
            // if a new wrong guess, chances go down
            } else { 
                totalChances--;
                // checks whether you are out of guesses
                if(totalChances===0){
                    newGame();
                // if there are some guesses left, the guess is recorded    
                } else {
                    wrongGuesses.push(recordGuess.key);
                    wrongGuesses.push(" ");
                    userGuess.textContent = wrongGuesses.join("");
                    chancesLeft.textContent= totalChances;
                }
            }
        }
    }else{
        userGuess.textContent = wrongGuesses.join("");
        newMessage.textContent = "Not a letter";
    }
}      
    
function counter(entry,interval){
    if (interval<0) entry-=interval;
    else {if (interval>=0) entry+=interval};  

}
