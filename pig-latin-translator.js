let userInput = process.argv.slice(2)

    if (userInput.length > 1){
        translateArray()
        
    }else{
        userInput = userInput[0].split(" ")
        translateArray()
    }

function translateArray(){
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
    console.log(translatedUserInput.join(' '))
}

//not needed:

// let letters

// getFirstTwoLetters()

// function getFirstTwoLetters() {
//     letters = userInput.map(i=>({
//     firstLetter: i.charAt(0),
//     secondLetter: i.charAt(1)
//     }))
//     console.log(letters);
// }
