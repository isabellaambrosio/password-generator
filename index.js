const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.querySelector("button")
let passwordOne = document.querySelector("#password-one")
let passwordTwo = document.querySelector("#password-two")

//Generate Password
button.addEventListener("click", function() {
    let pwd1 = ""
    let pwd2 = ""
    
    for (let i = 0; i < 15; i++) {
                
        let randomIndexOne = Math.floor( Math.random() * characters.length )
        let randomIndexTwo = Math.floor( Math.random() * characters.length )
        
        pwd1 += characters[randomIndexOne]
        pwd2 += characters[randomIndexTwo]        
    }

    passwordOne.textContent = pwd1
    passwordTwo.textContent = pwd2
})



//Copy to Clipboard
passwordOne.addEventListener("click", function () {
    const originalText = passwordOne.textContent
    navigator.clipboard.writeText(originalText)

    passwordOne.textContent = "Copied!"
    setTimeout(() => {
        passwordOne.textContent = originalText
    }, 1000)
})

passwordTwo.addEventListener("click", function () {
    const originalText = passwordTwo.textContent
    navigator.clipboard.writeText(originalText)

    passwordTwo.textContent = "Copied!"
    setTimeout(() => {
        passwordTwo.textContent = originalText
    }, 1000)
})
