let arr = [5,2,-10,3,4,2,-1,5,5,-4,-7,2];
let n = arr.length;

let maxSumSubarraySum = 0;
let maxSumSubarraySp = 0;
let maxSumSubarrayEp = 0;

for(let sp = 0;sp<n;sp++){
    for(let ep = sp;ep<n;ep++){
        let sumOfThisSubarray = 0;
        for(let i = sp;i<=ep;i++) sumOfThisSubarray += arr[i];
        if(sumOfThisSubarray > maxSumSubarraySum){
            maxSumSubarraySum = sumOfThisSubarray;
            maxSumSubarraySp = sp;
            maxSumSubarrayEp = ep;
        }
    }
}

let s = "";
for(let i = maxSumSubarraySp;i<=maxSumSubarrayEp;i++){
    s += arr[i] +" ";
}
console.log(s);