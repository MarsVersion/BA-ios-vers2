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
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BAHome from './components/BAHome';
import BAND from './components/BAND';
import BAKontakt from './components/BAKontakt';
import BAOPVerfahren from './components/BAOPVerfahren';

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['com.marsversion.bariatricassistantapp://'],
  config: {
    screens: {
      Home: 'home',
      BMI: 'bmi',
      OP: 'op',
      INFO: 'info',
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
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#7a0202',
            tabBarInactiveTintColor: 'black',
            tabBarShowLabel: true,
            tabBarStyle: {
              borderTopWidth: 0.5,
              borderTopColor: '#7a0202',
              backgroundColor: 'white',
              height: 60,
              paddingTop: 10,
              paddingBottom: 20,
              marginBottom: 30,
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
            tabBarIcon: () => null,
          }}
        >
          <Tab.Screen
            name="HOME"
            component={BAHome}
            options={{ headerShown: false }}
          />
          <Tab.Screen 
            name="BMI" 
            component={BAND} 
            options={{ headerShown: false }}
          />
          <Tab.Screen 
            name="OP-Skizze" 
            component={BAOPVerfahren} 
            options={{ headerShown: false }}
          />
          <Tab.Screen 
            name="INFO" 
            component={BAKontakt} 
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
