import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import themes from "../themes";

const Botoes = (props) => {

    const buttons = ['AC', 'DEL', '/', '%', '7', '8', '9', 'X', '4', '5', '6', '-', '3', '2', '1', '+', '.', '0', '=']

    const Calculator = () => {
        const splitNumbers = props.result.split(' ')
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
            case 'X':
                props.setResult((fistNumber * lastNumber).toString())
                return
            case '/':
                props.setResult((fistNumber / lastNumber).toString())
                return
            case '%':
                props.setResult(((fistNumber * 100) / lastNumber).toString())
                return
        }
    }

    const Conta = (buttonPressed) => {
        console.log(buttonPressed)
        if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "X" | buttonPressed === "/" | buttonPressed === "%") {
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
                Calculator()
                return
        }
        props.setResult(props.result + buttonPressed)
    }

    return (
        <View style={themes.buttons}>
            {buttons.map((button) =>
                <TouchableOpacity onPress={() => Conta(button)} key={button} style={themes.button}>
                    <Text style={themes.buttonText}>
                        {button}
                    </Text>
                </TouchableOpacity>)
            }
        </View>
    )
}
export default Botoes