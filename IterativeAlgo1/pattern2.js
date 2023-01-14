let n = 6;
let s = "";

for (let i = 1; i <= n; i++) {
    let stars = i;
    let spaces = n - i;

    while (spaces != 0) {
        s += " ";
        spaces--;
    }

    while (stars != 0) {
        s += "*";
        stars--;
    }
    s += "\n";
}
console.log(s);
// 0 1 1 2
function f(n) {
   if(n<=1) return n;
   return f(n-1) + f(n-2);
}
function inc(n){
    if(n == 0) return;
    inc(n-1);
    console.log(n);
}
console.log(f(3));
console.log(inc(5));
// f(10);
