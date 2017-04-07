import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.addDevice}>
          <Text>Add a device</Text>
        </TouchableHighlight>
      </View>
    );
  }

  addDevice() {
    Navigation.showModal({
      screen: "add-device", // unique ID registered with Navigation.registerScreen
      title: "Add a device", // title of the screen as appears in the nav bar (optional)
      passProps: {}, // simple serializable object that will pass as props to the modal (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
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
