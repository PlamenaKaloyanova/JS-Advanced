function wordsUppercase(words){

return words
.match(/[A-z0-9]+/g)
.join(", ")
.toUpperCase();

}
