// Topic 2
let weight = 90
let height = 1.91

function calculateBMI(weight, height) {
    const calResult = (height*1000) / weight
    return calResult
}

function interpretBMI(bmi) {
    if(bmi < 18.5) return ("Underweight")
    if((bmi >= 18.5) && (bmi < 25)) return("Normal weight")
    if((bmi >= 25) && (bmi < 30)) return("Overweight")
    if(bmi > 30) return "Obese"
}

const calBMI = calculateBMI(weight, height)
const intBMI = interpretBMI(calBMI)

console.log("Topic2 Answer")
console.log(`BMI: ${calBMI}`)
console.log(`Interpretation Normal Weight: ${intBMI}`)
