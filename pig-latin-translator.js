let userInput = process.argv.slice(2)
let firstLetter
let secondLetter
const vowels = ["a", "e", "i", "o", "u"]
console.log(userInput);
[
    {firstLetter: "t", secondletter:"e"},
    {firstLetter: "t", secondletter: "h"}
]

const firstLetters = userInput.map(i=>{
    return i.charAt(0)
})

const secondLetters = userInput.map(i=>{
    return i.charAt(1)
})
console.log(firstLetters);
console.log(secondLetters);



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