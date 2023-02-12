function fiboIterative(n) {
    let prev = 0;
    let curr = 1;
    while (n > 1) {
        // console.log(curr);
        let temp = curr;
        curr = prev + curr;
        prev = temp;
        n--;
    }
    return curr;
}

function fiboRecur(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let im1 = fiboRecur(n - 1);
    let im2 = fiboRecur(n - 2);
    return im1 + im2;
}
// 0 1 1 2 3 5
// 0 1 2 3 4 5
// console.log(fiboIterative(5));
console.log(fiboRecur(10));
