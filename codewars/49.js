function fakeBin(x){
    var ans = x.split('')
    var result = [];
    for (var i = 0; i < ans.length; i++) {
        if (ans[i] < 5) {
            result.push(0)
        } else {
            result.push(1)
        }
    }
    return result.join("");
}