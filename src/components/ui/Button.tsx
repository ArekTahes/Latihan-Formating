import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
}

const variants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl',
  secondary: 'bg-secondary-800 text-white hover:bg-secondary-900 shadow-lg hover:shadow-xl',
  outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
  ghost: 'text-gray-600 hover:bg-gray-100'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  disabled = false,
  type = 'button',
  icon
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {icon}
      {children}
    </button>
  )
}
