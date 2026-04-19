//array mit alphabet und nummern, dann über index?
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let userInput = process.argv.slice(2)
const inputPhrase = userInput[0]
const shiftNumber = userInput[1]
console.log(userInput);
console.log(inputPhrase);
console.log(shiftNumber);
let newAlphabet
let newLetter
const newArray = inputPhrase.toLowerCase().split("")
console.log(newArray);


    if (userInput.length > 2){
        
        console.log("Please write your sentence in double quotes and then give only one number afterwards otherwise I cannot translate for you, sorry.");
        
    }else{
        decode()
        translate()
    }
        

function decode(){
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
        console.log(newAlphabet);

        
        //     letter = letter[]
        // newletter : alphabet.find(i => {
        //     console.log("i is:", i);
        //     i.number = shiftNumber})}))
        // console.log(codingMatrix);
    }

function translate() {
    //string in array verwandeln, für jedes ding in der array den alten durhc den neuen buchstaben ersetzen
    const translatedArray = newArray.map(i=>{
        if (i == " ") {           
            return i
        } else {
            console.log(i);
            let helper2 = newAlphabet.find (f=>f.letter == i)

            console.log(helper2);
            
            return helper2.newLetter
            
            //i = buchstabe aus phrase
            //der muss gemapped werden zum neuen buchstaben aus dem new Alphabet
            //return newAlphabet newletter wo newAlphabet.letter = i
            // if (i == newAlphabet.letter){
            //     return 
            // }
            // return newAlphabet.newLetter
            
        }
    })
    console.log(translatedArray)
}
    


// function translate(){
//         letterNumbercombination.letter = 
//         if userInput
//         if (word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u")){
//             return word=word+"way"
//         } else {
//             if (word.charAt(1) == "a" || word.charAt(1) == "e" || word.charAt(1) == "i" || word.charAt(1) == "o" || word.charAt(1) == "u"){
//             return word=word.slice(1)+word.charAt(0)+"ay"
//             } else{
//                 return word=word.slice(2)+word.charAt(0)+word.charAt(1)+"ay"
//             }
//         }})
//     console.log(translatedUserInput.join(' '))
// }
