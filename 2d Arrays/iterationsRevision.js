let a = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 10],
];

let rows = a.length;
let cols = a[0].length;

// 1 2 3 4 4 5 6 7 7 8 9 10
let s = "";

for(let row = 0;row<rows;row++){
    for(let col = cols-1;col>=0;col--){
        s+=a[row][col]+" ";
    }
}
console.log(s);
