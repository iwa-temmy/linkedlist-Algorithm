function arrayToList(array){
    var list = null;

    for(var i = array.length - 1; i >= 0; i--)
        list= {
            value: array[i],
            rest: list
        }
        return list;
}
// console.log(arrayToList([1,2,3]));
 console.log(JSON.stringify(arrayToList([1,2,3])));