const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let generatePassword = document.getElementById("generate-password")

// 1st time.
// generatePassword.addEventListener("click", function() {
//     password1.textContent = ""
//     password2.textContent = ""
//     for (i = 1; i < 16; i++) {
//         let passwordLeft = Math.floor( Math.random() * characters.length )
//         let passwordRight = Math.floor( Math.random() * characters.length )
//         password1.textContent += characters[passwordLeft]
//         password2.textContent += characters[passwordRight]
//     }
// })

// 2nd time more efficient code.
generatePassword.addEventListener("click", function() {
    let pass1 = ""
    let pass2 = ""
    for (i = 0; i < 15; i++) {
        pass1 += characters[Math.floor( Math.random() * characters.length )]
        pass2 += characters[Math.floor( Math.random() * characters.length )]
    }
    password1.textContent = pass1
    password2.textContent = pass2
})
