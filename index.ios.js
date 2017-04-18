/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {Navigation} from 'react-native-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import {registerScreens} from './screens';
registerScreens(); // this is where you register all of your app's screens

Promise.all( [
    Icon.getImageSource( 'dashboard', 30 ),
] ).then( icons => {
    // start the app
    Navigation.startTabBasedApp( {
        tabs: [
            {
                label: 'Dashboard',
                screen: 'dashboard', // this is a registered name for a screen
                icon: icons[0],
                // selectedIcon: require('../img/one_selected.png'), // iOS only
                title: 'Dashboard',
            },
        ],
    } );

} );
