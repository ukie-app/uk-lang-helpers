const assert = require('assert')
const { splitTheWordIntoSyllables } = require('../index')

const testObj = require('./testObj')
Object.values(testObj.tests).map((testWord, i) => {
  process.stdout.cursorTo(0)
  process.stdout.write(`Ran ${i} out of ${Object.values(testObj.tests).length - 1} tests \t`)
  // replace hyphens to try a string
  assert.equal(splitTheWordIntoSyllables(testWord.replace(/-/g, ""), "full"), testWord)
})

console.log("\nFinished running all tests")