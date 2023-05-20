const removeFromArray = function(arr,...number) {
    number.map(num =>{
        if(arr.includes(num)){
            arr.splice(arr.indexOf(num),1)
        }
    })
    return arr
};

console.log(removeFromArray([1,2,3,4],4,3))
