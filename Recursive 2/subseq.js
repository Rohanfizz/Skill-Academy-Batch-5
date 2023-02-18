function f(idx,arr,subseq){
    if(idx == arr.length){
        console.log("("+subseq+")");
        return;
    }
    //include idx
    f(idx+1,arr,subseq+arr[idx]);

    //exclude idx
    f(idx+1,arr,subseq);
}

let arr = [1,2,3];
f(0,arr,"");