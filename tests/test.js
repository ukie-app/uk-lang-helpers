const assert = require('assert')
const { splitTheWordIntoSyllables } = require('../index')

const testObj = require('./testObj')

Object.values(testObj.tests).map(testWord => 
  // replace hyphens to try a string
  assert.equal(splitTheWordIntoSyllables(testWord.replace(/-/g, "")), testWord),
)

console.log("Finished running all tests")