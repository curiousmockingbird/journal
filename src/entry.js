export default function Entry(text) {
  this.entry = text;
}

Entry.prototype.wordCounter = function() {
  const toCount = this.entry.split(" ");
  let counter = 0;
  toCount.forEach(function(){
    counter++;
    console.log(counter);
  });
  console.log(toCount);
  return counter;
};

