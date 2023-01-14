let n = 2;

let s = "";
let str= "a\nb";
console.log(str);
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);