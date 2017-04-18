import { Navigation } from 'react-native-navigation';

import Dashboard from './Dashboard';
import AddDevice from './AddDevice';
import EnterWifiDetails from './EnterWifiDetails';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('dashboard', () => Dashboard);
  Navigation.registerComponent('add-device', () => AddDevice);
  Navigation.registerComponent('enter-wifi-details', () => EnterWifiDetails);
}
