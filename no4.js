// NO.4

function isValidPassword (email){ 
    if (typeof email!="string"){ 
        return 'ERROR' 
    } 
    let Aldiansyah = email.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/) 
    if (Aldiansyah){ 
        return 'true' 
    } return 'false' 
} 
 
console.log(isValidPassword('Meong2021')) 
console.log(isValidPassword('meong2021')) 
console.log(isValidPassword('@eong')) 
console.log(isValidPassword('Meong2')) 
console.log(isValidPassword(0)) 
console.log(isValidPassword()) 