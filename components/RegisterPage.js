import React, { useState } from 'react';
import { Alert, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BackgroundUtama, ButtonBack, Facebook, Google, Instagram } from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterPage = ({ navigation }) => {
  const [inputData, setInputData] = useState({ email: '', name: '', password: '', rePassword: '' });

  const handleChangeInput = (input, value) => {
    setInputData((prev) => ({ ...prev, [input]: value }));
  };

  // validate
  const validate = () => {
    let isValidate = true;

    if (!inputData.rePassword) {
      isValidate = false;
      Alert.alert('Please Masukkan Password Kedua Nya Ya!');
    } else if (inputData.rePassword.length < 5) {
      isValidate = false;
      Alert.alert('Password Salah atau Password Kurang Dari 5 !');
    } else if (inputData.password !== inputData.rePassword) {
      isValidate = false;
      Alert.alert('Password Tidak Sama !');
    }

    if (!inputData.password) {
      isValidate = false;
      Alert.alert('Please Masukkan Password Nya Ya!');
    } else if (inputData.password.length < 5) {
      isValidate = false;
      Alert.alert('Password Salah atau Password Kurang Dari 5 !');
    }

    if (!inputData.name) {
      isValidate = false;
      Alert.alert('Please Masukkan Nama Nya Ya!');
    }

    if (!inputData.email) {
      isValidate = false;
      Alert.alert('Please Masukkan Email Nya Ya!');
    } else if (!inputData.email.match(/^\S+@\S+\.\S+$/)) {
      isValidate = false;
      Alert.alert('Please Masukkan Email Nya Ya!');
    }

    if (isValidate) {
      registerData();
    }
  };

  const registerData = () => {
    setTimeout(() => {
      try {
        AsyncStorage.setItem('dataRegister', JSON.stringify(inputData));
        Alert.alert('Register Berhasil');
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Ada Kesalahan!');
      }
    }, 1000);
  };

  return (
    <ImageBackground source={BackgroundUtama} style={{ flex: 1, backgroundColor: '#fff' }} resizeMode="cover">
      <TouchableOpacity onPress={() => navigation.navigate('MainFrame')} style={{ marginTop: 20, height: 'auto', padding: 10, top: 0 }}>
        <ButtonBack width={30} height={30} />
      </TouchableOpacity>
      <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start' }}>
        <ScrollView style={{ flex: 1, rowGap: 30, paddingHorizontal: 20 }} bounces={false} showsVerticalScrollIndicator={false}>
          {/* FORM */}
          <View>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Register</Text>
            <View>
              <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '600', color: '#151515', padding: 5 }}>Email</Text>
              <TextInput style={styles.input} placeholder="Masukkan Email Anda" placeholderTextColor="#D9D9D9" keyboardType="email-address" onChangeText={(value) => handleChangeInput('email', value)} />
            </View>
            <View>
              <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '600', color: '#151515', padding: 5 }}>Nama</Text>
              <TextInput style={styles.input} placeholder="Masukkan Nama Anda" placeholderTextColor="#D9D9D9" keyboardType="default" onChangeText={(value) => handleChangeInput('name', value)} />
            </View>
            <View>
              <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '600', color: '#151515', padding: 5 }}>Password</Text>
              <TextInput style={styles.input} placeholder="Masukkan Password Anda" secureTextEntry={true} placeholderTextColor="#D9D9D9" keyboardType="default" onChangeText={(value) => handleChangeInput('password', value)} />
            </View>
            <View>
              <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '600', color: '#151515', padding: 5 }}>Password</Text>
              <TextInput style={styles.input} placeholder="Masukkan Password Anda Sekali Lagi" secureTextEntry={true} placeholderTextColor="#D9D9D9" keyboardType="default" onChangeText={(value) => handleChangeInput('rePassword', value)} />
            </View>
          </View>
          {/* FORM */}

          {/* OR */}
          <View style={{ flex: 1, rowGap: 20, maxHeight: 120, minHeight: 120, marginTop: 20 }}>
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
          {/* OR */}

          {/* Button */}
          <View style={{ flex: 1, rowGap: 10, maxHeight: 200, minHeight: 200 }}>
            <View style={{ flexDirection: 'row', columnGap: 5, justifyContent: 'center', alignItems: 'center', top: 10 }}>
              <Text style={{ fontSize: 13, fontWeight: 500, color: '#151515' }}>Sudah Memiliki Akun?</Text>
              <TouchableOpacity activeOpacity={0.8} style={{ padding: 10, right: 10 }} onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontSize: 13, fontWeight: 700, color: '#BA704F', textDecorationLine: 'underline' }}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={validate} style={{ width: '100%', backgroundColor: '#BA704F', paddingVertical: 20, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 20, fontWeight: 600 }}>Register</Text>
            </TouchableOpacity>
          </View>
          {/* Button */}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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

export default RegisterPage;
