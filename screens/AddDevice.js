import React, {Component} from 'react';
import {AlertIOS, Button, StyleSheet, Text, View} from 'react-native';

import {Navigation} from 'react-native-navigation';

export default class AddDevice extends Component {

    constructor() {
        super();

        this.state = {
            'searchForDevicesDisabled': false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Power up your device and
                    connect to the newly created WiFi Netowork. It should begin
                    with "Hame". Once connected, click the button below to
                    search for your device.</Text>
                <Button
                    onPress={() => {
                        this.checkForconnection();
                    }}
                    title={this.state.searchForDevicesDisabled ?
                        'Searching...' :
                        'Search for Devices'}
                    accessibilityLabel={this.state.searchForDevicesDisabled ?
                        'Searching...' :
                        'Search for Devices'}
                    color="#000000"
                    disabled={this.state.searchForDevicesDisabled}
                />
            </View>
        );
    }

    checkForconnection() {
        const self = this;

        // Disable the button
        this.setState( {
            searchForDevicesDisabled: true,
        } );

        return fetch( 'http://192.168.4.1/api/ping' ).
            then( response => response.json() ).
            then( responseJson => {
                Navigation.showModal( {
                    screen: 'enter-wifi-details', // unique ID registered with
                                                  // Navigation.registerScreen
                    title: 'Connect to a network', // title of the screen as
                                                   // appears in the nav bar
                                                   // (optional)
                    passProps: {}, // simple serializable object that will pass
                                   // as props to the modal (optional)
                    navigatorStyle: {}, // override the navigator style for the
                                        // screen, see "Styling the navigator"
                                        // below (optional)
                    navigatorButtons: {}, // override the nav buttons for the
                                          // screen, see "Adding buttons to the
                                          // navigator" below (optional)
                    animationType: 'slide-up' // 'none' / 'slide-up' , appear
                                              // animation for the modal
                                              // (optional, default 'slide-up')
                } );
            } ).
            catch( error => {
                AlertIOS.alert(
                    'Error',
                    'Could not find device. Make sure it\'s powered on and you\'re connected to the devices network',
                );

                self.setState( {
                    searchForDevicesDisabled: false,
                } );
            } );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    instructions: {
        textAlign: 'center',
    },

    searchButton: {},
} );
