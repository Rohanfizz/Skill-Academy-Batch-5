let arr = [3, 4, 14, 23, 9, 18];
let total = 0;
for (let i = 0; i < arr.length; i++) total += arr[i];

for (let i = 0; i < arr.length; i++) {
    arr[i] = total - arr[i];
}
console.log(arr);
