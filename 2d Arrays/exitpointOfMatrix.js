let arr= [
    [0,0,0,0,1,0,0,0],
    [0,0,1,0,0,1,0,1],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,0,0],
    [0,1,0,0,0,0,0,0],
]

let i = 0,j = 0;
let cd = 0;
let di = [0,1,0,-1];
let dj = [1,0,-1,0];

while(i<arr.length && j<arr[0].length && i>=0 && j>=0){
    if(arr[i][j] == 1){
        // we need to do something
        arr[i][j] = 0;
        cd = (cd+1)%4;
    }
    // we move in the direction
    i += di[cd];
    j += dj[cd];
}

i-=di[cd];
j-=dj[cd];

console.log(i,j);



