interface ImagePlaceholderProps {
  icon?: React.ReactNode
  className?: string
  gradientFrom?: string
  gradientTo?: string
}

export default function ImagePlaceholder({ 
  icon, 
  className = '',
  gradientFrom = 'from-primary-400',
  gradientTo = 'to-secondary-600'
}: ImagePlaceholderProps) {
  return (
    <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Animated pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px'
        }}
      />
      {/* Icon */}
      {icon && (
        <div className="relative z-10 text-white/40">
          {icon}
        </div>
      )}
    </div>
  )
}
