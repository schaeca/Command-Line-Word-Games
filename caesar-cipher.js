//array mit alphabet und nummern, dann über index?
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let userInput = process.argv.slice(2)
const inputPhrase = userInput[0]
const shiftNumber = userInput[1]
let newAlphabet
let newLetter
const newArray = inputPhrase.toLowerCase().split("")

    if (userInput.length > 2){
        
        console.log("Please write your sentence in double quotes and then give only one number afterwards otherwise I cannot translate for you, sorry.");
        
    }else{
        encode()
        translate()
    }
        

function encode(){
    newAlphabet = alphabet.map((letter, index) => { 
            let newIndex
            if (index+Number(shiftNumber) <= 25){
                newIndex = index + Number(shiftNumber)
            } else{
                newIndex = index - 26 + Number(shiftNumber)
            }
            newLetter = alphabet[newIndex]
            return {letter, newLetter}
        })
        
    }

function translate() {
    //string in array verwandeln, für jedes ding in der array den alten durhc den neuen buchstaben ersetzen
    const translatedArray = newArray.map(i=>{
        if (i == " ") {           
            return i
        } else {
            let helper2 = newAlphabet.find (f=>f.letter == i)
            return helper2.newLetter            
        }
    })
    console.log(translatedArray.join(""))
}

