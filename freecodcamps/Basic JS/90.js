function checkObj(obj, checkProp) {
    // Only change code below this line
    let kok = obj.hasOwnProperty(checkProp);
    if(kok){
        return obj[checkProp]
    } else{
        return "Not Found"
    }
    // Only change code above this line
}