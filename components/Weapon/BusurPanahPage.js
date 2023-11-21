import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Busur } from '../../assets/Senjata';

export default function BusurPanahPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', backgroundColor: '#BA704F', maxHeight: 200, minHeight: 200, marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Busur width={300} height={220} style={{ transform: [{ rotate: '-125deg' }] }} />
        </View>
        <View style={{ width: '100%', marginTop: 20, height: 40, backgroundColor: '#BA704F', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'justify', width: '100%', textAlign: 'center', color: '#fff' }}>Busur & Panah Papua</Text>
        </View>
        <View style={{ width: '100%', marginTop: 40, backgroundColor: '#BA704F', padding: 10, borderRadius: 10, rowGap: 20, marginBottom: 30 }}>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Setiap suku di Papua, mereka memiliki busur dan panah dengan jenis yang berbeda-beda, baik bentuk, fungsi, bahan pembuatannya, bahkan penyebutannya juga berbeda-beda, Pada Suku Muyu, salah satu suku yang ada di Papua, busur
            disebut Tinim, sedangkan Panah adalah Ando.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Bahan pembuatan busur atau Tinim berasal dari pohon sejenis palem atau enau kecil. Pohon tersebut dibelah selebar tiga jari. Kemudian, ujung busur diikat dengan ujung busur yang lainnya membentuk setengah lingkaran.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Selain itu, busur menggunakan bambu khusus yang telah dihaluskan untuk diletakkan di bagian tengah, bambu diikat dengan tali genemo yang telah dipintal untuk menahan bambu. Sementara, bahan panah atau ando dibuat dari alip atau
            pohon kasim sejenis pohon bambu yang diambil dari hutan. Pohon ini lalu diolah dengan menggunakan api supaya lurus. Setelah lurus, panah dipasang mata panah yang terbuat dari bambu.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Sebelumnya, bambu yang akan digunakan sebagai mata panah telah dibentuk terlebih dahulu. Mata anak panah dibuat dalam tiga macam bentuk, yaitu jubi, kanat (pisau bermata dua), dan tombak (bergerigi terbalik).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
