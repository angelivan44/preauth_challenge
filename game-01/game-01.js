function returnArray (array, n){
    let result = []
    let maxNumber = Math.max(array)
    const arraySecondary = Array.from({length: maxNumber}, i => i = false);
    array.forEach(element =>{
        arraySecondary[element]= true
    })
    array.forEach(element=>{
        let rest = n-element;
        if(arraySecondary[rest]){
            result.push( [element,rest])
        }
    })
    return result[0]
}

console.log(returnArray([2,3,8,11,9,10],14))