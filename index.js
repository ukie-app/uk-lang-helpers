/* 

  This function is created to split the word into syllables
  splitting the word like that is useful when learning how to read
  although it has numerous applications in linguistic analysis

  Author: Gabriela Medvetska

  Sources used to create this function:

  https://edera.gitbook.io/ed-era-book-ukr/fonetika_grafka_orfoepya/sklad_skladopodl
  https://uk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BB%D0%B0%D0%B4_(%D0%BC%D0%BE%D0%B2%D0%BE%D0%B7%D0%BD%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D0%BE)


*/

exports.splitTheWordIntoSyllables = function (word, typeOfDebug = "none") {

  function log(message, arg, type="all") {
    if (typeOfDebug === "full") { 
      console.log(message, arg)
    }
    else if(typeOfDebug === "syllables") {
      if (type === "syllables") {
        console.log(message, arg)
      }
    }
  }


  const vowels = ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я"]

  const consonants = ["б", "в", "г", "ґ", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ", "ь"]

  // sonorant consonant sounds
  const sonorantConsonantSounds = ["м", "й", "р", "рь", "в", "л", "ль", "н", "нь"]

  // voiced consonant sounds
  const voicedConsonantSounds = ["б", "д", "дь", "з", "зь", "дз", "дзь", "ж", "дж", "ґ", "г"]
    
  // voiceless consonant sounds
  const voicelessConsonantSounds = ["х", "ч", "ц", "ць", "ф", "к", "с", "сь", "ш", "п", "т", "ть"]
  
  log("word", word)

  // initialize variables
  let prevChar = ""
  let currChar = ""
  let nextChar = ""
  let currSyllable = ""

  let numOfSyllables = 0
  let remainingNumOfSyllables = 0
  
  // store syllables in an array
  let syllables = []

  /*
    count number of vowels in this word
    in order to know how many syllables
    it should contain
  */
  for (let char of word) {
    for (let vowel of vowels) {
      if (char === vowel) {
        numOfSyllables += 1
      }
    }
  }

  /*
    count number of vowels in a syllable
    in order to know if it can be split or not
  */
  const containsVowel = (syllableToCheck) => {
    let containsVowel = false

    for (let char of syllableToCheck) {
      if (vowels.includes(char)) {
        containsVowel = true
        return containsVowel
      }
    }

    return containsVowel
  }

  
  const decideWhetherToFormNewSyllable = (currSyllable, currChar) => {
    // calculate how many syllables remain after this one will be created
    remainingNumOfSyllables = numOfSyllables - syllables.length - 1 

    // if at least one will remain, it's safe to create it
    if (remainingNumOfSyllables > 0) {
      log("contains vowel?", containsVowel(currSyllable))
      // if there is a vowel in the current syllable, it's safe to create a new one
      if (containsVowel(currSyllable)) {
        log("form, syllables remaining:", remainingNumOfSyllables)
        syllables.push(currSyllable)
        currSyllable = currChar
      }
      // if there is no vowel, current syllable cannot exist
      // therefore a new syllable cannot be formed
      else {
        log("do not form, no vowels in the previous syllable")
        currSyllable += currChar
      }
    }
    // potential new syllable won't have any vowels
    // it cannot exist
    else {
      log("do not form, no more vowels in the next syllable")
      currSyllable += currChar
    }
    
    return currSyllable
  }

  log("THERE SHOULD BE", numOfSyllables, "SYLLABLE(S)")

  for (let charNum = 0; charNum < word.length; charNum++) {

    // append soft sign without any processing
    if (word[charNum] === "ь") {
      currSyllable += word[charNum]
    }

    // handle prevChar only after we are past 1st character
    if (charNum > 0) {
      // assing prevChar to the previous neighbor
      prevChar = word[charNum - 1]
      // if it's soft sign
      // assign prevChar to the previous previous neighbor
      if (prevChar === "ь") {
        // check for beggining of the string
        if (charNum > 1) {
          prevChar = word[charNum - 2]
        }
        else {
          prevChar = ""
        }
      }
    }
    
    // update currChar
    currChar = word[charNum]

    // update nextChar only if the string is not overflown
    // (before its end)
    if (charNum < word.length - 1) {
      // assing nextChar to the next neighbor
      nextChar = word[charNum + 1]
      // if it's soft sign
      // assign nextChar to the next next neighbor
      if (nextChar === "ь") {
        // check for the end of the string
        if (charNum < word.length - 2) {
          nextChar = word[charNum + 2]
        }
        else {
          nextChar = ""
        }
      }
    }
    else {
      nextChar = ""
    }

    log("\nprevChar", prevChar)
    log("currChar", currChar)
    log("nextChar", nextChar)

    // first char or last char in the string
    // (except soft sign)
    // just gets added automatically
    // if ((charNum === 0) || (charNum === word.length - 1) && (currChar !== "ь")) {
    //   log("add first/last letter:", currChar)
    //   currSyllable += currChar
    // }

    // the rest of the string
    
      
      // if currChar is a vowel
      if (vowels.includes(currChar)) {
        // if the previous char is a vowel and the next is a consonant
        if ((vowels.includes(prevChar)) ) {
          // form a new syllable
          log("decide whether to form a new syllable with", currChar)
          currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          
        }
        else {
          // just add to the current syllable
          log("add to the current syllable letter:", currChar)
          currSyllable += currChar
        }
        
      }

      // current character is a consonant
      else {
        // proceed if currChar is not soft sign
        if (currChar !== "ь") {
        
          // case: 1 both neighbors are vowels
          if (vowels.includes(prevChar) && vowels.includes(nextChar)) {
            // this consonant belongs to the next syllable
            log("case 1, decide whether to form a new syllable with", currChar)
            currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          }

          else if (sonorantConsonantSounds.includes(prevChar)) {
            log("case 2, decide whether to form a new syllable with", currChar)
            currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          }

          // // case 2: it's sonorant and its previous neighbor is sonorant as well
          // else if (sonorantConsonantSounds.includes(currChar) && sonorantConsonantSounds.includes(prevChar)) {
          //   log("case 2, decide whether to form a new syllable with", currChar)
          //   currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          // }
          
          // case 3: it's voiced and its previous neighbor is voiceless
          else if (voicelessConsonantSounds.includes(currChar) && voicedConsonantSounds.includes(prevChar)) {
            log("case 3, decide whether to form a new syllable with", currChar)
            currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          }
            
          // case 4: the next consonant neighbor is the same type (voiced or voiceless)
          else if ((voicedConsonantSounds.includes(currChar) && voicedConsonantSounds.includes(nextChar)) ||
            ((voicelessConsonantSounds.includes(currChar) && voicelessConsonantSounds.includes(nextChar)))) {
            log("case 4, decide whether to form a new syllable with", currChar)
            currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          }
            
          // case 5: it's voiced or voiceless consonant (not sonorant) and its next neighbor is sonorant
          else if (!sonorantConsonantSounds.includes(currChar) && sonorantConsonantSounds.includes(nextChar)) {
            log("case 5, decide whether to form a new syllable with", currChar)
            currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          }
            
          // case 6: its next neighbor is the same letter (doubling of consonants) 
          else if (currChar === nextChar) {
            log("case 5, decide whether to form a new syllable with", currChar)
            currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          }
          
          // extra
          // case 7: it's voiced or voiceless consonant (not sonorant) and its previous neighbor is sonorant
          else if (!sonorantConsonantSounds.includes(currChar) && sonorantConsonantSounds.includes(prevChar)) {
            log("case 7, decide whether to form a new syllable with", currChar)
            currSyllable = decideWhetherToFormNewSyllable(currSyllable, currChar)
          }
            
          else {
            log("add to the current syllable letter:", currChar)
            currSyllable += currChar
          }
        }
      }
    

    log("\ncurrSyllable", currSyllable)

    // save the last syllable
    if (charNum === word.length - 1) {
      syllables.push(currSyllable)
    }

  }

  log("\nsyllables list:", syllables, "syllables")

  // combine the list of syllables into one string separated by hyphens
  return syllables.join("-")

}
