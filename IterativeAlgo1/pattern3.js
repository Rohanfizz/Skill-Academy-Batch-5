let n =17;
let stars = 1;
let spaces = Math.floor(n/2);
let s = "";

for(let i = 1;i<=n;i++){
    for(let j = 1;j<=spaces;j++){
        s+=" ";
    }
    for(let j = 1;j<=stars;j++){
        s+="*";
    }
    s+="\n";

    if(i<=Math.floor(n/2)){
        stars+=2;
        spaces--;
    }else{
        stars-=2;
        spaces++;
    }
}
console.log(s);