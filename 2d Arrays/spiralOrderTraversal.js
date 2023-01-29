// let a = [
//     [71, 2, 3, 4, 5, 6, 7, 83],
//     [14, 2, 3, 4, 52, 64, 7, 28],
//     [11, 24, 3, 43, 5, 6, 78, 8],
//     [1, 2, 35, 4, 5, 6, 77, 48],
//     [1, 22, 33, 4, 5, 6, 7, 38],
// ];
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let rows = a.length;
let cols = a[0].length;

let tw = 0,
    bw = rows - 1,
    lw = 0,
    rw = cols - 1;

let total = rows * cols;

while (total > 0) {
    for (let j = lw; j <= rw && total > 0; j++) {
        console.log(a[tw][j]);
        total--;
    }
    tw++;
    for (let i = tw; i <= bw && total > 0; i++) {
        console.log(a[i][rw]);
        total--;
    }
    rw--;
    for (let j = rw; j >= lw && total > 0; j--) {
        console.log(a[bw][j]);
        total--;
    }
    bw--;
    for (let i = bw; i >= tw && total > 0; i--) {
        console.log(a[i][lw]);
        total--;
    }
    lw++;
}
