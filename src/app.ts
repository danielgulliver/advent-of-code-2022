import day1 from './days/day1'

console.log("===================")
console.log("Advent of Code 2022")
console.log("===================")

const day = parseInt(process.argv[2]) ?? 0

if (day > 0 && day <= 25) {
    console.log(`Day ${day}:\n`)
}

switch (day) {
    case 0:
        console.log("No day specified. Please specify a day (e.g. 1): npm start -- <day>")
        break
    case 1:
        day1()
        break
    default:
        const message = (day <= 25) ? `The solution for Day ${day} has not been implemented yet.` : "Please specify a day between 1 and 25."
        console.log(message)
}