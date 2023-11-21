import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Kerambit } from '../../assets/Senjata';

export default function KerambitPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', backgroundColor: '#BA704F', maxHeight: 200, minHeight: 200, marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Kerambit width={300} height={200} style={{ transform: [{ rotate: '45deg' }] }} />
        </View>
        <View style={{ width: '100%', marginTop: 20, height: 40, backgroundColor: '#BA704F', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'justify', width: '100%', textAlign: 'center', color: '#fff' }}>Kerambit</Text>
        </View>
        <View style={{ width: '100%', marginTop: 40, backgroundColor: '#BA704F', padding: 10, borderRadius: 10, rowGap: 20, marginBottom: 30 }}>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Kerambit adalah pisau genggam kecil berbentuk melengkung yang digunakan pendekar di Minangkabau, dan tersebar ke Indonesia, Malaysia, Negara Barat menyebut pisau ini kerambit, sedangkan di Minangkabau disebut kurambik, karambik,
            kurambiak/karambiak. Senjata ini termasuk senjata berbahaya karena dapat digunakan menyayat maupun merobek anggota tubuh lawan secara cepat dan tidak terdeteksi.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Berdasarkan sejarah tertulis, kerambit berasal dari Minangkabau. Kemudian, benda ini dibawa oleh para perantau Minangkabau berabad yang lalu dan menyebar ke berbagai wilayah, seperti Jawa, Semenanjung Melayu, dan lain-lain.
            Menurut cerita rakyat, bentuk kerambit terinspirasi oleh cakar harimau yang memang banyak berkeliaran di hutan Sumatra pada masa itu.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Senjata di sebagian besar kawasan Nusantara, pada awalnya merupakan alat pertanian yang dirancang untuk menyapu akar, mengumpulkan batang padi, dan alat pengirikan padi. Namun berbeda dengan kerambit, ia sengaja dirancang lebih
            melengkung seperti kuku harimau, setelah melihat harimau bertarung dengan menggunakan cakarnya, hal ini sejalan dengan falsafah Minangkabau yang berbunyi, Alam takambang jadi guru. Kerambit akhirnya tersebar melalui jaringan
            perdagangan Asia Tenggara hingga ke negara-negara, Kamboja, Laos, Malaysia, Myanmar, Filipina, dan Thailand.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
