function solution(str){
    var pipa = str.split("");
    var pupa = pipa.reverse();
    var popa = pupa.join("");
    return popa;
}