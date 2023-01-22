let arr = [2,3,5];
let n = arr.length;

for(let sp = 0;sp<n;sp++){
    for(let ep = sp;ep<n;ep++){
        let s = "";
        for(let i = sp;i<=ep;i++) s+=""+arr[i];
        console.log(s);
    }
}