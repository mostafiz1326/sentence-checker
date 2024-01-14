let input = document.querySelector("input");

let btn1 = document.querySelector(".btn1");

let btn2 = document.querySelector(".btn2");

let ptag1 = document.querySelector(".ptag_vl");

let ptag2 = document.querySelector(".ptag_cl");

const vowels = ["a","e","i","o","u","A","E","I","O","U"];

const consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"]


btn1.onclick = () => {
  function getVowel(sentence) {
    let count1 = 0;
    
    const letters = Array.from(sentence);
    letters.forEach(function machLetters(value, index, array) {
      if (vowels.includes(value)) {
        count1++;
      }
    });
    ptag1.innerHTML = "Vowel : "+ count1;
  }
  getVowel(input.value);
}


btn2.onclick = () => {
  function getConsonant(sentence,value) {
    let count2 = 0;
    
    const letters = Array.from(sentence);
    letters.forEach(function machLetters(value, index, array) {
      if (consonant.includes(value)) {
        count2++;
      }
    });
    ptag2.innerHTML = "Consonant : "+ count2;
  }
  getConsonant(input.value);
}


