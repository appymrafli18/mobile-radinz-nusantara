import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { DetailRafli } from '../../assets';

const Rafli = () => {
  const listAhlian = [
    { key: '1', text: 'Menguasai Frontend Development' },
    { key: '2', text: 'Menguasai Backend Development' },
    { key: '3', text: 'Menguasai UI/UX' },
    { key: '4', text: 'Mengetahui Tentang Game Development' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bounces={false}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 28 }}>
          <Image source={DetailRafli} resizeMode="contain" style={{ width: '100%', marginVertical: 25 }} />
          <View style={{ width: 'auto', backgroundColor: '#6C3428', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 1000, rowGap: 10, marginBottom: 37 }}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#fff' }}>Muhammad Rafli</Text>
          </View>
          <View style={{ rowGap: 15, paddingHorizontal: 10, paddingVertical: 10, width: '100%', backgroundColor: '#6C3428', borderRadius: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#fff' }}>Tentang</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'left', color: '#fff' }}>Hobby : Mengeksplore semua hal tentang teknologi</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'left', color: '#fff' }}>Nickname : REPPU</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'left', color: '#fff' }}>Usia : 17 Tahun</Text>
            <View>
              <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'left', color: '#fff' }}>Keahlian :</Text>
              <FlatList data={listAhlian} renderItem={({ item }) => <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'left', color: '#fff' }}>• {item.text}</Text>} keyExtractor={(item) => item.key} scrollEnabled={false} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rafli;
