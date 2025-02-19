import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide splash screen after initialization
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
