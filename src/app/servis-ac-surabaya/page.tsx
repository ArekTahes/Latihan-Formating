import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import { generateLocalBusinessSchema, generateWebPageSchema } from '@/lib/schema'

export const metadata: Metadata = generatePageSEO({
  title: 'Servis AC Surabaya Murah & Bergaransi - Teknisi AC Panggilan Profesional',
  description: 'Layanan servis AC Surabaya untuk cuci AC, isi freon, bongkar pasang AC, perbaikan AC tidak dingin, hingga pengecekan kebocoran. Jasa servis AC Surabaya oleh teknisi berpengalaman dan bergaransi.',
  path: '/servis-ac-surabaya',
  keywords: [
    'servis ac surabaya',
    'jasa servis ac surabaya',
    'teknisi ac surabaya',
    'service ac panggilan surabaya',
    'cuci ac surabaya',
    'isi freon ac surabaya',
    'perbaikan ac tidak dingin surabaya',
  ],
})

export default function ServisACSurabayaPage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const webPageSchema = generateWebPageSchema({
    title: 'Servis AC Surabaya Murah & Bergaransi',
    description: 'Landing page layanan servis AC Surabaya, jasa servis AC Surabaya, teknisi AC Surabaya, dan service AC panggilan Surabaya.',
    path: '/servis-ac-surabaya',
  })

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8" aria-label="Landing page servis AC Surabaya">
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
          <h1 className="text-3xl font-bold text-secondary-900 md:text-4xl">Servis AC Surabaya Profesional & Bergaransi</h1>
          <p>
            Jika Anda sedang mencari <strong>servis AC Surabaya</strong> yang cepat, jujur, dan hasilnya awet,
            CV. Arsa Prima Solution siap membantu kebutuhan rumah maupun bisnis Anda. Kami melayani service AC
            panggilan untuk berbagai tipe unit, mulai dari AC split, AC inverter, AC cassette, sampai standing floor.
            Banyak pelanggan menghubungi kami saat AC tidak dingin, AC bocor, AC berisik, atau AC mati total.
            Tim teknisi kami akan melakukan pemeriksaan detail di lokasi, menjelaskan sumber masalah, lalu memberikan
            rekomendasi penanganan yang paling efektif tanpa biaya tersembunyi.
          </p>
          <p>
            Sebagai penyedia <strong>jasa servis AC Surabaya</strong>, kami menekankan kualitas pengerjaan, ketepatan
            waktu, dan komunikasi yang jelas. Anda akan mendapat informasi kondisi unit AC sebelum dan sesudah servis,
            termasuk komponen apa yang dibersihkan atau diganti. Pola kerja seperti ini membuat pelanggan lebih tenang
            karena prosesnya transparan. Layanan kami juga cocok untuk pemilik rumah kontrakan, kantor, toko, restoran,
            kafe, gudang, dan UMKM yang membutuhkan teknisi AC dengan respons cepat di area Surabaya dan sekitarnya.
          </p>
        </header>

        <section aria-labelledby="layanan-servis-ac" className="space-y-4">
          <h2 id="layanan-servis-ac" className="text-2xl font-semibold text-secondary-900">Layanan Servis AC yang Tersedia</h2>
          <p>
            Kami menangani pekerjaan ringan hingga berat untuk memastikan performa pendinginan kembali normal.
            Ketika Anda membutuhkan <strong>teknisi AC Surabaya</strong>, kami tidak hanya fokus pada gejala,
            tetapi juga akar masalah agar kerusakan tidak berulang dalam waktu dekat.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Cuci AC berkala untuk mengembalikan aliran udara dan kebersihan evaporator</li>
            <li>Isi freon R22, R32, dan R410A berikut pengecekan tekanan sistem</li>
            <li>Perbaikan AC tidak dingin, AC bocor, AC berisik, dan AC mati mendadak</li>
            <li>Pengecekan serta perbaikan kebocoran pipa refrigerant</li>
            <li>Penggantian kapasitor, fan motor, sensor, dan komponen pendukung</li>
            <li>Bongkar pasang AC untuk pindahan rumah, kantor, atau relokasi usaha</li>
            <li>Instalasi AC baru lengkap dengan evaluasi titik pemasangan terbaik</li>
            <li>Maintenance AC untuk kantor, ruko, restoran, dan properti sewa</li>
          </ul>
        </section>

        <section aria-labelledby="manfaat-servis" className="space-y-4">
          <h2 id="manfaat-servis" className="text-2xl font-semibold text-secondary-900">Kenapa Servis AC Rutin Itu Penting?</h2>
          <p>
            Banyak orang memanggil teknisi hanya ketika AC sudah benar-benar tidak dingin. Padahal, perawatan rutin
            adalah cara paling efisien untuk menghindari kerusakan besar. Unit yang kotor akan memaksa kompresor bekerja
            lebih berat sehingga konsumsi listrik meningkat. Debu pada evaporator dan kondensor juga bisa menurunkan
            kualitas udara di dalam ruangan. Dengan servis berkala, sirkulasi udara lebih sehat, suhu ruangan lebih cepat
            tercapai, dan risiko kerusakan komponen utama dapat ditekan.
          </p>
          <p>
            Dalam banyak kasus, pelanggan yang rutin cuci AC dan pengecekan freon justru menghemat biaya jangka panjang.
            Biaya servis preventif jauh lebih rendah dibandingkan penggantian kompresor atau perbaikan modul elektronik.
            Karena itu, kami selalu menyarankan jadwal perawatan menyesuaikan intensitas pemakaian. Untuk rumah tinggal,
            umumnya cukup setiap 3-4 bulan. Untuk toko, kantor, dan area komersial dengan jam operasional panjang,
            interval servis biasanya lebih sering agar performa pendinginan tetap stabil dan nyaman.
          </p>
        </section>

        <section aria-labelledby="area-layanan" className="space-y-4">
          <h2 id="area-layanan" className="text-2xl font-semibold text-secondary-900">Area Service AC Panggilan Surabaya</h2>
          <p>
            Layanan <strong>service AC panggilan Surabaya</strong> kami menjangkau Surabaya Pusat, Surabaya Timur,
            Surabaya Barat, Surabaya Utara, dan Surabaya Selatan. Teknisi juga rutin menangani pekerjaan di area Rungkut,
            Wonokromo, Gubeng, Tegalsari, Dukuh Pakis, Wiyung, Tandes, Sukolilo, Kenjeran, hingga Gunung Anyar.
            Selain Surabaya, kami menerima jadwal layanan ke Sidoarjo dan Gresik untuk kebutuhan pelanggan tetap maupun
            pelanggan baru yang memerlukan penanganan cepat langsung ke lokasi.
          </p>
          <p>
            Jika Anda tinggal di perumahan, apartemen, ruko, atau kawasan industri, cukup sampaikan titik lokasi,
            keluhan AC, serta waktu kunjungan yang diinginkan. Tim admin kami akan membantu estimasi kedatangan teknisi
            dan kebutuhan alat kerja yang diperlukan. Pendekatan ini mempercepat proses servis di tempat karena teknisi
            sudah menyiapkan perlengkapan sesuai kondisi awal unit AC Anda.
          </p>
        </section>

        <section aria-labelledby="tips-perawatan-ac" className="space-y-4">
          <h2 id="tips-perawatan-ac" className="text-2xl font-semibold text-secondary-900">Tips Menjaga AC Tetap Dingin dan Hemat Listrik</h2>
          <p>
            Setelah proses servis selesai, ada beberapa langkah sederhana yang bisa Anda lakukan agar performa AC
            tetap optimal. Pertama, bersihkan filter indoor secara berkala, terutama jika rumah berada di area jalan
            padat atau dekat proyek. Filter yang kotor membuat aliran udara terhambat dan unit bekerja lebih berat.
            Kedua, gunakan suhu yang realistis untuk penggunaan harian, misalnya 24-26°C, agar kompresor tidak terus
            bekerja pada beban maksimum. Ketiga, pastikan ventilasi ruangan baik dan hindari kebocoran udara dari
            jendela atau pintu yang sering terbuka, karena hal ini dapat memperlambat proses pendinginan.
          </p>
          <p>
            Untuk unit yang dipakai intensif setiap hari, jadwal servis preventif sangat disarankan. Pemeriksaan rutin
            membantu mendeteksi gejala dini seperti tekanan freon tidak normal, kipas melemah, atau indikator kebocoran
            yang belum terasa dampaknya. Jika Anda memiliki beberapa unit AC sekaligus di rumah atau tempat usaha,
            kami juga dapat membantu menyusun jadwal maintenance bertahap agar biaya lebih terkontrol dan semua unit
            tetap bekerja stabil. Dengan kombinasi penggunaan yang tepat dan perawatan berkala, kenyamanan ruangan
            akan terjaga, umur komponen lebih panjang, serta tagihan listrik dapat ditekan secara signifikan.
          </p>
        </section>

        <section aria-labelledby="internal-links" className="space-y-4">
          <h2 id="internal-links" className="text-2xl font-semibold text-secondary-900">Layanan Terkait yang Mungkin Anda Butuhkan</h2>
          <p>
            Selain layanan utama servis AC, kami juga menyediakan perbaikan elektronik rumah tangga lainnya. Jika Anda
            ingin mengecek layanan lain, gunakan halaman berikut untuk membandingkan jenis pekerjaan dan memilih layanan
            yang paling sesuai dengan kebutuhan Anda saat ini.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/servis-mesin-cuci-surabaya" className="text-primary-600 hover:text-primary-700">Servis Mesin Cuci Surabaya</Link></li>
            <li><Link href="/servis-kulkas-surabaya" className="text-primary-600 hover:text-primary-700">Servis Kulkas Surabaya</Link></li>
            <li><Link href="/instalasi-listrik-surabaya" className="text-primary-600 hover:text-primary-700">Instalasi Listrik Surabaya</Link></li>
            <li><Link href="/layanan/service-ac" className="text-primary-600 hover:text-primary-700">Halaman detail Service AC</Link></li>
            <li><Link href="/kontak" className="text-primary-600 hover:text-primary-700">Hubungi tim CV. Arsa Prima Solution</Link></li>
          </ul>
        </section>

        <section aria-labelledby="cta-servis-ac" className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-3">
          <h2 id="cta-servis-ac" className="text-2xl font-semibold text-secondary-900">Butuh Teknisi AC Surabaya Hari Ini?</h2>
          <p>
            Jadwalkan kunjungan sekarang untuk layanan yang cepat dan bergaransi. Tim kami siap membantu inspeksi,
            servis, serta perbaikan AC di rumah atau tempat usaha Anda dengan prosedur kerja rapi dan profesional.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/kontak" className="btn-primary">Pesan Teknisi Sekarang</Link>
            <Link href="/layanan" className="btn-secondary">Lihat Semua Layanan</Link>
          </div>
        </section>
      </article>
    </main>
  )
}