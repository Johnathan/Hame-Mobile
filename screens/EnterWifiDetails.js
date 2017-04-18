import React, {Component} from 'react';
import {
    AlertIOS,
    Button,
    Picker,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

export default class EnterWifiDetails extends Component {

    constructor() {
        super();

        this.state = {
            'ssids': [],
            'selectedSsid': null,
            password: null,
        };

        this.searchForSSIDs();
    }

    render() {
        return (
            <View style={styles.container}>

                <Picker
                    selectedValue={this.state.selectedSsid}
                    onValueChange={( ssid ) => {
                        this.setState( {
                            selectedSsid: ssid,
                        } );
                    }}
                >
                    {
                        this.state.ssids.map( ( ssid, index ) => {
                            return (
                                <Picker.Item
                                    label={ssid}
                                    value={ssid}
                                    key={index}
                                />
                            );
                        } )
                    }
                </Picker>
                <TextInput
                    style={{height: 40}}
                    onChangeText={( password ) => this.setState( {password} )}
                    placeholder="SSID Password"
                    secureTextEntry={true}
                    value={this.state.password}
                />
                <Button
                    onPress={this.sendWifiCredentials.bind( this )}
                    title="Save Credentials"
                    accessibilityLabel="Save Credentials"
                    color="#000000"
                    disabled={(!this.state.selectedSsid ||
                    !this.state.password)}
                />
            </View>
        );
    }

    searchForSSIDs() {
        const self = this;

        return fetch( 'http://192.168.4.1/api/access-points' ).
            then( response => response.json() ).
            then( responseJson => {
                console.log( responseJson.ssids );
                self.setState( {
                    ssids: responseJson.ssids,
                } );
            } ).
            catch( error => {
                AlertIOS.alert(
                    'Error',
                    'Could not find any networks',
                );
            } );
    }

    sendWifiCredentials() {
        fetch( 'http://192.168.4.1/api/access-points', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                ssid: this.state.selectedSsid,
                password: this.state.password,
            } ),
        } );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    instructions: {
        textAlign: 'center',
    },

    searchButton: {},
} );
