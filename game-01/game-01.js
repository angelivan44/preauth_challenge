function returnArray (array, n){
    let result = []
    array.forEach((element, index) => {
        let auxiliaryArray = [...array]
        let rest = n - element
        auxiliaryArray.splice(index,1)
        if(auxiliaryArray.includes(rest)){
            console.log(rest)
            result.push([element, rest])
        }
    })
    return result[0]
}
