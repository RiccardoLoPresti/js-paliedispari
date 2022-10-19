//***Palindroma***

const input = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('span');

btn.addEventListener('click', function(){
  input.focus();
  paliWord(input);
  input.value = '';
});

function paliWord(inputWord){
  const word = inputWord.value.toLowerCase()

  for(i = 0; i < word.length; i++){
    const userWord = word[i];

    if(userWord !== word[word.length - 1 - i]){
      output.innerHTML = `La tua parola non è palidroma`
      return false;
    }else{
      output.innerHTML = 'La tua parola è palidroma'
      return true;
    }
  }
}