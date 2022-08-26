function checkEmail(email) { 
    if (typeof email !='string'){ 
        return 'ERROR' 
    } 
    let aldiansyah = email.match(/^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.(com|co.id|id)$/g) 
    if (aldiansyah){ 
        return 'VALID' 
    } return 'INVALID' 
} 
 
 
console.log(checkEmail('aldiansyah@gmail.co.id')); 
console.log(checkEmail('aldiansyah@gmai.com')); 
console.log(checkEmail('aldiansyah@gmail'));  
console.log(checkEmail('aldiansyah')); 
console.log(checkEmail());