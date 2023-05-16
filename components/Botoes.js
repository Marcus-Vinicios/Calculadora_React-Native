import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import themes from "../themes/style";

const Botoes = (props) => {
    const buttons = ['C', '/', '%', '.', '7', '8', '9', 'x', '4', '5', '6', '+', '1', '2', '3', '-', 'DEL', '0', '=']
    const Conta = (btnPres) => {
        if (btnPres === '+' | btnPres === "-" | btnPres === "x" | btnPres === "/" | btnPres === "%") {
            //Validação dos valores a serem inseridos
            if (props.conta.includes('%') || props.conta.includes('/') || props.conta.includes('x') || props.conta.includes('-') || props.conta.includes('+') || props.conta === "") {
                return
            }
            props.setConta(props.conta + " " + btnPres + " ")
            return
        }
        if (btnPres === '.') {
            if (props.conta.includes('.') || props.conta === "") {
                return
            }
        }
        const Calculator = () => {
            const splitValues = props.conta.split(' ')
            var val1 = parseFloat(splitValues[0])
            var val2 = parseFloat(splitValues[2])
            const operator = splitValues[1]
            //Realizar as operações
            switch (operator) {
                case '+':
                    props.conta = ((val1 + val2).toString())
                    return
                case '-':
                    props.conta = ((val1 - val2).toString())
                    return
                case 'x':
                    props.conta = ((val1 * val2).toString())
                    return
                case '/':
                    props.conta = ((val1 / val2).toFixed(2))
                    return
                case '%':
                    props.conta = (((val1 / 100) * val2).toString())
                    return
            }
        }
        //Ações da calculadora
        switch (btnPres) {
            case 'DEL':
                props.setConta(props.conta.substring(0, (props.conta.length - 1)))
                return
            case 'C':
                props.setHistory("")
                props.setResult("")
                props.setConta("")
                return
            case '=':
                if (props.setConta("")) {
                    return
                }
                props.setHistory(props.conta)
                Calculator()
                props.setResult(`${props.conta}`)
                if (props.result != '') {
                    props.setResult(props.result)
                    props.setHistory(props.history)
                    props.setConta("")
                }
                return
        }
        //Limpando o display e inserindo novos valores
        if (props.result != '') {
            props.setResult("")
            props.setConta(props.conta + btnPres)
        } props.setConta(props.conta + btnPres)
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