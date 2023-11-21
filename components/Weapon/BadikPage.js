import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Badik } from '../../assets/Senjata';

export default function BadikPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', backgroundColor: '#BA704F', maxHeight: 200, minHeight: 200, marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Badik width={300} height={220} />
        </View>
        <View style={{ width: '100%', marginTop: 20, height: 40, backgroundColor: '#BA704F', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'justify', width: '100%', textAlign: 'center', color: '#fff' }}>Badik Tumbuk Lado</Text>
        </View>
        <View style={{ width: '100%', marginTop: 40, backgroundColor: '#BA704F', padding: 10, borderRadius: 10, rowGap: 20, marginBottom: 30 }}>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Badik Tumbuk Lado merupakan senjata tradisional khas Kepulauan Riau. Sebagai salah satu senjata, Badik Tumbuk Lado sering digunakan untuk pembelaan diri dari serangan musuh serta untuk mempertahankan harga diri seseorang atau
            keluarga. Sebenarnya nama 'Badik' merujuk pada sebutan untuk senjata tradisional. Istilah ini cukup dikenal dan sering digunakan dalam masyarakat Bugis dan beberapa daerah di Pulau Sumatera.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Menurut Rahmat M dalam buku Mengenal Senjata Tradisional (2010), badik bentuknya seperti pisau belati. Bahan utama pembuatannya berasal dari campuran besi, baja, serta pamor. Ukuran bilah badik sekitar 20 hingga 30 sentimeter.
            Ukuran ini belum termasuk bagian hulu badiknya. Badik Tumbuk Lado diberikan sarung sebagai penutupnya. Sarungnya terbuat dari bahan kayu lunak, yang kemudian dilapisi dengan lempengan emas atau perak.Artikel ini telah tayang di
            Kompas.com dengan judul "Badik Tumbuk Lado, Senjata Tradisional Kepulauan Riau.
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Masyarakat Kepulauan Riau juga sering memanfaatkan Badik Tumbuk Lado untuk kegiatan berburu serta bercocok tanam. Kini badik lebih banyak dipakai untuk aktivitas lain dibandingkan untuk berkelahi, karena dianggap kurang efisien
            kita dibaca
          </Text>
          <Text style={{ width: '100%', textAlign: 'justify', fontSize: 12, fontWeight: 500, color: '#fff' }}>
            Badik dibagi menjadi beberapa jenis, tergantung pada daerahnya. Badik Tumbuk Lado di Kepulauan Riau biasanya diberi racun dibagian bilah badikArtikel ini telah tayang di Kompas.com dengan judul "Badik Tumbuk Lado, Senjata
            Tradisional Kepulauan Riau
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
