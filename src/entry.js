export default function Entry(text) {
  this.entry = text;
  this.entryArray = [this.entry]; //"just" "the" "words"
  this.lettersArray = []; //"j", "u", "s", "t" ...
}

Entry.prototype.wordCounter = function() {
  const toCount = this.entry.split(" ");
  let counter = 0;
  toCount.forEach(function(){
    counter++;
    console.log(counter);
  });
  console.log(toCount);
  this.entryArray = toCount;
  return counter;
};

// Entry.prototype.noPunctuation = function() {
//   let noSpecial = this.entryArray.map(x=>x.replace( /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '' ));
//   return noSpecial;
// };

Entry.prototype.noConst = function() {
  let vowels = this.entryArray.map(x=>x.replace( /[qwrtypsdfghjklzxcvbnm!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '' ));
  console.log(vowels);
  return vowels;
};

Entry.prototype.noVowel = function() {
  let consts = this.entryArray.map(x=>x.replace( /[aeiou!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '' ));
  console.log(consts);
  return consts;
};

// let combinedString = this.entry.split(" ");
// console.log(combinedString);

// for (let i = 0; i <= combinedString.length -1; i++) {
// if (combinedString.toString().includes("e" || "a" || "i" || "o" || "u")) {
//  combinedString.replace(/[aeiou ]/g, '');
// console.log("The text includes vowels");
// } 
// }
// return combinedString;