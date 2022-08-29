export default function Entry(text) {
  this.entry = text;
}

Entry.prototype.wordCounter = function() {
console.log(this.entry.split(" "));
};

