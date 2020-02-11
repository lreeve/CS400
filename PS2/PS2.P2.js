function* parser(sentence) {
    let words = sentence.split(' ');
    let i = 0;
    while (i<words.length){
        yield words[i];
        i++;
    }
}

var gen = parser( 'All I know is something like a bird within her sang');

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
