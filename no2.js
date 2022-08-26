// Soal No.2

function checkTypeNumber(num){ 
    if(typeof(num)== 'number') {

        if((num % 2) == 0){ 
            return "genap"; 
        }else{ 
            return "ganjil"; 
        } 
    } 
    if(typeof(num)==='undefined'){ 
        return 'Error : Bro where is the parameter?' 
    }else{ 
        return 'Error : Invalid data type' 
    } 
} 
console.log (checkTypeNumber(10)) 
console.log (checkTypeNumber(3))
console.log(checkTypeNumber("5"));  
console.log(checkTypeNumber({}));  
console.log(checkTypeNumber([]));  
console.log(checkTypeNumber());
