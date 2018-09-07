import React from 'react';
import { View, Button, Image, TouchableOpacity, StyleSheet, Text,ImageBackground } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import bgSrc from '../../images/HomeBackground.jpg';

export default class Menu extends React.Component {

  constructor() {
    super();
    this._onPressButton1 = this._onPressButton1.bind(this);
    this._onPressButton2 = this._onPressButton2.bind(this);
    this._onPressButton3 = this._onPressButton3.bind(this);
  }

_onPressButton1() {
  Actions.mesbeamys();
}
_onPressButton2() {
  Actions.alarms();
}
_onPressButton3() {
  Actions.browser();
}

  render(){
    return (
      <View style={styles.container}>
        <ImageBackground
        source={bgSrc}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.picture}
      >
        <Text style={styles.title}>BEAMOTE</Text>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton1}>
          <Image source={require("../../images/mesbeamys.jpg")} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton2}>
          <Image source={require("../../images/reveil.jpg")} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton3}>
          <Image source={require("../../images/proj.jpg")} style = {styles.image}/>
        </TouchableOpacity>

      </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginTop: 40,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    width: 120,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    color:'#22488F',
    fontSize : 60,
    marginBottom: 20,
    fontWeight: 'bold',
    top: 20,
  },
  picture: {
    flex: 1,
    width: '100%',
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
