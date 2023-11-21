import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainFrame from '../components/MainFrame';
import SplashLoading from '../components/Splash';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import { ButtonBackWhite } from '../assets';
import Information from '../components/Information';
import HomePage from '../components/Homepage';
import Rafli from '../components/ProfileAnggota/Rafli';
import Heinz from '../components/ProfileAnggota/Heinz';
import Fredi from '../components/ProfileAnggota/Fredi';
import ProfileUser from '../components/ProfileUser';
import KerambitPage from '../components/Weapon/KerambitPage';
import BadikPage from '../components/Weapon/BadikPage';
import BaladuPage from '../components/Weapon/BaladuPage';
import BusurPanahPage from '../components/Weapon/BusurPanahPage';
import CeluritPage from '../components/Weapon/CeluritPage';

const backgroundImage = () => <ButtonBackWhite width={30} height={30} style={{ marginLeft: 10 }} />;

export default function Routing() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={SplashLoading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainFrame"
          component={MainFrame}
          options={{
            headerShown: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Homepage"
          component={HomePage}
          options={{
            title: 'Senjata Tradisional',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerLeft: false,
          }}
        />
        <Stack.Screen
          name="Informasi"
          component={Information}
          options={{
            title: 'Informasi',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerBackImage: backgroundImage,
          }}
        />
        <Stack.Screen
          name="ProfileRafli"
          component={Rafli}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ProfileHeinz"
          component={Heinz}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ProfileFredi"
          component={Fredi}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ProfileUser"
          component={ProfileUser}
          options={{
            title: 'Profile Kamu',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerLeft: '',
          }}
        />
        <Stack.Screen
          name="Kerambit"
          component={KerambitPage}
          options={{
            title: 'Deksripsi',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="BadikTumbuk"
          component={BadikPage}
          options={{
            title: 'Deksripsi',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="BaladuPage"
          component={BaladuPage}
          options={{
            title: 'Deksripsi',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="BusurPage"
          component={BusurPanahPage}
          options={{
            title: 'Deksripsi',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CeluritPage"
          component={CeluritPage}
          options={{
            title: 'Deksripsi',
            headerStyle: {
              backgroundColor: '#6C3428',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            headerBackImage: backgroundImage,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
