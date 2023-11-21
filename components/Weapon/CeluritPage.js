import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Celurit } from '../../assets/Senjata';

export default function CeluritPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', backgroundColor: '#BA704F', maxHeight: 200, minHeight: 200, marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Celurit width={300} height={220} style={{ transform: [{ rotate: '-125deg' }] }} />
        </View>
        <View style={{ width: '100%', marginTop: 20, height: 40, backgroundColor: '#BA704F', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'justify', width: '100%', textAlign: 'center', color: '#fff' }}>Celurit</Text>
        </View>
        <View style={{ width: '100%', marginTop: 40, backgroundColor: '#BA704F', padding: 10, borderRadius: 10, rowGap: 20, marginBottom: 30 }}>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Celurit atau clurit merupakan senjata tradisional khas Madura. Senjata tajam berbilah melengkung ini erat kaitannya dengan budaya carok di Madura. Carok dan clurit laksana dua sisi mata uang yang tak terpisahkan.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Clurit merupakan salah satu identitas orang Madura. Meski banyak orang menghubungkan senjata ini dengan tindakan kekerasan, bagi orang Madura, clurit memiliki makna tersendiri.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Celurit merupakan simbol kejantanan laki-laki, juga simbol perlawanan rakyat jelata. Konon, barisan tulang rusuk laki-laki berkurang karena diciptakan oleh Allah menjadi perempuan. Nah, untuk bagian yang hilang itu, orang Madura
            menggantinya dengan clurit. Bentuk celurit yang bengkok diibaratkan tulang rusuk yang berkurang itu. Dengan adanya celurit, kejantanan laki-laki tidak berkurang. Dan karena maknanya mengganti tulang rusuk yang hilang itu,
            celurit biasanya diselipkan di pinggang bagian kiri.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Celurit memiliki bilah terbuat dari besi berbentuk melengkung mirip bukan sabit sebagai ciri khasnya. Pada umumnya celurit diwadahi sarung terbuat dari kulit sapi atau kerbau yang tebal. Sementara gagangnya terbuat dari kayu.
            Bilah celurit memiliki ikatan yang melekat pada gagang kayu serta menembus sampai ujung gagang.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Ada beberapa macam jenis celurit, di antaranya takabuan. Jenis yang biasanya digunakan untuk carok ini sangat diminati oleh banyak orang Madura, khususnya di kawasan Madura Barat. Nama takabuan berasal dari nama desa tempat di
            mana senjata ini dibuat, yaitu Desa Takabu. Selain bentuknya yang indah, tingkat ketajaman celurit takabuan dapat diandalkan karena terbuat dari bahan baja campuran besi berkualitas baik.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Jenis clurit yang lain adalah dhang osok. Nama dhang osok diambil dari nama salah satu jenis buah pisang yang ukurannya lebih panjang dari ukuran rata-rata pisang biasa. Kata dhang berasal dari kata gedhang (pisang), sedangkan
            osok menunjukkan jenis buah pisang tersebut. Oleh karena itu, celurit dhang osok memiliki bentuk seperti buah pisang dan memiliki panjang yang melebihi dari ukuran rata-rata celurit biasa. Jenis clurit ini juga digunakan sebagai
            alat pertahanan diri. Tidak seperti jenis celurit lain yang bisa dibawa-bawa, celurit dhang osok berukuran besar maka tidak dibawa bepergian.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Jenis celurit lainnya antara lain tekos bu-ambu (bentuknya seperti tikus sedang diam), dan celurit bulu ajem (bulu ayam, lancor ayam). Jenis celurit yang diperuntukkan khusus sebagai senjata tajam atau sebagai lambang kesatriaan
            berbeda bentuk, kualitas, dan proses pembuatannya dengan yang digunakan untuk keperluan pertanian dan rumah tangga. Bagi orang Madura, jenis clurit ini merupakan karya seni dan tidak boleh dipergunakan sembarangan.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
