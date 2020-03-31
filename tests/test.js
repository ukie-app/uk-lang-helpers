const {splitTheWordBySyllables} = require('../index')


const outWord = splitTheWordBySyllables("осінь")

if (typeof outWord !== "undefined") {
  console.log("\nfinalSTR", outWord)
}