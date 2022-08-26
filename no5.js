function getSplitName(personName){ 
    if (typeof personName !="string"){ 
        return " ERROR" 
    } 
    let doni = personName.split(" ") 
    const mananta ={ 
      firstName : null, 
      middleName : null, 
      lastName: null, 
    } 
    if (doni.length === 3){ 
        mananta.firstName = doni [0]; 
        mananta.middleName = doni [1]; 
        mananta.lastName = doni [2]; 
        return mananta 
     } if (doni.length === 2){ 
        mananta.firstName = doni [0]; 
        mananta.lastName = doni [1]; 
        return mananta 
    } if (doni.length === 1){ 
        mananta.firstName = doni [0]; 
        return mananta 
    }  
    else { 
        return " ERROR : nama harus mengandung tiga kata " 
    } 
} 
 
console.log(getSplitName("Aldi Daniela Pranata")) 
console.log(getSplitName("Dwi Kuncoro")) 
console.log(getSplitName("Aurora")) 
console.log(getSplitName("Aurora Aureliya Sukma Darma")) 
console.log(getSplitName(0))