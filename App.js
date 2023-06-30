import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './store';
import HomeScreen from './Screens/HomeScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
