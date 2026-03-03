// WhatsApp URL Generator Utility
// Nomor WhatsApp utama: 087865502146 (Pak Adi)

const WHATSAPP_NUMBER = '6287865502146'

export interface WhatsAppMessageParams {
  service?: string
  lokasi?: string
  waktu?: string
  customMessage?: string
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppUrl(params?: WhatsAppMessageParams): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`
  
  if (!params) {
    return baseUrl
  }

  if (params.customMessage) {
    return `${baseUrl}?text=${encodeURIComponent(params.customMessage)}`
  }

  const message = `Halo CV. Arsa Prima Solution,

Saya ingin menggunakan jasa:
Jenis Service : ${params.service || '[Pilih Layanan]'}
Lokasi        : ${params.lokasi || '[Alamat Anda]'}
Waktu         : ${params.waktu || '[Waktu yang Diinginkan]'}

Mohon informasinya. Terima kasih.`

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}

/**
 * Generate WhatsApp URL for specific service
 */
export function generateServiceWhatsAppUrl(serviceName: string): string {
  return generateWhatsAppUrl({
    service: serviceName,
    lokasi: '[Alamat Anda]',
    waktu: '[Waktu yang Diinginkan]'
  })
}

/**
 * Get plain WhatsApp number
 */
export function getWhatsAppNumber(): string {
  return WHATSAPP_NUMBER
}

/**
 * Get formatted display number
 */
export function getDisplayNumber(): string {
  return '0878-6550-2146'
}
