// Rewrite the instructions in your own words

// Write the objectives and the tests

// Write the pseudocode

input = string empty

split string into words make a list

in each word of the phrase get first letter and add it to an empty string that we defined earlier

output = an acronym (all caps).

the first letter of every word

make it all upper case

// paste your JS generated by blockly below here

var Acronym, phrase, word;


Acronym = '';
phrase = window.prompt('write  a phrase');
phrase = phrase.split(' ');
for (var word_index in phrase) {
  word = phrase[word_index];
  Acronym += String(word.charAt(0));
}
window.alert(Acronym.toUpperCase());
