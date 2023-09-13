// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

//Implement a function that returns an 'inner' function
function wrapAdjective(addFlair = '*') {
    return function (encouragingMessage = "special") {
        return `You are ${addFlair}${encouragingMessage}${addFlair}!`
    }
}