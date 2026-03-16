export const surabayaLocations = [
  'sawahan',
  'rungkut',
  'wiyung',
  'dukupak',
  'sukomanunggal',
  'karangpilang',
  'lakarsantri',
  'kenjeran',
  'mulyorejo',
  'gubeng',
  'tegalsari',
  'sukolilo',
  'tandes',
  'jeruk',
  'bulak',
  'semampir',
  'tambaksari',
  'wonokromo',
  'gayungan',
] as const

const locationNameMap: Record<(typeof surabayaLocations)[number], string> = {
  sawahan: 'Sawahan',
  rungkut: 'Rungkut',
  wiyung: 'Wiyung',
  dukupak: 'Dukuh Pakis',
  sukomanunggal: 'Sukomanunggal',
  karangpilang: 'Karangpilang',
  lakarsantri: 'Lakarsantri',
  kenjeran: 'Kenjeran',
  mulyorejo: 'Mulyorejo',
  gubeng: 'Gubeng',
  tegalsari: 'Tegalsari',
  sukolilo: 'Sukolilo',
  tandes: 'Tandes',
  jeruk: 'Jeruk',
  bulak: 'Bulak',
  semampir: 'Semampir',
  tambaksari: 'Tambaksari',
  wonokromo: 'Wonokromo',
  gayungan: 'Gayungan',
}

export function isValidSurabayaLocation(value: string): value is (typeof surabayaLocations)[number] {
  return surabayaLocations.includes(value as (typeof surabayaLocations)[number])
}

export function formatSurabayaLocation(value: string): string {
  if (isValidSurabayaLocation(value)) {
    return locationNameMap[value]
  }

  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const featuredSurabayaLocations = surabayaLocations.slice(0, 15)

export function toServisACLocationSlug(lokasi: (typeof surabayaLocations)[number]): string {
  return `servis-ac-${lokasi}`
}

export function getLocationFromServisACSlug(slug: string): (typeof surabayaLocations)[number] | null {
  if (!slug.startsWith('servis-ac-')) {
    return null
  }

  const locationPart = slug.replace('servis-ac-', '')
  return isValidSurabayaLocation(locationPart) ? locationPart : null
}
