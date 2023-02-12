function firstOccur(arr,idx,tar){
    if(arr[idx] == tar) return idx;
    // i am not equal to target
    let ans = firstOccur(arr,idx+1,tar);
    return ans;
}
let arr = [1,3,4,5,3,6,7,6];
console.log(firstOccur(arr,0,6));