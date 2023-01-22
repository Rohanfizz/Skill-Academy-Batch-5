let arr= [20,10,30,40,45,50,60,90,100];

arr.sort(function(a,b){return a-b});

function bsearchCeil(arr,tar){
    let n = arr.length;
    let l = 0;
    let r = n-1;
    let ceil = 0;
    while(l<=r){
        let mid = parseInt((l+r)/2);
        if(arr[mid] <= tar){
            l = mid + 1;
        }else{
            ceil = arr[mid];
            r = mid - 1;
        }
    }
    return ceil;
}
console.log(bsearchCeil(arr,45));