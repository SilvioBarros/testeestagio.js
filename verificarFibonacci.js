// verifica se um número pertence ou não pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0;
    let b = 1;
    let next;

    if (num === 0 || num === 1) return true;

    while (b <= num) {
        next = a + b;
        a = b;
        b = next;
        
        if (b === num) return true;
    }

    return false;
}

let num = 21; // definindo o número a ser verificado
if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}
