const Conta = (props, buttonPressed) => {
    console.log(buttonPressed)
    if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/") {
        props.setResult(props.result + " " + buttonPressed + " ")
        return
    }
    switch (buttonPressed) {
        case 'DEL':
            props.setResult(props.result.substring(0, (props.result.length - 1)))
            return
        case 'AC':
            props.setHistory("")
            props.setResult("")
            return
        case '=':
            props.setHistory(props.result)
            return
        case '+/-':
            return
    }
    props.setResult(props.result + buttonPressed)
}

const Calculator = (props) => {
    const splitNumbers = result.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch (operator) {
        case '+':
            props.setResult((fistNumber + lastNumber).toString())
            return
        case '-':
            props.setResult((fistNumber - lastNumber).toString())
            return
        case '*':
            props.setResult((fistNumber * lastNumber).toString())
            return
        case '/':
            props.setResult((fistNumber / lastNumber).toString())
            return
    }
}