import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import { generateLocalBusinessSchema, generateWebPageSchema } from '@/lib/schema'

export const metadata: Metadata = generatePageSEO({
  title: 'Servis Kulkas Surabaya Terpercaya - Teknisi Kulkas Panggilan Bergaransi',
  description: 'Layanan servis kulkas Surabaya untuk kulkas tidak dingin, bocor, berisik, mati total, hingga ganti kompresor. Jasa servis kulkas Surabaya untuk rumah, toko, dan usaha dengan teknisi berpengalaman.',
  path: '/servis-kulkas-surabaya',
  keywords: [
    'servis kulkas surabaya',
    'jasa servis kulkas surabaya',
    'teknisi kulkas surabaya',
    'service kulkas panggilan surabaya',
    'kulkas tidak dingin surabaya',
    'isi freon kulkas surabaya',
  ],
})

export default function ServisKulkasSurabayaPage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const webPageSchema = generateWebPageSchema({
    title: 'Servis Kulkas Surabaya Terpercaya',
    description: 'Landing page layanan servis kulkas Surabaya untuk rumah, toko, UMKM, dan usaha kuliner.',
    path: '/servis-kulkas-surabaya',
  })

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8" aria-label="Landing page servis kulkas Surabaya">
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
          <h1 className="text-3xl font-bold text-secondary-900 md:text-4xl">Servis Kulkas Surabaya Cepat & Bergaransi</h1>
          <p>
            CV. Arsa Prima Solution menyediakan layanan <strong>servis kulkas Surabaya</strong> untuk berbagai
            kebutuhan rumah tangga dan usaha. Kami menangani kulkas 1 pintu, 2 pintu, side by side, hingga unit
            inverter dari beragam merek populer. Keluhan yang sering kami tangani meliputi kulkas tidak dingin,
            freezer kurang beku, kulkas bocor, suara berisik, hingga kulkas mati total. Teknisi akan melakukan
            pemeriksaan menyeluruh agar penyebab utama kerusakan bisa ditemukan sebelum dilakukan perbaikan.
          </p>
          <p>
            Dalam pekerjaan sehari-hari, kami sering menemui kerusakan yang sebenarnya bisa dicegah dengan perawatan
            rutin. Debu pada kondensor, seal pintu yang sudah tidak rapat, atau freon yang berkurang secara perlahan
            bisa menurunkan performa pendinginan tanpa disadari. Karena itu, layanan kami tidak hanya fokus pada
            perbaikan saat rusak, tetapi juga memberikan rekomendasi perawatan yang realistis. Jika Anda mencari
            <strong>jasa servis kulkas Surabaya</strong> yang jujur, jelas, dan rapi, tim kami siap membantu.
          </p>
        </header>

        <section aria-labelledby="layanan-servis-kulkas" className="space-y-4">
          <h2 id="layanan-servis-kulkas" className="text-2xl font-semibold text-secondary-900">Layanan Perbaikan Kulkas</h2>
          <p>
            Setiap unit kulkas memiliki karakteristik sistem pendingin yang berbeda. Oleh sebab itu, teknisi kami
            melakukan pengecekan menyeluruh mulai dari suhu, aliran refrigerant, kondisi kompresor, hingga kelistrikan.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Servis kulkas tidak dingin dan pendinginan tidak merata</li>
            <li>Perbaikan kulkas bocor, netes air, atau embun berlebih</li>
            <li>Isi freon kulkas dan pengecekan kebocoran pipa</li>
            <li>Penggantian kompresor kulkas dan komponen pendukung</li>
            <li>Perbaikan thermostat, timer defrost, dan fan motor</li>
            <li>Servis kulkas berisik, mati mendadak, atau listrik tidak stabil</li>
            <li>Perawatan kulkas untuk rumah, kos, toko, dan usaha kuliner</li>
            <li>Pengecekan karet pintu agar suhu dingin tetap terjaga optimal</li>
          </ul>
        </section>

        <section aria-labelledby="kapan-harus-servis" className="space-y-4">
          <h2 id="kapan-harus-servis" className="text-2xl font-semibold text-secondary-900">Kapan Kulkas Harus Segera Diservis?</h2>
          <p>
            Tanda paling mudah dikenali adalah makanan cepat basi, minuman tidak cukup dingin, atau freezer tidak
            membentuk beku seperti biasanya. Gejala lain yang sering muncul adalah suara kompresor lebih keras,
            dinding kulkas berembun, dan konsumsi listrik terasa meningkat. Jika gejala ini dibiarkan, komponen utama
            seperti kompresor bisa bekerja terlalu berat dan berpotensi rusak. Penanganan sejak awal biasanya membuat
            proses perbaikan lebih cepat dan biayanya lebih efisien.
          </p>
          <p>
            Untuk pelaku usaha kuliner, pendinginan kulkas sangat berpengaruh pada kualitas bahan baku.
            Kulkas yang tidak stabil bisa menyebabkan kerugian stok dan gangguan operasional harian.
            Itulah sebabnya banyak pelanggan bisnis memilih layanan <strong>service kulkas panggilan Surabaya</strong>
            agar downtime perangkat lebih singkat. Tim kami terbiasa bekerja dengan alur yang rapi sehingga perbaikan
            dapat dilakukan tanpa mengganggu aktivitas utama di rumah maupun tempat usaha.
          </p>
        </section>

        <section aria-labelledby="area-layanan" className="space-y-4">
          <h2 id="area-layanan" className="text-2xl font-semibold text-secondary-900">Area Servis Kulkas Surabaya dan Sekitarnya</h2>
          <p>
            Layanan teknisi kami mencakup Surabaya Timur, Surabaya Barat, Surabaya Utara, Surabaya Selatan,
            serta Surabaya Pusat. Kami rutin melayani area Rungkut, Sukolilo, Gubeng, Wonokromo, Wiyung,
            Dukuh Pakis, Tandes, Kenjeran, dan sekitarnya. Untuk pelanggan di Sidoarjo dan Gresik, layanan tetap
            tersedia dengan jadwal kunjungan yang disesuaikan jarak dan kebutuhan pekerjaan.
          </p>
          <p>
            Saat melakukan booking, mohon informasikan jenis kulkas, gejala kerusakan, dan waktu kunjungan yang
            diinginkan. Informasi awal ini membantu kami menyiapkan alat kerja dan komponen yang relevan agar
            proses servis di lokasi berjalan lebih efisien. Dengan begitu, kulkas Anda bisa kembali berfungsi
            optimal lebih cepat, terutama untuk kebutuhan penyimpanan bahan makanan yang sensitif suhu.
          </p>
        </section>

        <section aria-labelledby="tips-kulkas" className="space-y-4">
          <h2 id="tips-kulkas" className="text-2xl font-semibold text-secondary-900">Tips Menjaga Kulkas Tetap Stabil dan Awet</h2>
          <p>
            Agar kulkas tetap bekerja optimal, hindari memasukkan makanan panas langsung ke dalam kabinet karena dapat
            membuat beban pendinginan meningkat drastis. Sisakan ruang antar bahan makanan agar sirkulasi udara dingin
            tidak terhambat. Periksa juga karet pintu secara berkala; jika seal sudah longgar, suhu dingin akan mudah
            keluar dan kompresor bekerja lebih lama. Bersihkan kondensor sesuai kebutuhan untuk mencegah penumpukan
            debu, terutama pada unit yang diletakkan dekat dapur atau area dengan partikel minyak tinggi.
          </p>
          <p>
            Untuk kebutuhan usaha, monitoring suhu kulkas sangat penting karena berpengaruh langsung pada kualitas stok.
            Jika suhu naik turun tidak stabil, segera lakukan inspeksi sebelum terjadi kerusakan bahan makanan.
            Kami menyarankan perawatan preventif terjadwal bagi unit yang beroperasi nonstop agar komponen utama tetap
            terjaga dan risiko kerusakan mendadak berkurang. Dengan perawatan yang tepat, kulkas bisa bekerja lebih
            efisien, konsumsi listrik lebih terkontrol, dan umur pakai perangkat menjadi lebih panjang.
          </p>
        </section>

        <section aria-labelledby="estimasi-servis-kulkas" className="space-y-4">
          <h2 id="estimasi-servis-kulkas" className="text-2xl font-semibold text-secondary-900">Estimasi Proses Servis Kulkas di Lokasi</h2>
          <p>
            Pada kunjungan awal, teknisi akan mengecek beberapa poin penting seperti suhu aktual kompartemen,
            performa kompresor, kondisi kondensor, kelistrikan, serta aliran refrigerant. Pemeriksaan ini membantu
            membedakan apakah masalah berasal dari sirkulasi dingin, kebocoran, atau komponen elektronik. Setelah
            diagnosa, kami menjelaskan langkah kerja yang dibutuhkan secara sederhana agar Anda memahami prioritas
            penanganan. Pola kerja transparan ini penting agar pelanggan bisa menyesuaikan keputusan servis dengan
            kebutuhan penggunaan kulkas, terutama untuk penyimpanan bahan makanan harian dan kebutuhan usaha.
          </p>
          <p>
            Untuk kasus yang umum, perbaikan bisa dilakukan langsung dalam kunjungan yang sama. Bila diperlukan
            penggantian komponen tertentu, teknisi akan menyampaikan estimasi waktu dan pilihan komponen yang relevan.
            Kami selalu mendorong solusi yang efisien dan proporsional, bukan sekadar penggantian komponen tanpa arah.
            Dengan pendekatan tersebut, performa kulkas dapat kembali stabil dan risiko kerusakan berulang dapat ditekan.
            Tujuan akhir kami adalah memastikan unit Anda kembali berfungsi optimal dengan hasil kerja yang aman,
            rapi, dan dapat diandalkan untuk pemakaian jangka panjang.
          </p>
        </section>

        <section aria-labelledby="internal-links" className="space-y-4">
          <h2 id="internal-links" className="text-2xl font-semibold text-secondary-900">Layanan Terkait</h2>
          <p>
            Jika selain kulkas Anda juga memiliki kebutuhan servis perangkat lain, berikut halaman layanan yang dapat
            Anda akses untuk mendapatkan informasi detail dan estimasi pengerjaan.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/servis-ac-surabaya" className="text-primary-600 hover:text-primary-700">Servis AC Surabaya</Link></li>
            <li><Link href="/servis-mesin-cuci-surabaya" className="text-primary-600 hover:text-primary-700">Servis Mesin Cuci Surabaya</Link></li>
            <li><Link href="/instalasi-listrik-surabaya" className="text-primary-600 hover:text-primary-700">Instalasi Listrik Surabaya</Link></li>
            <li><Link href="/layanan/service-kulkas" className="text-primary-600 hover:text-primary-700">Halaman detail Service Kulkas</Link></li>
            <li><Link href="/kontak" className="text-primary-600 hover:text-primary-700">Hubungi admin dan jadwalkan teknisi</Link></li>
          </ul>
        </section>

        <section aria-labelledby="cta-kulkas" className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-3">
          <h2 id="cta-kulkas" className="text-2xl font-semibold text-secondary-900">Butuh Teknisi Kulkas Surabaya Sekarang?</h2>
          <p>
            Konsultasikan keluhan kulkas Anda hari ini. Tim CV. Arsa Prima Solution siap memberikan layanan
            servis kulkas panggilan yang cepat, profesional, dan bergaransi.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/kontak" className="btn-primary">Pesan Teknisi Kulkas</Link>
            <Link href="/layanan" className="btn-secondary">Lihat Semua Layanan</Link>
          </div>
        </section>
      </article>
    </main>
  )
}
