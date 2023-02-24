import * as React from 'react';

import Home, { HeaderHome } from './src/Screens/Home';

import AppLoading from 'expo-app-loading';
import DetailsScreen from './src/Screens/Detail';
import { NavigationContainer } from '@react-navigation/native';
import Sbb from './src/Screens/Sbb';
import SbbDetails from './src/Screens/Sbb/SbbDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    'Vanilla-Regular': require('./assets/fonts/Vanilla-Caramel.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#ffffff'
          }
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detail'
          }}
        />
        <Stack.Screen
          name="Sbb"
          component={Sbb}
          options={{
            title: 'Verbindungen',
            headerStyle: {
              backgroundColor: '#D2042D'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Vanilla-Regular',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name="Sbbdetails"
          component={SbbDetails}
          options={{
            title: 'Verbindung',
            headerStyle: {
              backgroundColor: '#D2042D'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Vanilla-Regular',
              fontSize: 25
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
