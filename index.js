var maxNum;
var result = [];

function showResult(){
    maxNum = document.querySelector('#highestNumber').value;
    console.log(maxNum);
    if (maxNum.length === 0) {
        alert("Please type in a number!");
        return;
    }
    document.querySelector('#lowerContent').innerHTML = `<h3>`+getResult().join("    ")+`</h3>`;
}

function getResult() {
    for (let i = 1; i <= maxNum; i++) {
        if(i % 15 === 0){
            result.push('FIZZ-BUZZ');
        }else if (i % 3 === 0) {
            result.push('FIZZ');
        }else if (i % 5 === 0) {
            result.push('BUZZ');
        }else{
            result.push(''+i)
        }
    }
    return result
}