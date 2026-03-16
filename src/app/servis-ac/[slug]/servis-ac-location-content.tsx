import Link from 'next/link'
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/schema'
import {
  formatSurabayaLocation,
  surabayaLocations,
  toServisACLocationSlug,
} from '@/lib/surabayaLocations'

type LocationSlug = (typeof surabayaLocations)[number]

interface ServisACLocationContentProps {
  slug: LocationSlug
}

export default function ServisACLocationContent({ slug }: ServisACLocationContentProps) {
  const locationName = formatSurabayaLocation(slug)
  const locationLower = locationName.toLowerCase()
  const prettyPath = `/${toServisACLocationSlug(slug)}`
  const relatedLocations = surabayaLocations.filter((item) => item !== slug).slice(0, 8)

  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: 'Servis AC Surabaya', url: '/servis-ac-surabaya' },
    { name: `Servis AC ${locationName}`, url: prettyPath },
  ])

  const locationServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://servisacsurabaya.com${prettyPath}#service`,
    serviceType: `Servis AC ${locationName} Surabaya`,
    name: `Servis AC ${locationName} Surabaya`,
    description: `Layanan servis AC di ${locationName} Surabaya meliputi cuci AC, isi freon, bongkar pasang AC, perbaikan AC tidak dingin, AC bocor, dan maintenance rutin dengan teknisi profesional.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://servisacsurabaya.com/#organization',
      name: 'CV Arsa Prima Solution',
      url: 'https://servisacsurabaya.com',
      telephone: '+6287865502146',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Surabaya',
        addressRegion: 'Jawa Timur',
        addressCountry: 'ID',
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${locationName}, Surabaya`,
    },
    url: `https://servisacsurabaya.com${prettyPath}`,
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8" aria-label={`Landing page servis AC ${locationName} Surabaya`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationServiceSchema).replace(/</g, '\\u003c') }}
      />

      <article className="space-y-10 text-gray-700 leading-8">
        <header className="space-y-5">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-600">Beranda</Link></li>
              <li>/</li>
              <li><Link href="/servis-ac-surabaya" className="hover:text-primary-600">Servis AC Surabaya</Link></li>
              <li>/</li>
              <li className="text-secondary-900 font-medium">Servis AC {locationName}</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-secondary-900 md:text-4xl">Servis AC {locationName} Surabaya Profesional</h1>
          <p>
            Jika Anda sedang mencari layanan <strong>servis AC {locationLower} Surabaya</strong> yang cepat, rapi,
            dan hasilnya tahan lama, CV Arsa Prima Solution siap membantu kebutuhan rumah tangga maupun tempat usaha.
            Kami menangani berbagai keluhan umum seperti AC tidak dingin, AC bocor, AC berisik, AC mati total,
            serta masalah pada aliran freon dan komponen kelistrikan unit. Teknisi kami datang langsung ke lokasi,
            melakukan pemeriksaan menyeluruh, lalu memberikan penjelasan tindakan perbaikan secara transparan.
          </p>
          <p>
            Sebagai penyedia <strong>jasa servis AC {locationLower}</strong>, kami memahami bahwa setiap pelanggan
            membutuhkan penanganan yang berbeda. Unit AC di rumah, ruko, kantor, dan tempat komersial memiliki pola
            pemakaian yang tidak sama. Karena itu kami menyesuaikan metode pengecekan, pembersihan, dan perbaikan
            berdasarkan kondisi aktual di lapangan. Pendekatan ini membantu proses servis lebih tepat sasaran,
            mengurangi risiko kerusakan berulang, dan menjaga performa pendinginan tetap optimal dalam jangka panjang.
          </p>
        </header>

        <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800"
            alt={`teknisi servis ac di ${locationLower} surabaya memperbaiki ac rumah`}
            loading="lazy"
            decoding="async"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-gray-600">
            Dokumentasi teknisi CV Arsa Prima Solution saat menangani servis AC panggilan di area {locationName} Surabaya.
          </figcaption>
        </figure>

        <section aria-labelledby="layanan-ac" className="space-y-4">
          <h2 id="layanan-ac" className="text-2xl font-semibold text-secondary-900">Layanan Servis AC di {locationName}</h2>
          <p>
            Layanan kami dirancang untuk mengatasi masalah AC dari tingkat ringan hingga berat. Pada tahap awal,
            teknisi akan memeriksa kondisi indoor, outdoor, tekanan freon, kebersihan evaporator, dan stabilitas arus
            listrik. Dari hasil inspeksi tersebut, kami menentukan prioritas tindakan agar proses kerja lebih efisien.
            Dengan alur seperti ini, pelanggan dapat memahami kebutuhan perbaikan sebelum pekerjaan dilakukan,
            sehingga keputusan servis menjadi lebih nyaman dan terkontrol.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Cuci AC berkala untuk menjaga aliran udara tetap bersih dan stabil</li>
            <li>Isi freon AC R22, R32, dan R410A beserta pengecekan tekanan sistem</li>
            <li>Perbaikan AC tidak dingin, AC bocor, AC berisik, dan AC mati mendadak</li>
            <li>Bongkar pasang AC untuk pindahan rumah, kantor, atau relokasi tempat usaha</li>
            <li>Perbaikan komponen seperti kapasitor, fan motor, sensor, dan modul kontrol</li>
            <li>Maintenance AC untuk perumahan, ruko, kantor, kafe, restoran, dan UMKM</li>
          </ul>
        </section>

        <section aria-labelledby="manfaat-rutin" className="space-y-4">
          <h2 id="manfaat-rutin" className="text-2xl font-semibold text-secondary-900">Kenapa Servis AC Rutin di {locationName} Itu Penting?</h2>
          <p>
            Banyak kerusakan besar sebenarnya diawali gejala kecil yang sering diabaikan. Contohnya, hembusan udara
            mulai berkurang, suhu ruangan tidak cepat turun, atau unit outdoor terdengar lebih keras dari biasanya.
            Jika gejala ini dibiarkan, beban kerja kompresor meningkat dan konsumsi listrik cenderung naik.
            Akibatnya, biaya operasional bertambah dan risiko kerusakan komponen utama menjadi lebih tinggi.
            Dengan servis rutin, masalah dapat dideteksi lebih awal sehingga penanganannya lebih ringan dan ekonomis.
          </p>
          <p>
            Untuk area padat aktivitas seperti {locationName}, debu lingkungan dan intensitas pemakaian AC sering kali
            lebih tinggi. Karena itu, jadwal perawatan berkala menjadi kunci menjaga performa unit. Kami biasanya
            menyarankan interval servis menyesuaikan kebutuhan, mulai dari 3-4 bulan untuk pemakaian rumah tangga
            hingga lebih sering untuk lokasi komersial. Pendekatan preventif ini membantu menjaga udara ruangan tetap
            nyaman, memperpanjang usia perangkat, dan menurunkan potensi biaya besar akibat kerusakan mendadak.
          </p>
        </section>

        <section aria-labelledby="jangkauan" className="space-y-4">
          <h2 id="jangkauan" className="text-2xl font-semibold text-secondary-900">Jangkauan Layanan dari {locationName} ke Seluruh Surabaya</h2>
          <p>
            Selain melayani servis di {locationName}, tim kami juga aktif menangani panggilan di wilayah Surabaya Timur,
            Surabaya Barat, Surabaya Selatan, Surabaya Utara, dan Surabaya Pusat. Dukungan area yang luas ini membantu
            pelanggan yang memiliki lebih dari satu lokasi properti. Misalnya, rumah di {locationName} dan kantor di
            kecamatan lain tetap dapat ditangani oleh tim yang sama dengan standar kerja yang konsisten.
          </p>
          <p>
            Saat melakukan pemesanan, Anda cukup menyampaikan jenis AC, keluhan utama, dan waktu kunjungan yang
            diinginkan. Informasi awal tersebut membantu teknisi menyiapkan perlengkapan kerja lebih tepat,
            sehingga waktu penanganan di lokasi menjadi lebih efisien. Jika dibutuhkan, kami juga dapat memberikan
            rekomendasi jadwal maintenance terencana untuk mencegah gangguan berulang pada unit AC yang dipakai harian.
          </p>
        </section>

        <section aria-labelledby="internal-linking" className="space-y-4">
          <h2 id="internal-linking" className="text-2xl font-semibold text-secondary-900">Halaman Terkait Servis AC Surabaya</h2>
          <p>
            Untuk memudahkan Anda membandingkan cakupan layanan antar area, gunakan halaman terkait berikut.
            Struktur internal link ini membantu pelanggan menemukan informasi paling relevan sebelum memesan teknisi.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/servis-ac-surabaya" className="text-primary-600 hover:text-primary-700">Servis AC Surabaya (halaman utama)</Link></li>
            <li><Link href="/layanan/service-ac" className="text-primary-600 hover:text-primary-700">Detail Layanan Service AC</Link></li>
            <li><Link href="/kontak" className="text-primary-600 hover:text-primary-700">Hubungi Admin & Jadwal Teknisi</Link></li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary-900 pt-2">Lokasi Servis AC Surabaya Lainnya</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {relatedLocations.map((relatedSlug) => (
              <Link
                key={relatedSlug}
                href={`/${toServisACLocationSlug(relatedSlug)}`}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                Servis AC {formatSurabayaLocation(relatedSlug)}
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="cta" className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-3">
          <h2 id="cta" className="text-2xl font-semibold text-secondary-900">Butuh Teknisi AC di {locationName} Sekarang?</h2>
          <p>
            Tim CV Arsa Prima Solution siap membantu cuci AC, isi freon, dan perbaikan AC rumah maupun usaha Anda.
            Hubungi kami sekarang untuk konsultasi awal dan jadwalkan kunjungan teknisi ke lokasi.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/kontak" className="btn-primary">Pesan Teknisi AC</Link>
            <Link href="/servis-ac-surabaya" className="btn-secondary">Kembali ke Servis AC Surabaya</Link>
          </div>
        </section>
      </article>
    </main>
  )
}
