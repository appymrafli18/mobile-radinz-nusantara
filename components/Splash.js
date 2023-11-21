import { Image, ImageBackground, StyleSheet } from 'react-native';
import { BackgroundLoading, LogoLoading } from '../assets';
import React, { useEffect } from 'react';

export default function SplashLoading({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainFrame');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={BackgroundLoading} resizeMode="cover" style={styles.images}>
      <Image source={LogoLoading} style={styles.logoLoading} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  images: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C3428',
  },
  logoLoading: {
    width: 300,
    height: 300,
    zIndex: 1,
  },
});
