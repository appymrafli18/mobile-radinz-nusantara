import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Baladu } from '../../assets/Senjata';

export default function BaladuPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', backgroundColor: '#BA704F', maxHeight: 200, minHeight: 200, marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Baladu width={300} height={220} />
        </View>
        <View style={{ width: '100%', marginTop: 20, height: 40, backgroundColor: '#BA704F', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'justify', width: '100%', textAlign: 'center', color: '#fff' }}>Baladu</Text>
        </View>
        <View style={{ width: '100%', marginTop: 40, backgroundColor: '#BA704F', padding: 10, borderRadius: 10, rowGap: 20, marginBottom: 30 }}>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Baladu merupakan senjata tradisional masyarakat Gorontalo yang digunakan di dalam perang pada zaman dahulu.senjata ini termasuk senjata yang di pakai masyarakat Gorontalo pada perang Panipi, sebagaimana yang telah di uraikan
            sebelumnya. Senjata ini di miliki oleh seluruh pengawal raja di tiap tiap kerajaan yang ada di setiap Gorontalo pada masa itu untuk membela diri di saat bahaya datang. Melalui pendekatan secara fungsional senjata tradisional
            baladu dapat diuraikan menjadi tiga bagian yaitu gagang senjata (pandungo), mata senjata dan sarung senjata (taupo) dengan bentuk dasar dasar yang menyusunnya sebagai berikut:
          </Text>
          <View style={{ width: '100%' }}>
            <Text style={{ textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
              A. Bagian gagang berbentuk dari bangun ruang silinder. Bentuk dasar yang menyusun bagian gagang adalah dua bentuk lingkaran dan satu bentuk segi empat yang menjadi bagun ruang silinder ( batang gagang).
            </Text>
            <Text style={{ textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
              B. Bagian mata terbentuk dari bangun ruang kerucut bentuk dasar yang menyusun bagian mata adalah satu bentuk lingkaran dan satu bentuk segitiga yang menjadi bangun kerucut ( mata senjata).
            </Text>
            <Text style={{ textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
              C. Bagian sarung terbentuk dari tiga bangun ruang silinder. bentuk dasar yang menyusun bagian sarung adalah satu bentuk segi empat dan dua bentuk lingkaran yang menjadi bangun ruang silinder (batang sarung).
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
