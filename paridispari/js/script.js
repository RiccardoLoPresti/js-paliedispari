//***paridispari***

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
const userEvenOdd = document.querySelector('select');
const numberInput = document.querySelector('input');
const btn = document.querySelector('button');



btn.addEventListener('click', function(){
  const numberUser = parseInt((numberInput.value)) ;
  const numberCpu = Math.ceil(Math.random() * 5);

  console.log('numberUser', numberUser);
  console.log('numberCpu', numberCpu);
  
  
  const total = sommaNumber(numberUser, numberCpu);

  sommaNumber(numberUser,numberCpu);
  console.log('questa è la somma', total);

  paridispari(total);

  
 })


 function sommaNumber(n1,n2){
  const somma = n1 + n2;

  return somma;
 }

 function paridispari(number){
  if(number % 2 === 0){
    console.log('numero è pari');

  }else{
    console.log('numero è dispari');
  }
 }
