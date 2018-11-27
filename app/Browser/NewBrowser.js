import React from 'react';
import {View,Text, StyleSheet, Dimensions,TouchableOpacity,PixelRatio,Image,ImageBackground} from 'react-native';
import bgImage from '../../images/SimpleBackground.jpg';

const parseString = require('react-native-xml2js').parseString;
const parseFromString = require('react-native-xml2js').parseFromString;
const XMLParser = require('react-xml-parser');
const token ='';
var result ='';

export default class Browser extends React.Component {

  constructor(props){
    super(props);
    this.state= {isLoading:true}
  }


  render(){
    return(
      <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
        <ImageBackground
        source={bgImage}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.picture}
      >
          <Text style={styles.title}> Select a file </Text>
          <TouchableOpacity style={styles.button} onPress={this.sendRequest}>
            <Image source={require("../../images/VideoIcon.png")} style = {styles.image}/>
            <Text style={styles.fileTitle}> VideoExample.mp4  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.sendRequest}>
            <Image source={require("../../images/VideoIcon.png")} style = {styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.sendRequest}>
            <Image source={require("../../images/VideoIcon.png")} style = {styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.sendRequest}>
            <Image source={require("../../images/VideoIcon.png")} style = {styles.image}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
        );
      }

      sendRequest(){
        //------------Get the token------------------------

        //this.getToken;
        //console.log(result);


        fetch('http://10.237.104.63:8000/api/auth/?username=pi&password=raspberry&imei=1234')
        .then((response) => response.text())
        .then((response) => {
            var xml = new XMLParser().parseFromString(response);
            token = xml.getElementsByTagName('token')[0].value;
            console.log('token : '+token);
        })
        .catch((error) =>{
          console.error(error);
        });


      //----------------Send new XML -----------------------
      //   /?token=bd73be60-49dd-4518-95bd-484125cd33a}

      console.log('http://10.237.104.63:8000/api/alarm/?token='+token) ;
      var url = ('http://10.237.104.63:8000/api/alarm/?token='+token);
      // console.log(url);


      // Possible to make multiple lines with an \ at the end
      var xml = ('<?xml version="1.0" ?>\
      <alarm>\
        <name>Test Fake 1</name>\
        <beamy_id>1</beamy_id>\
        <time>\
          <day>wednesday</day>\
          <hour>9</hour>\
          <minute>56</minute>\
        </time>\
        <enabled>true</enabled>\
        <ringtone>3</ringtone>\
      </alarm>\
      ');

      // let xmlPatch = ('<?xml version="1.0" ?>\
      // <alarm>\
      //   <name>Test Update 1</name>\
      //   <alarm_id>1</alarm_id>
      //   <beamy_id>1</beamy_id>\
      //   <time>\
      //     <day>wednesday</day>\
      //     <hour>10</hour>\
      //     <minute>10</minute>\
      //   </time>\
      //   <enabled>true</enabled>\
      //   <ringtone>3</ringtone>\
      // </alarm>\
      // ');



      console.log('xml : '+xml);
      console.log(JSON.stringify(xml));

      fetch(url, {
      method: 'POST',
      body: xml,
    })
    .then((response) => response.text())
    .then((response) => {
        console.log('Response : '+response);
    })
    .catch((error) =>{
      console.error(error);
    });

  //   fetch(url, {
  //     method: 'PATCH',
  //     body: xmlPatch,
  //   })
  //
  }

  async getToken() {
    try {
      result = await fetch ('http://10.237.104.63:8000/api/auth/?username=pi&password=raspberry&imei=1234');
      // Do whatever you want with this result, including getting the next token or updating the UI (via setting the State)
    } catch(e){
      // Show an error message
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    // backgroundColor: '#859a9b',
    // opacity: 0.50,
    backgroundColor: 'rgba(0,0,0,0.5)',   //This line replace Opacity. The difference is it allow to change the opacity only of the parent (so not the image)
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    width: 400,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    color:'#22488F',
    fontSize : 60,
    marginBottom: 20,
    fontWeight: 'bold',
    top: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
  },
  picture: {
    flex: 1,
    width: '100%',
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileTitle:{
    marginLeft:20,
    fontSize: 20,
  },
});
