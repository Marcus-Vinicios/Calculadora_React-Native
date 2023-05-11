import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import themes from "../themes/style";

const Botoes = (props) => {

    const buttons = ['C', '/', '%', '.', '7', '8', '9', 'x', '4', '5', '6', '+', '1', '2', '3', '-', 'DEL', '0', '=']

    const Calculator = () => {
        const splitValues = props.result.split(' ')
        const val1 = parseFloat(splitValues[0])
        const val2 = parseFloat(splitValues[2])
        const operator = splitValues[1]
    
        switch (operator) {
            case '+':
                props.setResult((val1 + val2).toString())
                return
            case '-':
                props.setResult((val1 - val2).toString())
                return
            case 'x':
                props.setResult((val1 * val2).toString())
                return
            case '/':
                props.setResult((val1 / val2).toString())
                return
            case '%':
                props.setResult(((val1 / 100) * val2).toString())
                return
        }
    }
    
    const Conta = (btnPres) => {
        console.log(btnPres)
        if (btnPres === '+' | btnPres === "-" | btnPres === "x" | btnPres === "/" | btnPres === "%") {
            props.setResult(props.result + " " + btnPres + " ")
            return
        }
        switch (btnPres) {
            case 'DEL':
                props.setResult(props.result.substring(0, (props.result.length - 1)))
                return
            case 'C':
                props.setHistory("")
                props.setResult("")
                return
            case '=':
                props.setHistory(props.result)
                Calculator()
                return
        }
        props.setResult(props.result + btnPres)
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