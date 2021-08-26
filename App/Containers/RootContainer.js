import createStore from '../Redux';
import {Provider} from 'react-redux';
import React from 'react';
import AppNavigation from './AppNavigation';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// create our store
export const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
