    
    const array = [9,4,7,7,4,3,2,2,8];
    
    let angkaTerbesar = array[0];
    let terbesarKedua = 0;
    
    for(let i = 1; i < array.length; i++) {
        if(array[i] > angkaTerbesar) {
        terbesarKedua = angkaTerbesar;
        angkaTerbesar = array[i];  
        }
      if (array[i] !== angkaTerbesar && array[i] > terbesarKedua) {
      terbesarKedua = array[i];
      }
    };

console.log("Angka Terbesarnya adalah " + angkaTerbesar);
console.log("Angka Terbesar Kedua adalah " + terbesarKedua);