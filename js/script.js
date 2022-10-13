//DATA
const maxNumber = 100;
let finalOutput = null;


//contatore che conta fino a cento
for(let i = 1; i <= maxNumber; i++){

  //stampa un quadrato // solo dopo
  //stampa un numero progressivo all'interno // solo dopo

  if(!(i % 3)){
    if((!(i % 3)) && (!(i % 5))){
      finalOutput = "FizzBuzz" 
      console.log(finalOutput);
    }else{
      finalOutput = "Fizz"
      console.log(finalOutput);
    }
  }else if(!(i % 5)){
    finalOutput = "Buzz"
    console.log(finalOutput);
  }else{
    console.log(i);
  }
  
}
