function changeWord( selectedText, changedText, text) { 
    return text.split(selectedText).join(changedText);
    
};

let kalimat1 ='Andini sangat mencintai kamu selamanya'; 
let kalimat2 ='Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'; 

console.log(changeWord('mencintai','tidak menyukai',kalimat1));
console.log(changeWord('cintaku','sayangku',kalimat2));