/* 

  This function is created to split the word by the syllables
  splitting the word like that is useful when learning how to read

  Author: Gabriela Medvetska

  Sources used to create this function:

  http://8next.com/umova/1534-umova_106.html
  https://zno.if.ua/?p=1414


*/

exports.splitTheWordBySyllables = function (word) {
      
  let consonants = ['б', 'в', 'г', 'ґ', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь']
  
  // sonorant consonant sounds
  let sonorantConsonantSounds = ['м', 'й', 'р', 'рь', 'в', 'л', 'ль', 'н', 'нь']

  // voiced consonant sounds
  let voicedConsonantSounds = ['б', 'д', 'дь', 'з', 'зь', 'дз', 'дзь', 'ж', 'дж', 'ґ', 'г']
    
  // voiceless consonant sounds
  let voicelessConsonantSounds = ['х', 'ч', 'ц', 'ць', 'ф', 'к', 'с', 'сь', 'ш', 'п', 'т', 'ть']
  
  let vowels = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я']

  console.log("word", word)

  let prevChar = word[0]
  let currChar = ""
  let nextChar = ""
  let countChars = {}
  let outWord = ""
  let numOfConsonantsInARow = 0
  let numOfVowelsInARow = 0
  let charNum = 0

  for (charNum in word) {

    // console.log("char", word[charNum])

    // if the word has only one vowel, it has only one syllable

    // handle prevChar in the beginning of the word
    if (charNum > 0) {
      prevChar = word[charNum - 1]
    }
    
    // update currChar
    currChar = word[charNum]

    // handle nextChar at the end of the word
    if (charNum < word.length - 1) {
      nextIndex = parseInt(charNum) + 1
      nextChar = word.charAt(nextIndex)
    }
    else {
      nextChar = ""
    }

    console.log()

    console.log("\nprevChar", prevChar, "\ncurrChar", currChar, "\nnextChar", nextChar)

    if (consonants.includes(currChar)) {
      // check which kind of consonant

      /*
        if there is one consonant between
        2 vowels, it belongs to the next syllable

        e.g о-сі
      */
      
      if ((numOfVowelsInARow > 0) && (vowels.includes(nextChar))) {
        outWord += '-'
        console.log("add dash")
      }

      /* 
        handle cases of non-breaking syllables
        дз, дж which stand for one sound

        e.g. пе-ре-дзвін
      */
      else if (currChar === 'д') {
        if ((nextChar === 'з') || (nextChar === 'ж')) {
          console.log("encountered д + ", nextChar)
        }
      }


      /* 
      doubled consonants stay together
      they get attached to the next vowel
      
      e.g. зав-да́-ння, зна-ння, гі-лля, стра-хі́-ття
      */
      else if (currChar === nextChar) {
        console.log("encountered double consonant")
      }


      numOfConsonantsInARow += 1
    }
    // vowel
    else {
      

      numOfVowelsInARow += 1
    }
    outWord += currChar
    // if (consonants.includes(currChar) &&
    //   vowels.includes(prevChar) &&
    //   vowels.includes(nextChar)
    // ) {
    //   outWord += currChar
    // }



    

    // keep track letters and their count
    countChars[word[charNum]] += 1
    console.log("\noutSTR", outWord)
  }

  return outWord
  

}
