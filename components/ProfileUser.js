import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Homebar, Information, Personal, ProfilePerson } from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileUser = ({ navigation }) => {
  const [dataProfile, setDataProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dataRegister = JSON.parse(await AsyncStorage.getItem('dataRegister'));
    if (dataRegister) {
      setDataProfile(() => ({ name: dataRegister.name, email: dataRegister.email }));
    }
  };

  const logOut = () => {
    Alert.alert('Berhasil Logout !');
    navigation.navigate('MainFrame');
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, position: 'relative', alignItems: 'center' }}>
        <View style={{ borderRadius: 200, backgroundColor: '#d9d9d9', marginTop: 25 }}>
          <ProfilePerson width={200} height={200} />
        </View>
        <View style={{ width: 'auto', backgroundColor: '#6C3428', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 1000, rowGap: 10, marginTop: 28 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#fff' }}>{dataProfile.name}</Text>
        </View>
        <View style={{ width: 'auto', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 1000, rowGap: 10, marginTop: 3 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '600' }}>{dataProfile.email}</Text>
        </View>
        <TouchableOpacity onPress={logOut} style={{ width: '100%', backgroundColor: '#BA704F', paddingVertical: 20, borderRadius: 10, marginTop: 250 }}>
          <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 20, fontWeight: 600 }}>Logout</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            borderTopWidth: 1,
            bottom: 0,
            right: 0,
            borderColor: 'rgba(21, 21, 21, 0.5)',
            left: 0,
            height: 90,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            columnGap: 90,
          }}
        >
          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Informasi')}>
            <Information width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Homepage')}>
            <Homebar width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('ProfileUser')}>
            <Personal width={30} height={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileUser;
