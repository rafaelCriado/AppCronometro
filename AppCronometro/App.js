import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./src/css/styles";
import Botao from "./src/components/Botao";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { n: 0, 'botao': 'INICIAR'};
    this.tempo = null;
  }

  iniciarCronometro = () =>{
    if(this.tempo == null){
      //Inicia cronometro
      this.tempo = setInterval(()=>{
        this.setState({
          n: this.state.n+0.1,
          botao:'PARAR'
        })
      },100);
    }else{
      //Para cronometro
      clearInterval(this.tempo);
      this.tempo = null;
      this.setState({botao:'INICIAR'});
    }
  }

  limparCronometro = () => {
    if(this.tempo != null){
      clearInterval(this.tempo);
      this.tempo = null;
    }

    this.setState({
      n:0,
      botao: 'INICIAR'
    });
  }

  render() {
    return (
      <View style={styles.body}>
        <Image style={styles.imagem} source={ require('./src/images/relogio.png')}></Image>
        <Text  style={styles.timer}>{this.state.n.toFixed(1)}</Text>

        <View style={styles.areaBotao}>
          <Botao texto={this.state.botao} onPress={this.iniciarCronometro}></Botao>
          <Botao texto="LIMPAR" onPress={this.limparCronometro}></Botao>
        </View>
      </View>
    );
  }
}