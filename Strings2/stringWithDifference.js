let s = "abdcdVDed";

let ans = [];

for(let i = 0;i<s.length;i++){
    let cc = s[i];
    ans.push(cc);
    if(i+1<s.length){
        let nc = s[i+1];
        let diff = nc.charCodeAt() - cc.charCodeAt();
        ans.push(diff);
    }
}
console.log(ans.join(''));

