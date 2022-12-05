function getCount(str) {
    let i = 0
    str.split("").forEach(function(c){
        if (c =="a" || c =="e" ||c =="i" ||c =="o" ||c =="u"){
            i++
        }
    });
    return i;
}
