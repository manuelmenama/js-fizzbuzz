//DATA
const maxNumber = 105;
let finalOutput = null;

//element
const rowOfContainer = document.querySelector('.row');


//contatore che conta fino a cento
for(let i = 1; i <= maxNumber; i++){

  //stampa un quadrato // solo dopo
  //stampa un numero progressivo all'interno // solo dopo
  const cardCreated = document.createElement('div');
  cardCreated.className = 'card';

  
  if(!(i % 3)){
    if((!(i % 3)) && (!(i % 5))){
      finalOutput = "FizzBuzz"
      cardCreated.classList.add('fizzbuzz');
      console.log(finalOutput);
    }else{
      finalOutput = "Fizz"
      cardCreated.classList.add('fizz');
      console.log(finalOutput);
    }
  }else if(!(i % 5)){
    finalOutput = "Buzz"
    cardCreated.classList.add('buzz');
    console.log(finalOutput);
  }else{
    finalOutput = i
  }
  
  cardCreated.innerHTML = finalOutput
  rowOfContainer.append(cardCreated);
}
