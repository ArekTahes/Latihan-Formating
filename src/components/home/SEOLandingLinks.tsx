import Link from 'next/link'

const seoLinks = [
  {
    href: '/servis-ac-surabaya',
    title: 'Servis AC Surabaya',
    description: 'Layanan servis AC panggilan Surabaya untuk cuci AC, isi freon, bongkar pasang, dan perbaikan AC tidak dingin.',
  },
  {
    href: '/servis-mesin-cuci-surabaya',
    title: 'Servis Mesin Cuci Surabaya',
    description: 'Perbaikan mesin cuci top loading, front loading, hingga 2 tabung oleh teknisi berpengalaman.',
  },
  {
    href: '/servis-kulkas-surabaya',
    title: 'Servis Kulkas Surabaya',
    description: 'Servis kulkas tidak dingin, bocor, berisik, hingga penggantian kompresor untuk rumah dan usaha.',
  },
  {
    href: '/instalasi-listrik-surabaya',
    title: 'Instalasi Listrik Surabaya',
    description: 'Jasa instalasi listrik rumah, kantor, ruko, serta perbaikan korsleting dengan standar keamanan tinggi.',
  },
]

export default function SEOLandingLinks() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="layanan-seo-surabaya">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h2 id="layanan-seo-surabaya" className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Jasa Servis AC Surabaya & Layanan Perbaikan Elektronik Panggilan
          </h2>
          <p className="text-gray-600 text-lg leading-8">
            CV. Arsa Prima Solution melayani kebutuhan servis AC, servis mesin cuci, servis kulkas, dan instalasi listrik
            untuk area Surabaya dan sekitarnya. Pilih halaman layanan khusus di bawah ini untuk informasi detail,
            estimasi pekerjaan, area layanan, dan cara pemesanan teknisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {seoLinks.map((item) => (
            <article key={item.href} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-7 mb-4">{item.description}</p>
              <Link href={item.href} className="text-primary-600 font-semibold hover:text-primary-700">
                Baca detail {item.title}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
