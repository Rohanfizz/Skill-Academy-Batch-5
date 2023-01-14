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
let a = [4,3,2,1,9];
let b = [1,2,3,4,9];

let ans = [];
let carry = 0;

a= reverse(a,0,a.length-1);
b= reverse(b,0,b.length-1);
let i = 0;
while(i<a.length || i<b.length || carry>0){
    let x = 0;
    let y = 0;
    if(i<a.length) x = a[i];
    if(i<b.length) y = b[i];

    let sum = x+y+carry;
    carry = Math.floor(sum/10);
    sum = sum%10;
    ans.push(sum);
    i++;
}
ans = reverse(ans,0,ans.length-1);
console.log(ans);