let n = 3443342244;
let d = 4;

function counter(n,d){
    let cnt = 0;
    while(n>0){
        let onethdigit = n%10;
        if(onethdigit == d) cnt++;
        n = Math.floor(n/10);
    }
    return cnt;
}

console.log(counter(n,d));