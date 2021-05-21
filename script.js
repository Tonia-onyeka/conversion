//Program to covert Fahrenheit to Celsius
function convertFahrToCelsius(F) {
    //var F = Fahrenheit;
    let C;
    C = (F - 32) * 5 / 9;
    const round = C.toFixed(4);
    const answer =  round ;

    if (toString.call(F) === "[object Array]") {
      return ('[' + F + ']' + "" + ' is not a valid number but a/an array');
    } else if(typeof (F) === 'boolean' || isNaN(F)) {
            return (`${JSON.stringify(F)} is not a valid number but a/an ${typeof(F)}`);   
        }else {
        return answer;

    }
}
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({temp: 0}));
console.log(convertFahrToCelsius("abc"));
console.log(convertFahrToCelsius(32));





