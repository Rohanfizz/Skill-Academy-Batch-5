let arr = [
    [1, 2, 3, 4],
    [4, 3, 2, 1],
    [5, 6, 7, 8],
    [8, 7, 6, 5],
];
let n = arr.length;
let s = "";
//Iterating through the bottom half
for(let gap = n-1;gap>0;gap--){
    for(let i = gap,j = 0;i<n;i++,j++){
        s+=arr[i][j]+", ";
    }
}
//Iterating through the upper half
for(let gap = 0;gap<n;gap++){
    for(let i = 0,j = gap;j<n;i++,j++){
        s+=arr[i][j]+", ";
    }
}
console.log(s);
