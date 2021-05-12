
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScannerScreen from './screens/BarcodeScannerScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  BarCodeScanner : {screen:ScannerScreen},
  Search : {screen:SearchScreen}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
