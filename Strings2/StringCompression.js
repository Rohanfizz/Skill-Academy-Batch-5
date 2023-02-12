let s = "aabbbbccddde";

let ans = [];

let i = 0;
while(i<s.length){
    let j = i+1;
    let cnt = 1;

    while(j<s.length && s[i] == s[j]) j++,cnt++;
    ans.push(s[i]);
    if(cnt>1) ans.push(cnt);
    i = j;
}

console.log( ans.join(''));

