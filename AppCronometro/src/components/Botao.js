import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class Botao extends Component{

  constructor(props){
    super(props);
    this.state = {};

    this.styles = StyleSheet.create({
      botao:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#886532',
        height: 60,
        borderRadius:30,
        margin:15
      },
      texto:{
        fontSize: 18,
        color: '#ffffff'
      }
    });
  }

  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
          <Text style={this.styles.texto}>{this.props.texto}</Text>
      </TouchableOpacity>
    );
  }
}
