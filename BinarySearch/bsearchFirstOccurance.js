let arr= [20,10,30,40,45,45,45,45,50,50,50,60,90,100];

arr.sort(function(a,b){return a-b});

function firstOccurance(arr,tar){
    let n = arr.length;
    let l = 0;
    let r = n-1;
    let temp = -1;
    while(l<=r){
        let mid =parseInt((l+r)/2);
        if(arr[mid] >= tar){
            if(arr[mid] == tar) temp = mid;
            r = mid-1;
        }else l = mid+1;
    }
    return temp;
}
function lastOccurance(arr,tar){
    let n = arr.length;
    let l = 0;
    let r = n-1;
    let temp = -1;
    while(l<=r){
        let mid =parseInt((l+r)/2);
        if(arr[mid] <= tar){
            if(arr[mid] == tar) temp = mid;
            l = mid+1;
        }else r = mid-1;
    }
    return temp;
}
console.log(firstOccurance(arr,45));
console.log(lastOccurance(arr,45));