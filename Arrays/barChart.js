let arr = [3,4,1,2,7,6,2,4,3];
let maxi = 0;
for(let i = 0;i<arr.length;i++){
    if(arr[i]>maxi) maxi = arr[i];
}
let s = "";
for(let i = maxi;i>=1;i--){
    for(let j = 0;j<arr.length;j++){
        if(arr[j]>=i) s+="*";
        else s+=" ";
    }
    s+="\n";
}
console.log(s);