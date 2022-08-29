Describe: Entry()
Test: It should store the words for the entry.
Code: Entry("text");
Expected Output: entry: {"text"}

Describe: Entry.prototype.wordCounter()
Test 1: It should turn a sentence into an array, with each word (separated by spaces) as its own entry in the array.
Code:
const entry = new Entry("Hey you guys!");
entry.wordCounter();
Expected Output: {entry: "hey", "you", "guys"}

Test 2: It should return how many words there are in the sentence array.
Code:
const entry = new Entry("Hey you guys!");
entry.wordCounter();
Expected Output:
{entry: "hey", "you", "guys"}
3