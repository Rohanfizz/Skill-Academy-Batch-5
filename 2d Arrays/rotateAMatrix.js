let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// 1st = take the transpose of the matrix

for(let i = 0;i<a.length;i++){
    for(let j = i;j<a.length;j++){
        let temp = a[i][j];
        a[i][j] = a[j][i];
        a[j][i] = temp;
    }
}

for(let i = 0;i<a.length;i++){
    let l = 0,r = a.length-1;
    while(l<r){
        let temp = a[i][l];
        a[i][l] = a[i][r];
        a[i][r] = temp;
        l++,r--;
    }
}

console.log(a);

