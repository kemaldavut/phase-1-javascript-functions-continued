// code your solution here

function saturdayFun ( activity ="roller-skate") {
return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun())

function mondayWork ( activity ="go to the office") {
return `This Monday, I will ${activity}.`
}
console.log(mondayWork())

function wrapAdjective ( _activity ="*") {
return function innerFunction (adjective = "special") {
return `You are ${_activity}${adjective}${_activity}!`;
}
}


function wrapAdjective ( _1activity ="||") {
    return function innerFunction (adjective = "special") {
    return `You are ${_1activity}${adjective}${_1activity}!`;
    }
    }
