import React, { useState } from "react";
import { View } from 'react-native';
import themes from "./themes";
import Header from "./components/Header";
import Botoes from "./components/Botoes";

export default function App(props) {

  const [history, setHistory] = useState('')
  const [result, setResult] = useState('')

  return (
    <View style={themes.container}>
      <Header history={history} result={result} />
      <Botoes history={history} result={result} setResult={setResult} setHistory={setHistory} />
    </View>
  );
}
