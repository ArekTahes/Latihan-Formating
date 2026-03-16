import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import { generateLocalBusinessSchema, generateWebPageSchema } from '@/lib/schema'

export const metadata: Metadata = generatePageSEO({
  title: 'Instalasi Listrik Surabaya Aman & Rapi - Jasa Tukang Listrik Profesional',
  description: 'Layanan instalasi listrik Surabaya untuk rumah, kantor, ruko, dan usaha. Melayani pemasangan instalasi baru, perbaikan korsleting, upgrade panel, tambah titik listrik, dan pengecekan keamanan listrik.',
  path: '/instalasi-listrik-surabaya',
  keywords: [
    'instalasi listrik surabaya',
    'jasa instalasi listrik surabaya',
    'tukang listrik surabaya',
    'perbaikan listrik surabaya',
    'teknisi listrik surabaya',
    'jasa listrik panggilan surabaya',
  ],
})

export default function InstalasiListrikSurabayaPage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const webPageSchema = generateWebPageSchema({
    title: 'Instalasi Listrik Surabaya Aman & Rapi',
    description: 'Landing page jasa instalasi listrik Surabaya untuk pemasangan, perbaikan, dan maintenance kelistrikan.',
    path: '/instalasi-listrik-surabaya',
  })

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8" aria-label="Landing page instalasi listrik Surabaya">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema).replace(/</g, '\\u003c') }}
      />

      <article className="space-y-10 text-gray-700 leading-8">
        <header className="space-y-5">
          <h1 className="text-3xl font-bold text-secondary-900 md:text-4xl">Instalasi Listrik Surabaya Profesional</h1>
          <p>
            CV. Arsa Prima Solution menyediakan layanan <strong>instalasi listrik Surabaya</strong> untuk kebutuhan
            rumah tinggal, kantor, ruko, gudang, hingga area usaha skala menengah. Kami melayani pemasangan
            instalasi listrik baru, penataan ulang jalur kabel, penambahan titik stop kontak, pemasangan panel,
            hingga penanganan korsleting mendadak. Fokus utama kami adalah keamanan, kerapian pekerjaan,
            dan ketahanan sistem kelistrikan untuk pemakaian jangka panjang.
          </p>
          <p>
            Dalam pekerjaan kelistrikan, kesalahan kecil bisa menimbulkan risiko besar. Karena itu, seluruh proses
            kami kerjakan dengan standar teknis yang ketat, mulai dari inspeksi awal, pemilihan material,
            pemasangan komponen, hingga uji fungsi akhir. Jika Anda membutuhkan <strong>tukang listrik Surabaya</strong>
            yang komunikatif dan tepat waktu, tim kami siap membantu. Kami menjelaskan kebutuhan pekerjaan secara
            transparan agar pelanggan memahami prioritas perbaikan maupun pemasangan sebelum pekerjaan dimulai.
          </p>
        </header>

        <section aria-labelledby="layanan-listrik" className="space-y-4">
          <h2 id="layanan-listrik" className="text-2xl font-semibold text-secondary-900">Layanan Instalasi & Perbaikan Listrik</h2>
          <p>
            Kami menyediakan layanan kelistrikan yang bisa disesuaikan dengan kondisi bangunan dan kebutuhan daya.
            Setiap pekerjaan dimulai dari evaluasi lapangan agar solusi yang diberikan lebih akurat.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Pemasangan instalasi listrik baru untuk rumah, ruko, dan kantor</li>
            <li>Perbaikan listrik korslet, MCB sering turun, dan tegangan tidak stabil</li>
            <li>Penambahan titik lampu, saklar, dan stop kontak sesuai kebutuhan ruang</li>
            <li>Pemasangan panel listrik serta penataan jalur distribusi daya</li>
            <li>Pengecekan grounding dan peningkatan proteksi keamanan listrik</li>
            <li>Upgrade kapasitas jalur listrik untuk perangkat berdaya besar</li>
            <li>Perapihan ulang instalasi kabel lama agar lebih aman dan terstruktur</li>
            <li>Maintenance sistem kelistrikan berkala untuk properti komersial</li>
          </ul>
        </section>

        <section aria-labelledby="kenapa-listrik" className="space-y-4">
          <h2 id="kenapa-listrik" className="text-2xl font-semibold text-secondary-900">Kenapa Harus Ditangani Teknisi Listrik Berpengalaman?</h2>
          <p>
            Masalah listrik sering terlihat sepele, misalnya lampu redup, stop kontak panas, atau MCB trip sesekali.
            Namun gejala tersebut bisa menjadi tanda adanya beban berlebih, sambungan longgar, atau kualitas kabel
            yang tidak sesuai. Jika dibiarkan, risiko kerusakan perangkat elektronik meningkat dan potensi bahaya
            kebakaran menjadi lebih tinggi. Dengan memanggil <strong>jasa instalasi listrik Surabaya</strong> yang tepat,
            Anda dapat memastikan sistem listrik lebih aman untuk keluarga maupun aktivitas bisnis.
          </p>
          <p>
            Tim kami melakukan pengecekan menyeluruh untuk memastikan setiap titik bekerja sesuai fungsi.
            Kami juga memberikan saran penggunaan daya yang lebih efisien agar konsumsi listrik tetap terkontrol.
            Untuk bangunan lama, evaluasi ulang instalasi sangat penting karena kebutuhan daya saat ini biasanya
            jauh lebih besar dibanding desain awal instalasi. Pendekatan ini membantu mencegah gangguan listrik
            berulang yang bisa menghambat aktivitas harian di rumah maupun operasional usaha.
          </p>
        </section>

        <section aria-labelledby="area-listrik" className="space-y-4">
          <h2 id="area-listrik" className="text-2xl font-semibold text-secondary-900">Area Jasa Listrik Surabaya dan Sekitar</h2>
          <p>
            Kami melayani <strong>perbaikan listrik Surabaya</strong> untuk wilayah Surabaya Timur, Surabaya Barat,
            Surabaya Selatan, Surabaya Utara, dan Surabaya Pusat. Area yang sering kami tangani mencakup Rungkut,
            Wiyung, Wonokromo, Gubeng, Sukolilo, Tandes, Kenjeran, Dukuh Pakis, hingga kawasan perumahan baru.
            Layanan juga tersedia untuk Sidoarjo serta Gresik dengan penyesuaian jadwal kunjungan.
          </p>
          <p>
            Agar proses penanganan lebih cepat, Anda dapat menyampaikan gejala masalah, kapasitas daya listrik,
            dan jenis bangunan saat melakukan pemesanan. Informasi ini membantu teknisi mempersiapkan perlengkapan
            yang tepat sebelum datang ke lokasi. Dengan persiapan yang baik, pekerjaan instalasi dan perbaikan
            dapat diselesaikan lebih efisien tanpa mengganggu aktivitas utama penghuni atau tim operasional bisnis.
          </p>
        </section>

        <section aria-labelledby="tips-kelistrikan" className="space-y-4">
          <h2 id="tips-kelistrikan" className="text-2xl font-semibold text-secondary-900">Tips Keamanan Instalasi Listrik Rumah & Usaha</h2>
          <p>
            Salah satu langkah penting untuk menjaga keamanan listrik adalah memastikan pembagian beban per sirkuit
            dilakukan dengan benar. Hindari menumpuk terlalu banyak perangkat berdaya besar pada satu jalur karena
            dapat menyebabkan MCB sering trip dan mempercepat panas berlebih pada kabel. Gunakan komponen berkualitas,
            seperti kabel sesuai kapasitas arus, MCB yang tepat, dan stop kontak standar. Jika bangunan sudah cukup lama,
            evaluasi ulang jalur instalasi sangat disarankan agar tetap sesuai kebutuhan daya saat ini.
          </p>
          <p>
            Selain itu, lakukan pengecekan rutin pada panel listrik, sambungan kabel, dan titik stop kontak yang paling
            sering dipakai. Tanda seperti bau gosong, percikan kecil, atau stop kontak terasa panas tidak boleh diabaikan.
            Penanganan cepat bisa mencegah gangguan lebih besar dan menjaga keselamatan penghuni. Untuk area usaha,
            sistem kelistrikan yang stabil juga membantu mencegah downtime operasional. Melalui inspeksi berkala,
            Anda dapat mengetahui kondisi instalasi secara dini dan merencanakan perbaikan dengan biaya yang lebih terukur.
          </p>
        </section>

        <section aria-labelledby="estimasi-jasa-listrik" className="space-y-4">
          <h2 id="estimasi-jasa-listrik" className="text-2xl font-semibold text-secondary-900">Alur Pengerjaan Jasa Instalasi Listrik Surabaya</h2>
          <p>
            Setiap pekerjaan kelistrikan dimulai dari inspeksi titik beban, jalur distribusi, serta kondisi panel utama.
            Dari hasil inspeksi tersebut, teknisi menyusun rencana kerja yang mencakup kebutuhan material,
            urutan pemasangan atau perbaikan, dan estimasi waktu pengerjaan. Kami menekankan proses yang terstruktur
            agar pekerjaan berjalan efisien sekaligus meminimalkan gangguan terhadap aktivitas penghuni atau operasional
            bisnis. Untuk proyek instalasi baru, penataan jalur kabel dilakukan dengan mempertimbangkan faktor keamanan,
            kemudahan perawatan, dan potensi pengembangan daya di masa mendatang.
          </p>
          <p>
            Pada pekerjaan perbaikan, prioritas utama kami adalah memastikan sumber masalah benar-benar teratasi,
            bukan hanya menormalkan gejala sementara. Setelah tindakan selesai, teknisi melakukan pengujian ulang
            pada titik-titik kritis untuk memastikan sistem berjalan stabil. Anda juga akan mendapatkan penjelasan
            ringkas mengenai kebiasaan penggunaan listrik yang lebih aman agar risiko gangguan berulang dapat ditekan.
            Dengan alur kerja yang jelas dan terukur, layanan kami membantu menjaga instalasi listrik tetap andal,
            aman digunakan, serta mendukung kenyamanan jangka panjang di rumah maupun tempat usaha.
          </p>
        </section>

        <section aria-labelledby="internal-links" className="space-y-4">
          <h2 id="internal-links" className="text-2xl font-semibold text-secondary-900">Layanan Terkait dari CV. Arsa Prima Solution</h2>
          <p>
            Selain jasa instalasi listrik, kami juga menangani perbaikan perangkat pendingin dan elektronik rumah tangga.
            Anda bisa membuka halaman berikut untuk melihat layanan lengkap sesuai kebutuhan.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/servis-ac-surabaya" className="text-primary-600 hover:text-primary-700">Servis AC Surabaya</Link></li>
            <li><Link href="/servis-mesin-cuci-surabaya" className="text-primary-600 hover:text-primary-700">Servis Mesin Cuci Surabaya</Link></li>
            <li><Link href="/servis-kulkas-surabaya" className="text-primary-600 hover:text-primary-700">Servis Kulkas Surabaya</Link></li>
            <li><Link href="/layanan/instalasi-listrik" className="text-primary-600 hover:text-primary-700">Halaman detail Instalasi Listrik</Link></li>
            <li><Link href="/kontak" className="text-primary-600 hover:text-primary-700">Hubungi admin untuk jadwal teknisi</Link></li>
          </ul>
        </section>

        <section aria-labelledby="cta-listrik" className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-3">
          <h2 id="cta-listrik" className="text-2xl font-semibold text-secondary-900">Butuh Jasa Listrik Surabaya yang Aman?</h2>
          <p>
            Hubungi CV. Arsa Prima Solution untuk konsultasi dan penjadwalan teknisi. Kami siap membantu
            instalasi baru maupun perbaikan gangguan listrik dengan proses kerja rapi, cepat, dan terukur.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/kontak" className="btn-primary">Pesan Teknisi Listrik</Link>
            <Link href="/layanan" className="btn-secondary">Lihat Semua Layanan</Link>
          </div>
        </section>
      </article>
    </main>
  )
}
