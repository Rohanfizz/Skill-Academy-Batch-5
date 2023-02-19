function printPaths(i,j,psf,di,dj){ 
    if(i>di || j>dj) return;
    if(i == di && j == dj){
        console.log(psf);
        return;
    }
    //if we try to go in horizontal direction
    printPaths(i,j+1,psf+"h",di,dj);
    //if we try to go in vertical direction
    printPaths(i+1,j,psf+"v",di,dj);
}
// printPaths(1,1,"",100,100);

function totalSum(arr,idx){
    if(idx == arr.length) return 0;
    let sum = totalSum(arr,idx+1);
    return arr[idx]+sum;
}

// console.log(totalSum([1,2,3,4,5],0));
function stairPaths(currStair,psf,destStair){
    if(currStair>destStair) return;
    if(currStair == destStair){
        console.log(psf);
        return;
    }
    stairPaths(currStair+1,psf+1,destStair);
    stairPaths(currStair+2,psf+2,destStair);
    stairPaths(currStair+3,psf+3,destStair);
}

function printDenominations(currSum,psf,destSum,coins){
    if(currSum > destSum) return;
    if(currSum==destSum){
        console.log(psf);
        return;
    }

    for(let coin of coins){
        printDenominations(currSum+coin,psf+coin+", ",destSum,coins);
    }
}

function printDenominations2(idx,sum,psf,destSum,arr){
    if(sum>destSum) return;
    if(sum == destSum){
        console.log(psf);
        return;
    }
    if(idx == arr.length) return;
    //pick
    printDenominations2(idx+1,sum+arr[idx],psf+arr[idx]+", ",destSum,arr);
    //dont pick
    printDenominations2(idx+1,sum,psf,destSum,arr);
}

// printDenominations(0,"",5,[1,2,5,10]);
printDenominations2(0,0,"",6,[1,1,2,5,2]);
// stairPaths(0,"",3);

