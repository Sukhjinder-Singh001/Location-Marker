import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import MapScreen from './src/screens/MapScreen';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MapScreen />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
