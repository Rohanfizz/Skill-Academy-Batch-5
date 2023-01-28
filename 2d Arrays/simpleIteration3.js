let a = [
    [1, 2],
    [4, 5],
    [7, 8],
];


let s = "";

for(let j = a.length-1;j>=0;j--){
    for(let i = 0;i<a.length;i++){
        s +=a[i][j] +" ";
    }
}

console.log(s);