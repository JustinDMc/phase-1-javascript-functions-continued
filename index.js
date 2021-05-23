function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(input = "*") {
    return function (input2 = "special") {
        return `You are ${input}${input2}${input}!`
    }
}
