import { Alert, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackgroundUtama, Facebook, Google, Instagram, ButtonBack } from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
  const [inputData, setInputData] = useState({ email: '', password: '' });

  const handleChangeInput = (input, value) => {
    setInputData((prevState) => ({ ...prevState, [input]: value }));
  };

  const validateData = () => {
    let isValidate = true;

    if (!inputData.password) {
      isValidate = false;
      Alert.alert('-Password- Terjadi Kesalahan!');
    }

    if (!inputData.email) {
      isValidate = false;
      Alert.alert(`-Email-
Terjadi Kesalahan!`);
    }

    if (isValidate) {
      loginData();
    }
  };

  const loginData = () => {
    setTimeout(async () => {
      let dataRegister = await AsyncStorage.getItem('dataRegister');
      if (dataRegister) {
        let dataUser = JSON.parse(dataRegister);
        if (inputData.email == dataUser.email && inputData.password == dataUser.password) {
          Alert.alert('Login Berhasil');
          navigation.navigate('Homepage');
          AsyncStorage.setItem('dataRegister', JSON.stringify({ ...dataUser, loggIn: true }));
        } else {
          Alert.alert('Akun Tidak Cocok!');
        }
      } else {
        Alert.alert('Data Tidak Di Temukan!');
      }
    }, 1000);
  };

  return (
    <ImageBackground source={BackgroundUtama} style={styles.container} resizeMode="cover">
      <TouchableOpacity onPress={() => navigation.navigate('MainFrame')} style={{ top: 30, height: 'auto', right: 10, padding: 10 }}>
        <ButtonBack width={30} height={30} />
      </TouchableOpacity>
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', rowGap: 80, top: 20 }}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ flex: 1, rowGap: 30, maxHeight: 430, minHeight: 430 }}>
          <View style={{ flex: 1, maxHeight: 300, minHeight: 300 }}>
            <View style={{ flex: 1, rowGap: 35, maxHeight: 200, minHeight: 200 }}>
              <Text style={{ textAlign: 'center', color: '#151515', fontWeight: '600', fontSize: 20, marginVertical: 10 }}>Login</Text>
              <View style={{ flex: 1, width: '100%', rowGap: 5 }}>
                <View>
                  <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '600', color: '#151515' }}>Email</Text>
                  <TextInput placeholder="Masukkan Email Anda" style={styles.input} placeholderTextColor="#D9D9D9" keyboardType="email-address" onChangeText={(val) => handleChangeInput('email', val)} />
                </View>
                <View>
                  <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '600', color: '#151515' }}>Password</Text>
                  <TextInput placeholder="Masukkan Password Anda" style={styles.input} placeholderTextColor="#D9D9D9" secureTextEntry={true} onChangeText={(val) => handleChangeInput('password', val)} />
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: '100%', rowGap: 20, maxHeight: 120, minHeight: 120 }}>
            <View style={{ flex: 1, maxHeight: 21 }}>
              <View style={{ width: '100%', maxHeight: 21, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: 'rgba(21, 21, 21, 0.70)', zIndex: 1, backgroundColor: '#fff', width: 60, textAlign: 'center' }}>Atau</Text>
                <View style={{ width: '100%', height: 0, borderColor: 'rgba(21, 21, 21, 0.70)', borderWidth: 1, top: -10.5 }}></View>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', columnGap: 30, maxHeight: 40 }}>
              <Instagram width={40} height={40} />
              <Facebook width={40} height={40} />
              <Google width={40} height={40} />
            </View>
          </View>
        </ScrollView>
        <View style={{ flex: 1, rowGap: 10, maxHeight: 200, minHeight: 200 }}>
          <View style={{ flexDirection: 'row', columnGap: 5, justifyContent: 'center', alignItems: 'center', top: 10 }}>
            <Text style={{ fontSize: 13, fontWeight: 500, color: '#151515' }}>Belum Memiliki Akun?</Text>
            <TouchableOpacity activeOpacity={0.8} style={{ padding: 10, right: 10 }} onPress={() => navigation.navigate('Register')}>
              <Text style={{ fontSize: 13, fontWeight: 700, color: '#BA704F', textDecorationLine: 'underline' }}>Register</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={validateData} style={{ width: '100%', backgroundColor: '#BA704F', paddingVertical: 20, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 20, fontWeight: 600 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  input: {
    width: '100%',
    borderColor: '#D9D9D9',
    borderWidth: 2,
    fontWeight: '600',
    fontSize: 14,
    color: 'rgba(21, 21, 21, 0.6)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default LoginPage;
