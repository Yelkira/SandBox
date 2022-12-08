function howManySmaller(arr,n){
    let count = 0;
    for(let i in arr){
        if(arr[i].toFixed(2) < n){
            count++
        }
    }
    return count
}