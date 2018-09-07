import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import bgSrc from '../images/wallpaper.png';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.getData=this.getData.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
      source={bgSrc}
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.picture}
    >
        <Logo />
        <Form
          sendData = {this.getData}
        />
        <SignupSection />
        <ButtonSubmit
          onPress={this._handlePress.bind(this)}
         />
    </ImageBackground>
  </View>
    );
  }

  getData(val){
    console.log(val);
  }

  _handlePress(event) {
    console.log("ez");
      // let username=this.state.username;
  }
}
const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
