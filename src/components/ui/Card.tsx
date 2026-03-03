import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md'
}: CardProps) {
  return (
    <div 
      className={clsx(
        'bg-white rounded-2xl shadow-lg transition-all duration-300',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  )
}

// Card Header Component
export function CardHeader({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={clsx('mb-4', className)}>
      {children}
    </div>
  )
}

// Card Title Component
export function CardTitle({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <h3 className={clsx('text-xl font-bold text-secondary-900', className)}>
      {children}
    </h3>
  )
}

// Card Description Component
export function CardDescription({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <p className={clsx('text-gray-600', className)}>
      {children}
    </p>
  )
}

// Card Content Component
export function CardContent({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

// Card Footer Component
export function CardFooter({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={clsx('mt-4 pt-4 border-t border-gray-100', className)}>
      {children}
    </div>
  )
}
