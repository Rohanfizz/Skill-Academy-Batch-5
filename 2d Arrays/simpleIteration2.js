let a = [
    [1, 2, 3],
    [4, 5 ,6],
    [7, 8, 9],
];
let s = "";
for(let i = a.length-1;i>=0;i--){
    for(let j = 0;j<a[i].length;j++){
        s+=a[i][j]+" ";
    }
}
console.log(s);