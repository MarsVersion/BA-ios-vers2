import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Safe area provider

import BAHome from './components/BAHome';
import BAND from './components/BAND';
import BAKontakt from './components/BAKontakt';
import BAOPVerfahren from './components/BAOPVerfahren';

const Tab = createBottomTabNavigator();

// Linking configuration for deep linking support
const linking = {
  prefixes: ['com.marsversion.bariatricassistantapp://'],
  config: {
    screens: {
      Home: 'home',
      BMI: 'bmi',
      Kontakt: 'kontakt',
      OPVerfahren: 'opverfahren',
    },
  },
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
          Poppins_900Black,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking} onReady={onLayoutRootView}>
        <Tab.Navigator
          initialRouteName="BAHome"
          screenOptions={{
            tabBarActiveTintColor: 'rgb(175, 4, 4)',
            tabBarInactiveTintColor: 'black',
            tabBarShowLabel: true,
            tabBarStyle: {
              borderTopWidth: 0.5,
              borderTopColor: 'rgb(175, 4, 4)', // Red border line for the tab bar
              backgroundColor: 'white', // Ensure the background is purely white
              height: 60, // Adjust height for tab bar size
              paddingTop: 10, // Add padding top to position items higher
              paddingBottom: 10, // Adjust padding bottom to make space for items
              marginBottom: 30, // Positive margin to move the tab bar higher
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
            },
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
            tabBarIcon: () => null, // No icons
          }}
        >
          <Tab.Screen
            name="Home"
            component={BAHome}
            options={{ tabBarLabel: 'HOME', headerShown: false }}
          />
          <Tab.Screen name="BMI" component={BAND} options={{ tabBarLabel: 'BMI', headerShown: false }} />
          <Tab.Screen 
    name="OPVerfahren" 
    component={BAOPVerfahren} 
    options={{ tabBarLabel: 'OP', headerShown: false }} 
  />
          <Tab.Screen name="Kontakt" component={BAKontakt} options={{ tabBarLabel: 'INFO', headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
