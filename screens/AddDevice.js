import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

export default class AddDevice extends Component {

  constructor() {
    super();

    this.checkForconnection();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Power up device and connect to network</Text>
      </View>
    );
  }

  checkForconnection() {
    let pingCount = 0;
    const ping = () => {
      console.log('??');
      return fetch( 'http://192.168.4.1/ping' ).then(response => response.json()).then(responseJson => {
        console.log(responseJson);
        AlertIOS.alert(
         'Found Device',
         responseJson.device
        );
      }).catch(error => {
        pingCount++;
        console.log(pingCount);
        console.log(error);
        if(pingCount < 10000){
          ping();
        }
      });
    }

    console.log('pingggg',ping());

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
