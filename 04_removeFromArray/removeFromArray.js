const removeFromArray = function(arr,...number) {
    number.map(num =>{
        if(arr.includes(num)){
            arr.splice(arr.indexOf(num),1)
        }
    })
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
