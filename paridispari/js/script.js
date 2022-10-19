//***paridispari***

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
const userEvenOdd = document.querySelector('select');
const numberInput = document.querySelector('#usernumber');
const btn = document.querySelector('button');



btn.addEventListener('click', function(){
  const numberUser = parseInt((numberInput.value)) ;
  const numberCpu = Math.ceil(Math.random() * 5);
  const userChoice = userEvenOdd.value;

  console.log('numberUser', numberUser);
  console.log('numberCpu', numberCpu);
  console.log('userChoice', userChoice);
  
  const total = sommaNumber(numberUser, numberCpu);

  console.log('questa è la somma', total);

  paridispari(total,userChoice,numberCpu);
 })


 function sommaNumber(n1,n2) {
  const somma = n1 + n2;

  return somma;
 }

 function paridispari(number, userSelect, numberPc){
  if(number % 2 === 0 && userSelect === "pari"){
    document.querySelector('h6').innerText = `
      Il numero del pc è ${numberPc}, la somma è ${number} = pari, hai vinto
    `;
    console.log('numero è pari, hai vinto');

  }else if(number % 2 === 0 && userSelect === "dispari"){
    document.querySelector('h6').innerText = `
    Il numero del pc è ${numberPc}, la somma è ${number} = pari, hai perso
  `;
    console.log('numero è pari, hai perso');

  }else if(!(number % 2 === 0) && userSelect === "dispari"){
    document.querySelector('h6').innerText = `
    Il numero del pc è ${numberPc}, la somma è ${number} = dispari, hai vinto
  `;
    console.log('Il numero è dispari, hai vinto');
  }else{
    document.querySelector('h6').innerText = `
    Il numero del pc è ${numberPc}, la somma è ${number} = dispari, hai perso
  `;
    console.log('Il numero è dispari, hai perso');
  }
 }
