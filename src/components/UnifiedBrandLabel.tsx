import logoImage from 'figma:asset/a3dec89e46c97b63c4196f50acc08558e3fbe00a.png';
import hungryOutbackLogo from 'figma:asset/7b9f9906182cd17dbe8cdc99d8798553c6d374f9.png';

interface UnifiedBrandLabelProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
  showBackground?: boolean;
}

export function UnifiedBrandLabel({ 
  variant = 'default', 
  className = '',
  showBackground = true 
}: UnifiedBrandLabelProps) {
  const baseClasses = showBackground 
    ? 'bg-[#2a2a2a] rounded-xl border border-[#ff6b35]/20 shadow-lg'
    : '';

  if (variant === 'hero') {
    return (
      <div className={`${baseClasses} p-8 relative overflow-hidden ${className}`}>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute border-l border-white/20"
                style={{
                  left: `${i * 7}%`,
                  height: '100%',
                  transform: `rotate(${Math.sin(i) * 3}deg)`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          {/* Logo Section */}
          <div className="flex items-center justify-center space-x-8 mb-6">
            <img 
              src={logoImage} 
              alt="My Kitchen Café" 
              className="h-20 md:h-24 w-auto object-contain"
            />
            <img 
              src={hungryOutbackLogo} 
              alt="Hungry Outback" 
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>
          
          {/* Service Label */}
          <div className="text-center">
            <div className="text-white text-xl md:text-2xl font-medium tracking-wider mb-2">
              SITE CANTEEN & VENDING MACHINES
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              CONSTRUCTION • MINING • REMOTE SITES
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${baseClasses} p-3 ${className}`}>
        <div className="flex items-center justify-center space-x-3">
          <img 
            src={logoImage} 
            alt="My Kitchen Café" 
            className="h-6 w-auto object-contain"
          />
          <div className="w-px h-4 bg-[#ff6b35]/30"></div>
          <img 
            src={hungryOutbackLogo} 
            alt="Hungry Outback" 
            className="h-5 w-auto object-contain"
          />
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`${baseClasses} p-4 ${className}`}>
      <div className="flex items-center justify-center space-x-4 mb-3">
        <img 
          src={logoImage} 
          alt="My Kitchen Café" 
          className="h-10 w-auto object-contain"
        />
        <div className="w-px h-6 bg-[#ff6b35]/30"></div>
        <img 
          src={hungryOutbackLogo} 
          alt="Hungry Outback" 
          className="h-8 w-auto object-contain"
        />
      </div>
      <div className="text-center">
        <div className="text-[#ff6b35] text-sm font-medium tracking-wider">
          SITE CANTEEN & VENDING MACHINES
        </div>
        <div className="text-gray-400 text-xs mt-1">
          CONSTRUCTION • MINING • REMOTE SITES
        </div>
      </div>
    </div>
  );
}