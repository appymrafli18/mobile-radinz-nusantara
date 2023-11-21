import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackgroundUtama, TrioNingen, teksLogoHitam } from '../assets';

export default function MainFrame({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ImageBackground source={BackgroundUtama} alt="Background" resizeMode="cover" style={styles.backgroundImage}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={TrioNingen} style={{ flex: 1, width: '100%' }} resizeMode="contain" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', width: '100%', maxHeight: 150 }}>
          <Text style={{ fontSize: 27, fontWeight: '700', color: '#151515' }}>Welcome To</Text>
          <Image source={teksLogoHitam} resizeMode="contain" style={{ top: -5 }} />
          <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', color: '#151515', paddingHorizontal: 10 }}>
            Aplikasi yang menyajikan sejarah tentang senjata tradisional yang dimiliki oleh indonesia dan mengenal lebih jauh senjata tradisional yang dimiliki indonesia
          </Text>
        </View>
        <View style={{ flex: 1, rowGap: 20, marginTop: 55 }}>
          <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, maxHeight: 60, borderRadius: 10, minWidth: '100%', backgroundColor: '#BA704F', justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ flex: 1, maxHeight: 60, borderRadius: 10, minWidth: '100%', backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ color: '#151515', fontWeight: '600', fontSize: 20 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
