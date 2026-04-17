let userInput = process.argv.slice(2)
// let letters
console.log(userInput);
// getFirstTwoLetters()


// function getFirstTwoLetters() {
//     letters = userInput.map(i=>({
//     firstLetter: i.charAt(0),
//     secondLetter: i.charAt(1)
//     }))
//     console.log(letters);
// }
// const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t","v", "w", "x", "y", "z"]
// const vowels = ["a", "e", "i", "o", "u"]

const translatedUserInput = userInput.map(word => {   
    if (word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u")){
        return word=word+"way"
    } else {
        if (word.charAt(1) == "a" || word.charAt(1) == "e" || word.charAt(1) == "i" || word.charAt(1) == "o" || word.charAt(1) == "u"){
        return word=word.slice(1)+word.charAt(0)+"ay"
        } else{
            return word=word.slice(2)+word.charAt(0)+word.charAt(1)+"ay"
        }
    }})
console.log(translatedUserInput);

 

// userInput.forEach(word => {   
//     if (word.startsWith(consonant) && word.startsWith(vowel)){
//         word=word.slice(1)+word.charAt(0)+"ay"
//         console.log(word);
//     } else if (word.charAt(0) == "t" && word.charAt(1) =="h"){
//         word=word.slice(2)+word.charAt(0)+word.charAt(1)+"ay"
//         console.log(word);
//     } else{
//         word=word+"way"
//         console.log(word);
//     }
// });


// vowelsInput.find((letter)=>{
    
// })
// if (firstLetter = c && secondLetter = v){
//     userInput[i] = userInput[i].slice(2)+"ay"
// }


// if (typeof(userInput)!= "string"){
//     console.log("Please make sure you give me some input");
// } else{
//     translate(userInput)
// }

// function translate(){
//     userInput.forEach(i => {
//         if(userInput[i].charAt(0) = && userSelection[i].charAt(0)){
            
//         } else if () {
            
//         } else if() {

//         } else {
            
//         }
//     });
// }