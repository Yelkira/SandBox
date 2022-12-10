function findAverage(array) {
    let sum = 0;

    if (array == null||array==NaN||array==0){
        return 0
    } else {
        for (let i =0;i<array.length;i++){
            sum+=array[i]
        }
    }
    return sum/array.length;
}