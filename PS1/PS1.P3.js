const function_caller = (str, func) => (func(str));

const break_c = (str) => (str.replace(/c/g, '*c')).split('*');

const num_a = (str) => (obj = {
    "originalString": (str),
    "modifiedString": (str.replace(/a/g, 'A')),
    "numberReplaced": ((str.match(/a/g) || []).length),
    "length": str.length
})





console.log(function_caller('supercalifragilisticexpialidocious', break_c));

console.log(function_caller('supercalifragilisticexpialidocious', num_a));