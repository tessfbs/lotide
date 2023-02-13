//index.js

const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const letterPositions =  require('./letterPositions')
const map =  require('./map')
const obfuscate_password = require('./obfuscate_password')
const takeUntil = require('./takeUntil')
const without = require('./without')
// const flatten = require('./flatten')

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  obfuscate_password: obfuscate_password,
  takeUntil: takeUntil,
  without: without
  // flatten: flatten,
};

