import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {Navigation} from 'react-native-navigation';

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.addDevice}
                    title="Add a Device"
                    accessibilityLabel="Add a Device"
                    color="#000000"
                />
            </View>
        );
    }

    addDevice() {
        Navigation.showModal( {
            screen: 'add-device',
            title: 'Add a device',
            animationType: 'slide-up',
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
} );
