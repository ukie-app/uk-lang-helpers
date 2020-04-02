    /*
      cases when both neighbors are vowels
      currChar attaches to nextChar (vowel on the right)

      e.g. кни-га
    */






    // if (consonants.includes(currChar)) {
    //   // check which kind of consonant

    //   /*
    //     if there is one consonant between
    //     2 vowels, it belongs to the next syllable

    //     e.g о-сі
    //   */
      
    //   if (currChar !== prevChar) {
    //     if ((numOfVowelsInARow > 0) && (vowels.includes(nextChar))) {
    //       console.log("consonant between 2 vowels")
    //       if (charNum !== 0) {
    //         outWord += '-'
    //       }
          
    //       outWord += currChar
    //     }

    //     // currChar is sonorant consonant
    //     else if (sonorantConsonantSounds.includes(currChar)) {
    //       console.log("currChar is sonorant")
    //       // nextChar is sonorant consonant too
    //       if (sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is sonorant")
    //         // separate them into syllables
    //         outWord += currChar
    //         outWord += '-'
    //       }
    //       // nextChar is not sonorant
    //       else if (!sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is not sonorant")
    //         // keep them together
    //         // outWord += '-'
    //         outWord += currChar
    //       }
    //     }
        
    //     // currChar is not sonorant
    //     else {
    //       console.log("currChar is not sonorant")

    //       /* 
    //       handle cases of non-breaking syllables
    //       дз, дж which stand for one sound

    //       e.g. пе-ре-дзвін
    //       */
    //       if (((currChar === 'з') || (currChar === 'ж')) &&
    //         (prevChar === 'д')) {
    //         console.log("encountered дз/дж")
    //         // can't be separated
    //         if (charNum != 0) {
    //           outWord += '-'
    //         }
    //         outWord += currChar
    //       }
        
    //       // nextChar is sonorant
    //       if (sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is sonorant")
    //         // keep them together
    //         if (charNum != 0) {
    //           outWord += '-'
    //         }
    //         outWord += currChar
    //       }

    //       // nextChar is not sonorant
    //       else if (!sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is not sonorant")
    //         if (((voicedConsonantSounds.includes(currChar)) && 
    //           (voicedConsonantSounds.includes(nextChar))) ||
    //           ((voicelessConsonantSounds.includes(currChar)) && 
    //           (voicelessConsonantSounds.includes(nextChar)))) {
    //           console.log("same kind of hushing sounds together")
    //           outWord += currChar
    //         }
    //         else {
    //           if (charNum != 0) {
    //             outWord += '-'
    //           }

    //           outWord += currChar
    //         }
              
    //       }
    //     }
    //   }

    //   /* 
    //     doubled consonants stay together
    //     they get attached to the next vowel
        
    //     e.g. зав-да́-ння, зна-ння, гі-лля, стра-хі́-ття
    //   */
    //   else {
    //     console.log("encountered double consonant")
    //   }
          
    //   numOfVowelsInARow = 0
    //   numOfConsonantsInARow += 1
    // }

    // // currChar is a vowel
    // else {
      
    //   numOfConsonantsInARow = 0
    //   numOfVowelsInARow += 1
    //   outWord += currChar
    // }


    

    // if (consonants.includes(currChar)) {
    //   // check which kind of consonant

    //   /*
    //     if there is one consonant between
    //     2 vowels, it belongs to the next syllable

    //     e.g о-сі
    //   */
      
    //   if (currChar !== prevChar) {
    //     if ((numOfVowelsInARow > 0) && (vowels.includes(nextChar))) {
    //       console.log("consonant between 2 vowels")
    //       if (charNum !== 0) {
    //         outWord += '-'
    //       }
          
    //       outWord += currChar
    //     }

    //     // currChar is sonorant consonant
    //     else if (sonorantConsonantSounds.includes(currChar)) {
    //       console.log("currChar is sonorant")
    //       // nextChar is sonorant consonant too
    //       if (sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is sonorant")
    //         // separate them into syllables
    //         outWord += currChar
    //         outWord += '-'
    //       }
    //       // nextChar is not sonorant
    //       else if (!sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is not sonorant")
    //         // keep them together
    //         // outWord += '-'
    //         outWord += currChar
    //       }
    //     }
        
    //     // currChar is not sonorant
    //     else {
    //       console.log("currChar is not sonorant")

    //       /* 
    //       handle cases of non-breaking syllables
    //       дз, дж which stand for one sound

    //       e.g. пе-ре-дзвін
    //       */
    //       if (((currChar === 'з') || (currChar === 'ж')) &&
    //         (prevChar === 'д')) {
    //         console.log("encountered дз/дж")
    //         // can't be separated
    //         if (charNum != 0) {
    //           outWord += '-'
    //         }
    //         outWord += currChar
    //       }
        
    //       // nextChar is sonorant
    //       if (sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is sonorant")
    //         // keep them together
    //         if (charNum != 0) {
    //           outWord += '-'
    //         }
    //         outWord += currChar
    //       }

    //       // nextChar is not sonorant
    //       else if (!sonorantConsonantSounds.includes(nextChar)) {
    //         console.log("nextChar is not sonorant")
    //         if (((voicedConsonantSounds.includes(currChar)) && 
    //           (voicedConsonantSounds.includes(nextChar))) ||
    //           ((voicelessConsonantSounds.includes(currChar)) && 
    //           (voicelessConsonantSounds.includes(nextChar)))) {
    //           console.log("same kind of hushing sounds together")
    //           outWord += currChar
    //         }
    //         else {
    //           if (charNum != 0) {
    //             outWord += '-'
    //           }

    //           outWord += currChar
    //         }
              
    //       }
    //     }
    //   }

    //   /* 
    //     doubled consonants stay together
    //     they get attached to the next vowel
        
    //     e.g. зав-да́-ння, зна-ння, гі-лля, стра-хі́-ття
    //   */
    //   else {
    //     console.log("encountered double consonant")
    //   }
          
    //   numOfVowelsInARow = 0
    //   numOfConsonantsInARow += 1
    // }

    // // currChar is a vowel
    // else {
      
    //   numOfConsonantsInARow = 0
    //   numOfVowelsInARow += 1
    //   outWord += currChar
    // }
