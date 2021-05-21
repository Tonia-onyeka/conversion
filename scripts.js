//PROGRAM TO CHECK AN ARRAY

function checkYuGiOh(n){
    let multipleOfarrayCheck = [];
    for (let d = 1; d <= n; d++) {
         if (d % 2 === 0 && d % 3 === 0 && d % 5 === 0){
            multipleOfarrayCheck.push("yu-gi-oh")
        } else if (d % 3 === 0 && d % 5 === 0){
            multipleOfarrayCheck.push("gi-oh")
        } else if (d % 2 === 0 && d % 5 === 0){
            multipleOfarrayCheck.push("yu-oh")
        } else if (d % 2 === 0 && d % 3 === 0){
            multipleOfarrayCheck.push("yu-gi")
        } else if (d % 5 === 0)  {
            multipleOfarrayCheck.push("oh")
        } else if (d % 3 === 0)  {
            multipleOfarrayCheck.push("gi")
        } else if (d % 2 === 0)  {
            multipleOfarrayCheck.push("yu")
        } else{
            multipleOfarrayCheck.push(d)
        }
    }return multipleOfarrayCheck
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("24"));