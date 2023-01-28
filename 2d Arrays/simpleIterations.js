let a = [
    [1, 2, 3],
    [4, 5 ,6],
    [7, 8, 9],
];
let s = "";
for(let i=0;i<a.length;i++){
    for(let j = 0;j<a[i].length;j++){
        s+=a[i][j]+" ";
    }
}
console.log(s);