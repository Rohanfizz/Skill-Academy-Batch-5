function factorial(n) {
    if (n == 1) return 1;
    let prevFact = factorial(n - 1);
    return n * prevFact;
}

console.log(factorial(5));