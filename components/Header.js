import React from "react";
import { Text, View } from 'react-native';
import themes from "../themes/style";

const Header = (props) => {
    return (
        <View style={themes.header}>
            <View style={themes.result}>
                <Text style={themes.historyText}>{props.history}</Text>
                <Text style={themes.resultText}>{props.result}</Text>
            </View>
        </View>
    )
}
export default Header