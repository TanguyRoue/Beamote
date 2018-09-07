// import React from 'react';
// import {View,Text, StyleSheet, Dimensions,TouchableOpacity,PixelRatio} from 'react-native';
// import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
// import FilePickerManager from 'react-native-file-picker';
//
// const FirstRoute = () => (
//   <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
//
//     <TouchableOpacity style={styles.button} onPress={this.selectFileTapped.bind(this)}>
//     			<Text>Choose file...</Text>
//     		</TouchableOpacity>
//     		<Text style={styles.fileInfo}>{JSON.stringify(this.state.file)}</Text>
//     </View>
// );
// const SecondRoute = () => (
//   <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
// );
//
// export default class Browser extends React.Component {
//   state = {
// 	  file: undefined
//   };
//
//   selectFileTapped() {
//     const options = {
//       title: 'File Picker',
//       chooseFileButtonTitle: 'Choose File...'
//     };
//
//     FilePickerManager.showFilePicker(options, (response) => {
//       console.log('Response = ', response);
//
//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       }
//       else if (response.error) {
//         console.log('ImagePickerManager Error: ', response.error);
//       }
//       else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       }
//       else {
//         this.setState({
//           file: response
//         });
//       }
//     });
//   }
//
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'First' },
//       { key: 'second', title: 'Second' },
//     ],
//   };
//
//   render(){
//     return(
//       <TabView
//             navigationState={this.state}
//             renderScene={SceneMap({
//               first: FirstRoute,
//               second: SecondRoute,
//             })}
//             onIndexChange={index => this.setState({ index })}
//             initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
//           />
//         );
//       }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   button: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
// 	margin: 5,
// 	padding: 5
//   },
//   fileInfo: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
// 	margin: 5,
// 	padding: 5
//   }
// });


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  Image,
  Alert,
  View
} from 'react-native';
import FilePickerManager from 'react-native-file-picker';


// const FilePickerManager = require('NativeModules').FilePickerManager;


export default class AwesomeProject extends Component {

   constructor() {
		super()
   };

   onPressLearnMore(){
FilePickerManager.showFilePicker(null, (response) => {
  console.log('Response = ', response);

  return (typeof (FilePickerManager) !== "undefined" &&
          typeof(FilePickerManager.showFilePicker) !== "undefined" &&
          ypos > FilePickerManager.showFilePicker);

  if (response.didCancel) {
    console.log('User cancelled file picker');
  }
  else if (response.error) {
    console.log('FilePickerManager Error: ', response.error);
  }
  else {
    this.setState({
      file: response
    });
  }
});

//Alert.alert('Button has been pressed!');
};

   render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Button onPress={this.onPressLearnMore.bind(this)} title="Upload Image" color="#841584" accessibilityLabel="Learn more about this purple button" />
      </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
