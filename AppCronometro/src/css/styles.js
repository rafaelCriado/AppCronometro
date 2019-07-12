import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body:{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center'
    },
    imagem:{
      
    },
    timer: {
      color: '#baa07a',
      fontSize: 60,
      fontWeight: "bold",
      backgroundColor: 'transparent',
      marginTop:-150
    },
    areaBotao:{
      flexDirection: 'row',
      height:60,
      marginTop:100
    },
    areaParcial:{
        marginTop:80,
        textAlign:"center"
    },
    parcial:{
        color: '#FFF',
        fontSize:30,
        fontWeight:'bold'
    }
});

export default styles