'use client'

import { MessageCircle } from 'lucide-react'
import { generateWhatsAppUrl, generateServiceWhatsAppUrl, WhatsAppMessageParams } from './whatsappGenerator'

interface WhatsAppButtonProps {
  text?: string
  service?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'floating'
  size?: 'sm' | 'md' | 'lg'
  params?: WhatsAppMessageParams
}

export default function WhatsAppButton({
  text = 'Hubungi via WhatsApp',
  service,
  className = '',
  variant = 'primary',
  size = 'md',
  params
}: WhatsAppButtonProps) {
  const url = service 
    ? generateServiceWhatsAppUrl(service)
    : generateWhatsAppUrl(params)

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-green-100 hover:bg-green-200 text-green-700 border-2 border-green-500',
    floating: 'fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white shadow-2xl rounded-full !p-4'
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2 
        font-semibold rounded-xl 
        transition-all duration-300 
        hover:-translate-y-0.5
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <MessageCircle className={size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
      {variant !== 'floating' && <span>{text}</span>}
    </a>
  )
}

// Floating WhatsApp Button Component
export function FloatingWhatsAppButton() {
  return (
    <WhatsAppButton 
      variant="floating" 
      params={{ customMessage: 'Halo CV. Arsa Prima Solution, saya ingin bertanya tentang layanan Anda.' }}
    />
  )
}
