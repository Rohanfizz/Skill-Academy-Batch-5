function reverse(a,sp,ep){
    let i = sp;
    let j = ep;

    while(i<j){
        let temp = a[i];
        a[i]= a[j];
        a[j]= temp;
        i++,j--;
    }
    return a;
}
let a = [1,2,3,4,5,6];
let k = 3;
// rev last k ele
let n= a.length;
console.log(a);
a = reverse(a,n-k,n-1);
console.log(a);
a = reverse(a,0,n-k-1);
console.log(a);
a = reverse(a,0,n-1);
console.log(a);