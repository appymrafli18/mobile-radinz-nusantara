import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import {
  Badik,
  Baladu,
  Busur,
  Celurit,
  GolokBetawi,
  GolokCiomas,
  Kerambit,
  KerisBali,
  KerisJambi,
  LundukSumpit,
  ParangBadau,
  Peda,
  PedangJenawi,
  PisoSurit,
  Rencong,
  Tawalang,
  Terapang,
  TombakPapua,
  TombakYogya,
  Trisula,
} from '../assets/Senjata';
import { FlatList } from 'react-native-gesture-handler';
import { Homebar, Information, Personal } from '../assets';

const HomePage = ({ navigation }) => {
  const dataWeapon = [
    { id: 1, name: 'Badik Tumbuk Lado', image: Badik, location: 'Kepulauan Riau', goTo: 'BadikTumbuk' },
    { id: 2, name: 'Baladu', image: Baladu, location: 'Gorontalo', goTo: 'BaladuPage' },
    { id: 3, name: 'Busur Panah', image: Busur, location: 'Papua', goTo: 'BusurPage' },
    { id: 4, name: 'Celurit', image: Celurit, location: 'Jawa Timur', goTo: 'CeluritPage' },
    { id: 5, name: 'Golok Betawi', image: GolokBetawi, location: 'DKI Jakarta', goTo: '' },
    { id: 6, name: 'Golok Ciomas', image: GolokCiomas, location: 'Banten', goTo: '' },
    { id: 7, name: 'Kerambit', image: Kerambit, location: 'Sumatra Barat', goTo: 'Kerambit' },
    { id: 8, name: 'Keris Bali', image: KerisBali, location: 'Bali', goTo: '' },
    { id: 9, name: 'Keris Jambi', image: KerisJambi, location: 'Jambi', goTo: '' },
    { id: 10, name: 'Lunduk Sumpit', image: LundukSumpit, location: 'Kalimantan Tengah', goTo: '' },
    { id: 11, name: 'Parang Badau', image: ParangBadau, location: 'Bangka Belitung', goTo: '' },
    { id: 12, name: 'Peda', image: Peda, location: 'Sulawesi Utara', goTo: '' },
    { id: 13, name: 'Pedang Jenawi', image: PedangJenawi, location: 'Riau', goTo: '' },
    { id: 14, name: 'Piso Surit', image: PisoSurit, location: 'Sumatra Utara', goTo: '' },
    { id: 15, name: 'Rencong', image: Rencong, location: 'Aceh', goTo: '' },
    { id: 16, name: 'Tawalang', image: Tawalang, location: 'Kalimantan', goTo: '' },
    { id: 17, name: 'Terapang', image: Terapang, location: 'Lampung', goTo: '' },
    { id: 18, name: 'Tombak Papua', image: TombakPapua, location: 'Papua', goTo: '' },
    { id: 19, name: 'Tombak Yogyakarta', image: TombakYogya, location: 'DI Yogyakarta', goTo: '' },
    { id: 20, name: 'Trisula', image: Trisula, location: 'Sumatra Selatan', goTo: '' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, position: 'relative' }}>
        <View style={{ marginBottom: 20, marginTop: 30 }}>
          <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: '#BA704F', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 10 }} onPress={() => navigation.navigate('Kerambit')}>
            <Kerambit width={200} height={230} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ maxHeight: 380, marginBottom: 20 }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={dataWeapon}
          nestedScrollEnabled
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(`${item.goTo}`)}
              style={{ width: '100%', borderRadius: 20, backgroundColor: '#6C3428', height: 100, flexDirection: 'row', alignItems: 'center', columnGap: 20, marginBottom: 20, backgroundColor: '#BA704F' }}
              activeOpacity={0.8}
            >
              <View style={{ width: 100, height: 100, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: '#fff', borderColor: '#BA704F', borderWidth: 3, justifyContent: 'center', alignItems: 'center' }}>
                <item.image width={100} height={100} />
              </View>
              <View>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>{item.name}</Text>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>{item.location}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
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
            marginTop: 20,
          }}
        >
          {/* <Text>Button Bar</Text> */}
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

export default HomePage;
