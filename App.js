import React from 'react';
import { StyleSheet} from 'react-native';
import LoginScreen from './app/LoginScreen'
import SecondScreen from './app/SecondScreen'
import Menu from './app/Menu/Menu'
import Browser from './app/Browser/NewBrowser'
import Beamys from './app/Beamys/Beamys'
import Alarms from './app/Alarms/Alarms'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    //testXSF 2
    //return <Browser/>;
    return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial
	        />
	        <Scene key="secondScreen"
	          component={Menu}
	          animation='fade'
	          hideNavBar={true}
	        />
          <Scene key="mesbeamys"
            component={Beamys}
            animation='fade'
	          hideNavBar={true}
          />
          <Scene key="alarms"
            component={Alarms}
            animation='fade'
	          hideNavBar={true}
          />
          <Scene key="browser"
            component={Browser}
            animation='fade'
	          hideNavBar={true}
          />
	      </Scene>
	    </Router>
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
});
