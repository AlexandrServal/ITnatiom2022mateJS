
function getStringLength(input) {
    return input.length
  }

function isSubstring(phrase, part) {
    return phrase.includes(part)
  }

  
function countMs(text) {
    let a = 0;
    for (let i = 0; i <= text.length; i++) {
      if (text[i] === 'm' || text[i] === 'M') {
      a++;
      }
    }
    return a
  }
  
/**
  function removeVowels(doc) {
    let result = '';
    let aeiouy = 'aeiouyAEIOUY';
      for (let i = 0; i < doc.length; i++) {
        for(let j = 0; i < aeiouy.length; j++) {
          if (doc[i] !== aeiouy[j]) {
            result += doc[i];
        }
      }
    }
    console.log(result);
     return result
  }
 
 console.log(removeVowels('document'));
 */

 
function removeVowels(doc) {
    let result = '';
    //let stringa = 'aeiouyAEIOUY';
  
    for (let i = 0; i < doc.length; i++) {
          if (doc[i] !== 'a' && doc[i] !== 'o' && doc[i] !== 'e' && doc[i] !== 'i' 
          && doc[i] !== 'u' && doc[i] !== 'y' && doc[i] !== 'A' && doc[i] !== 'O' 
          && doc[i] !== 'E' && doc[i] !== 'I' && doc[i] !== 'U' && doc[i] !== 'Y') 
          {
            result += doc[i];
            }
    }
    return result
  }

  function makeAbbr(words) {
    let abbreviation = words[0];
    console.log(abbreviation);
    for (let i = 0; i <= words.length; i++){
      if (words[i] === ' ') {
        abbreviation += words[i+1];
        }
    }
    //abbreviation.toUpperCase();
    console.log(abbreviation.toUpperCase());
    return abbreviation.toUpperCase()
  }

  
function decryptMessage(message) {
    let result = '';
    console.log(result);
      for (let i = message.length - 1; i >= 0; i--) {
          result += message[i];
    }
    console.log(result);
    return result
  }
  
  