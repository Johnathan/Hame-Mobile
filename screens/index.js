import { Navigation } from 'react-native-navigation';

import Dashboard from './Dashboard';
import AddDevice from './AddDevice';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('dashboard', () => Dashboard);
  Navigation.registerComponent('add-device', () => AddDevice);
}
