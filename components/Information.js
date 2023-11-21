import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ProfileFredi, ProfileHeinz, ProfileRafli } from '../assets';

const Information = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView centerContent={true} style={{ paddingVertical: 10 }} bounces={false} showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#151515', textAlign: 'center', width: '100%', marginTop: 20 }}>Tentang Aplikasi Radinz Nusantara</Text>
            <View style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#6C3428', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, rowGap: 10, marginBottom: 20, marginTop: 10 }}>
              <Text style={{ color: '#fff', textAlign: 'justify', fontSize: 12.5, fontWeight: '400' }}>
                Hi Pengguna Aplikasi Radinz Nusantara, Pada tanggal 24 October 2023 Kami di berikan tugas oleh pembimbing kami untuk menyelesaikan sebuah masalah bagaimana caranya kita untuk melestarikan senjata tradisional yang telah di
                ciptakan oleh nenek moyang kita di indonesia. Oleh karena itu kami disini membuat aplikasi untuk melestarikan Senjata Tradisional yang di ciptakan oleh nenek moyang kita agar semua warga indonesia mengetahui senjata-senjata
                yang telah di ciptakan oleh nenek moyang untuk perjuangan kemerdekaan indonesia.
              </Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: 'rgba(21, 21, 21, 0.60)', zIndex: 1, backgroundColor: '#fff', backgroundColor: '#fff', textAlign: 'center', paddingHorizontal: 8 }}>Pengembang</Text>
              <View style={{ width: '100%', height: 0, borderColor: 'rgba(21, 21, 21, 0.60)', borderWidth: 1, top: -10.5 }}></View>
            </View>
            <View style={{ width: '100%', rowGap: 20, marginBottom: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileRafli')}
                style={{ width: '100%', borderRadius: 20, backgroundColor: '#6C3428', height: 100, flexDirection: 'row', alignItems: 'center', columnGap: 20 }}
                activeOpacity={0.8}
              >
                <Image source={ProfileRafli} style={{ width: 100, height: 100, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                <View>
                  <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>Muhammad Rafli</Text>
                  <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Rekayasa Perangkat Lunak</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileHeinz')}
                style={{ width: '100%', borderRadius: 20, backgroundColor: '#6C3428', height: 100, flexDirection: 'row', alignItems: 'center', columnGap: 20 }}
                activeOpacity={0.8}
              >
                <Image source={ProfileHeinz} style={{ width: 100, height: 100, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                <View>
                  <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>Heinz Darell Kristian</Text>
                  <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Rekayasa Perangkat Lunak</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileFredi')}
                style={{ width: '100%', borderRadius: 20, backgroundColor: '#6C3428', height: 100, flexDirection: 'row', alignItems: 'center', columnGap: 20 }}
                activeOpacity={0.8}
              >
                <Image source={ProfileFredi} style={{ width: 100, height: 100, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                <View>
                  <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>Fredi Setiawan</Text>
                  <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Rekayasa Perangkat Lunak</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: 'rgba(21, 21, 21, 0.60)', zIndex: 1, backgroundColor: '#fff', backgroundColor: '#fff', textAlign: 'center', paddingHorizontal: 8 }}>Sponsorship</Text>
              <View style={{ width: '100%', height: 0, borderColor: 'rgba(21, 21, 21, 0.60)', borderWidth: 1, top: -10.5 }}></View>
            </View>
            <TouchableOpacity style={{ width: '100%', marginBottom: 30 }}>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#151515', textAlign: 'justify' }}>https://www.pacdora.com/dielines-detail/bottles-plastic-product-label-dieline-504310?id=15870704</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Information;
