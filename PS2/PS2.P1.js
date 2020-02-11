function* fib() {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* even_fibs() {
    var fibs = fib();
    while (true) {
        let val = fibs.next().value;
        if (val % 2 === 0){
            yield val;
        }
    }

}

var gen = even_fibs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);