function f(n){
    console.log(n);
    f(n-1);
    if(n==0) return;
    console.log(n);
}

function printer(){
    console.log("asdasdsad");
    
}
// printer();
// printer();
// printer();
f(5);
