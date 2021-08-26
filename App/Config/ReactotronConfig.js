import Config from './DebugConfig';
import {NativeModules} from 'react-native';
import sagaPlugin from 'reactotron-redux-saga';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const scriptURL = NativeModules.SourceCode.scriptURL;
const host = scriptURL.split('://')[1].split(':')[0];

let TronConnector = null;
if (Config.useReactotron) {
  TronConnector = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({name: 'didb', host}) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();
}

Reactotron.clear();
if (__DEV__) {
  console.tron = Reactotron;
}

export default TronConnector;

export const printLogs = log => {
  if (__DEV__) {
    console.tron.warn(log);
  }
};
