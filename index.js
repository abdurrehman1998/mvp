/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App/Containers/RootContainer';
// import './App/Config/ReactotronConfig';
AppRegistry.registerComponent(appName, () => App);
