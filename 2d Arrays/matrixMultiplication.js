let a = [
    [1, 2, 3],
    [4, 5, 6],
];
let b = [
    [1, 2],
    [3, 4],
    [5, 6],
];

let r1 = a.length;
let c1 = a[0].length;

let r2 = b.length;
let c2 = b[0].length;

let ans = [];

for(let i = 0;i<r1;i++){
    let row = [];
    for(let j = 0;j<c2;j++){
        row.push(0);
    }
    ans.push(row);
}

// console.log(ans);

for(let i = 0;i<r1;i++){
    for(let j =0;j<c2;j++){
        let thisPlaceValue = 0;
        for(let k =0;k<c1;k++){
            thisPlaceValue += a[i][k] * b[k][j];
        }
        ans[i][j] = thisPlaceValue;
    }
}

console.log(ans);