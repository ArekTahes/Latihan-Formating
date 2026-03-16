import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import { generateLocalBusinessSchema, generateWebPageSchema } from '@/lib/schema'

export const metadata: Metadata = generatePageSEO({
  title: 'Servis Mesin Cuci Surabaya Cepat & Bergaransi - Teknisi Panggilan',
  description: 'Layanan servis mesin cuci Surabaya untuk top loading, front loading, dan 2 tabung. Perbaikan mesin cuci tidak berputar, tidak buang air, error panel, hingga ganti komponen dengan teknisi profesional.',
  path: '/servis-mesin-cuci-surabaya',
  keywords: [
    'servis mesin cuci surabaya',
    'jasa servis mesin cuci surabaya',
    'teknisi mesin cuci surabaya',
    'service mesin cuci panggilan surabaya',
    'perbaikan mesin cuci surabaya',
    'mesin cuci tidak berputar surabaya',
  ],
})

export default function ServisMesinCuciSurabayaPage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const webPageSchema = generateWebPageSchema({
    title: 'Servis Mesin Cuci Surabaya Cepat & Bergaransi',
    description: 'Landing page layanan servis mesin cuci Surabaya dan service mesin cuci panggilan Surabaya untuk rumah maupun usaha.',
    path: '/servis-mesin-cuci-surabaya',
  })

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8" aria-label="Landing page servis mesin cuci Surabaya">
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
          <h1 className="text-3xl font-bold text-secondary-900 md:text-4xl">Servis Mesin Cuci Surabaya Profesional</h1>
          <p>
            Mencari <strong>servis mesin cuci Surabaya</strong> yang responsif dan hasil perbaikannya tahan lama?
            CV. Arsa Prima Solution menyediakan teknisi mesin cuci panggilan untuk berbagai jenis kerusakan,
            mulai dari mesin cuci tidak berputar, tidak bisa buang air, panel error, hingga mesin cuci bocor.
            Kami menangani unit top loading, front loading, dan 2 tabung dari berbagai merek populer.
            Proses kerja dilakukan langsung di lokasi dengan pemeriksaan menyeluruh agar sumber masalah bisa
            diidentifikasi secara tepat sebelum dilakukan tindakan perbaikan.
          </p>
          <p>
            Banyak pelanggan memilih layanan kami karena pengerjaan lebih terstruktur dan komunikatif.
            Sebelum perbaikan, teknisi akan menjelaskan komponen yang bermasalah, tingkat urgensi,
            serta pilihan solusi yang paling masuk akal sesuai kondisi unit. Pendekatan ini membuat Anda
            lebih yakin terhadap pekerjaan yang dilakukan, sekaligus membantu menghindari penggantian komponen
            yang tidak perlu. Jika Anda membutuhkan <strong>jasa servis mesin cuci Surabaya</strong> untuk rumah,
            laundry kecil, kos-kosan, atau apartemen, tim kami siap membantu dengan jadwal kunjungan yang fleksibel.
          </p>
        </header>

        <section aria-labelledby="layanan-servis-mesin-cuci" className="space-y-4">
          <h2 id="layanan-servis-mesin-cuci" className="text-2xl font-semibold text-secondary-900">Layanan Perbaikan Mesin Cuci</h2>
          <p>
            Setiap unit mesin cuci memiliki pola kerusakan yang berbeda. Karena itu, kami tidak hanya mengganti
            komponen secara langsung, melainkan melakukan diagnosa terlebih dahulu untuk memastikan akar masalahnya.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Perbaikan mesin cuci tidak berputar atau drum macet</li>
            <li>Perbaikan mesin cuci tidak buang air atau tidak mengisi air</li>
            <li>Penanganan mesin cuci berisik, getar berlebih, dan bocor</li>
            <li>Servis panel error, modul kontrol, dan sensor level air</li>
            <li>Penggantian bearing, seal, belt, dan pompa pembuangan</li>
            <li>Perbaikan motor dinamo, gearbox, dan komponen mekanik</li>
            <li>Servis front loading, top loading, serta mesin cuci 2 tabung</li>
            <li>Maintenance berkala untuk menjaga performa dan usia pakai mesin</li>
          </ul>
        </section>

        <section aria-labelledby="kendala-umum" className="space-y-4">
          <h2 id="kendala-umum" className="text-2xl font-semibold text-secondary-900">Kendala Mesin Cuci yang Sering Terjadi</h2>
          <p>
            Keluhan paling umum adalah mesin cuci tidak mau spin, air tidak keluar saat mode drain,
            atau muncul kode error berulang pada panel. Dalam banyak kasus, penyebabnya bisa berasal dari
            saluran pembuangan yang tersumbat, pompa yang mulai melemah, bearing aus, atau modul kontrol
            yang mengalami gangguan. Jika kerusakan dibiarkan terlalu lama, risiko kerusakan komponen lain
            akan meningkat dan biaya perbaikan menjadi lebih besar.
          </p>
          <p>
            Dengan memanggil <strong>teknisi mesin cuci Surabaya</strong> secara cepat, Anda bisa mencegah
            kerusakan berantai dan mempercepat mesin kembali normal. Layanan kami dirancang agar pelanggan tidak
            bingung dengan istilah teknis. Teknisi akan menjelaskan kondisi mesin cuci dengan bahasa sederhana,
            sehingga Anda bisa memutuskan perbaikan dengan lebih tenang. Untuk unit yang digunakan harian,
            seperti usaha laundry atau rumah dengan intensitas cuci tinggi, perawatan berkala sangat disarankan
            agar performa mesin tetap stabil.
          </p>
        </section>

        <section aria-labelledby="area-servis" className="space-y-4">
          <h2 id="area-servis" className="text-2xl font-semibold text-secondary-900">Area Servis Mesin Cuci Surabaya dan Sekitarnya</h2>
          <p>
            Kami melayani <strong>service mesin cuci panggilan Surabaya</strong> untuk wilayah Rungkut,
            Wonokromo, Gubeng, Tegalsari, Wiyung, Dukuh Pakis, Sukolilo, Tandes, Kenjeran, dan area Surabaya lainnya.
            Selain itu, layanan tersedia untuk Sidoarjo dan Gresik dengan penjadwalan yang disesuaikan jarak lokasi.
            Tim kami terbiasa menangani kebutuhan pelanggan rumah tangga, apartemen, kos, laundry kiloan,
            dan unit usaha kecil menengah yang membutuhkan penanganan cepat serta rapi.
          </p>
          <p>
            Saat melakukan pemesanan, cukup informasikan merk mesin cuci, tipe unit, gejala kerusakan,
            dan jam kunjungan yang diinginkan. Informasi ini membantu teknisi menyiapkan alat kerja dan
            komponen pendukung yang relevan, sehingga proses pengecekan lebih efisien saat tiba di lokasi.
            Dengan alur kerja yang sistematis, waktu downtime mesin cuci dapat ditekan dan aktivitas harian Anda
            bisa kembali berjalan normal lebih cepat.
          </p>
        </section>

        <section aria-labelledby="tips-mesin-cuci" className="space-y-4">
          <h2 id="tips-mesin-cuci" className="text-2xl font-semibold text-secondary-900">Tips Perawatan Mesin Cuci Agar Tidak Cepat Rusak</h2>
          <p>
            Untuk menjaga mesin cuci tetap awet, biasakan menggunakan kapasitas cuci sesuai rekomendasi pabrikan.
            Beban cucian yang berlebih membuat motor dan gearbox bekerja lebih berat sehingga mempercepat keausan.
            Selain itu, pilih deterjen sesuai tipe mesin cuci agar busa tidak berlebihan dan tidak menumpuk pada
            saluran pembuangan. Setelah selesai mencuci, biarkan pintu mesin terbuka beberapa saat supaya bagian dalam
            tidak lembap terlalu lama. Kebiasaan kecil ini cukup efektif mencegah bau apek, jamur, dan penurunan
            performa cuci dalam jangka panjang.
          </p>
          <p>
            Jika mesin cuci mulai menunjukkan tanda aneh seperti suara berdecit, getaran berlebih, atau siklus cuci
            yang berhenti tiba-tiba, sebaiknya segera lakukan pemeriksaan. Penanganan sejak awal biasanya lebih cepat
            dan biayanya lebih terjangkau dibanding menunggu sampai unit tidak bisa dipakai sama sekali. Kami juga
            merekomendasikan pengecekan berkala untuk mesin cuci yang digunakan intensif setiap hari, misalnya pada
            usaha laundry. Dengan jadwal maintenance yang tepat, risiko kerusakan mendadak bisa ditekan, biaya operasional
            lebih stabil, dan mesin cuci tetap siap digunakan saat dibutuhkan.
          </p>
        </section>

        <section aria-labelledby="estimasi-servis-mesin-cuci" className="space-y-4">
          <h2 id="estimasi-servis-mesin-cuci" className="text-2xl font-semibold text-secondary-900">Estimasi Penanganan Servis Mesin Cuci di Lokasi</h2>
          <p>
            Saat Anda memesan layanan, teknisi akan melakukan tahap awal berupa diagnosa kondisi fisik dan fungsi utama
            mesin cuci. Tahapan ini penting untuk menentukan apakah kerusakan berada pada area mekanik, sistem pembuangan,
            atau modul kontrol elektronik. Setelah diagnosa, Anda akan mendapatkan penjelasan ringkas mengenai penyebab,
            tindakan yang diperlukan, serta estimasi pengerjaan. Kami selalu berusaha menjaga proses ini tetap jelas agar
            pelanggan dapat mengambil keputusan dengan nyaman dan tanpa tekanan, terutama untuk unit yang digunakan harian.
          </p>
          <p>
            Untuk kerusakan ringan seperti saluran tersumbat atau komponen minor, penanganan biasanya bisa selesai dalam
            satu kali kunjungan. Untuk kerusakan yang memerlukan penggantian komponen khusus, teknisi akan menginformasikan
            opsi yang tersedia serta perkiraan waktu pengadaan. Dengan alur komunikasi yang terbuka, pelanggan dapat
            menyesuaikan jadwal dan prioritas perbaikan sesuai kebutuhan rumah tangga atau operasional usaha. Prinsip kami
            sederhana: perbaikan harus tepat sasaran, aman digunakan kembali, dan memberi manfaat jangka panjang.
          </p>
        </section>

        <section aria-labelledby="internal-links" className="space-y-4">
          <h2 id="internal-links" className="text-2xl font-semibold text-secondary-900">Layanan Terkait</h2>
          <p>
            Jika Anda membutuhkan layanan perbaikan perangkat lain, kami juga melayani servis AC, servis kulkas,
            dan instalasi listrik untuk kebutuhan rumah maupun bisnis.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/servis-ac-surabaya" className="text-primary-600 hover:text-primary-700">Servis AC Surabaya</Link></li>
            <li><Link href="/servis-kulkas-surabaya" className="text-primary-600 hover:text-primary-700">Servis Kulkas Surabaya</Link></li>
            <li><Link href="/instalasi-listrik-surabaya" className="text-primary-600 hover:text-primary-700">Instalasi Listrik Surabaya</Link></li>
            <li><Link href="/layanan/service-mesin-cuci" className="text-primary-600 hover:text-primary-700">Halaman detail Service Mesin Cuci</Link></li>
            <li><Link href="/kontak" className="text-primary-600 hover:text-primary-700">Konsultasi & pemesanan teknisi</Link></li>
          </ul>
        </section>

        <section aria-labelledby="cta-mesin-cuci" className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-3">
          <h2 id="cta-mesin-cuci" className="text-2xl font-semibold text-secondary-900">Jadwalkan Servis Mesin Cuci Sekarang</h2>
          <p>
            Jangan tunggu sampai kerusakan makin parah. Hubungi CV. Arsa Prima Solution untuk inspeksi awal,
            estimasi pengerjaan, dan layanan servis mesin cuci panggilan yang cepat serta bergaransi.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/kontak" className="btn-primary">Hubungi Teknisi</Link>
            <Link href="/layanan" className="btn-secondary">Lihat Semua Layanan</Link>
          </div>
        </section>
      </article>
    </main>
  )
}
