let arr= [20,10,30,40,45,50,60,90,100];

arr.sort(function(a,b){return a-b});

function bsearch(arr,tar){
    let n = arr.length;

    let l = 0;
    let r = n-1;
    while(l<=r){
        let mid = parseInt((l+r)/2);
        if(arr[mid] == tar){
            return mid;
        }else if(arr[mid] < tar){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return -1;
}
console.log(bsearch(arr,51));