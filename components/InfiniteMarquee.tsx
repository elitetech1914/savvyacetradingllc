// components/InfiniteMarquee.tsx
import Image from 'next/image';
import React from 'react';

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * If true, the image is a monochrome icon with transparency (alpha) so
   * it can be used as a mask to paint an exact color. If omitted, the
   * component will try to use the chosen tint mode sensibly.
   */
  isIcon?: boolean;
}

interface InfiniteMarqueeProps {
  logos: Logo[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  /** Hex or any valid CSS color. Default: #483953 */
  tintColor?: string;
  /**
   * 'mask' — use the image as a mask and paint with `tintColor` (exact color; requires an icon with alpha).
   * 'overlay' — render the image normally and place a colored overlay using mix-blend-mode (good for many images).
   * 'filter' — apply CSS filter chain to tint the image approximately (useful if you must keep an <img> and can't mask).
   */
  tintMode?: 'mask' | 'overlay' | 'filter';
  /**
   * Optional custom CSS filter string (only used when tintMode === 'filter')
   */
  filterString?: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  logos,
  direction = 'left',
  speed = 'normal',
  gap = 'lg',
  tintColor = '#483953',
  tintMode = 'mask',
  filterString
}) => {
  // Duplicate the logos array multiple times for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  } as const;

  const gapClasses = {
    sm: 'gap-8',
    md: 'gap-12',
    lg: 'gap-16',
    xl: 'gap-24'
  } as const;

  // Default filter chain approximation for #483953 — filters are approximate.
  const defaultFilter =
    'brightness(0) saturate(100%) sepia(1) hue-rotate(250deg) saturate(500%) brightness(.9) contrast(1.05)';

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div
        className={`flex ${gapClasses[gap]} ${speedClasses[speed]} items-center`}
        // direction can be implemented in your CSS keyframes by reversing transform direction
        data-direction={direction}
      >
        {duplicatedLogos.map((logo, index) => {
          const wrapperStyle: React.CSSProperties = {
            width: `${logo.width}px`,
            height: `${logo.height}px`
          };

          // 1) Mask mode: draw a colored box and use the image as a mask
          if (tintMode === 'mask' && logo.isIcon !== false) {
            // IMPORTANT: Masking requires the source to be reachable via URL.
            // If your logo.src is a path from /public or an absolute URL it will work.
            const maskUrl = `url(${logo.src})`;
            const maskStyle: React.CSSProperties = {
              backgroundColor: tintColor,
              WebkitMaskImage: maskUrl,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              WebkitMaskSize: 'contain',
              maskImage: maskUrl,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain'
            };

            return (
              <div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 transition-transform hover:scale-105"
                style={{ ...wrapperStyle }}
                aria-hidden={false}
              >
                <div
                  style={{ ...maskStyle, width: '100%', height: '100%' }}
                  // visually we use the mask; keep the alt for screen readers
                  aria-label={logo.alt}
                  role="img"
                />
              </div>
            );
          }

          // 2) Overlay mode: render the image then a colored overlay using mix-blend-mode
          if (tintMode === 'overlay') {
            return (
              <div
                key={`${logo.alt}-${index}`}
                className="relative flex-shrink-0 transition-transform hover:scale-105"
                style={wrapperStyle}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="w-full h-full object-contain block"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: tintColor, mixBlendMode: 'color' }}
                />
              </div>
            );
          }

          // 3) Filter mode (or fallback): apply CSS filter to the <img>
          const filterToUse = filterString ?? defaultFilter;

          return (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 transition-transform hover:scale-105"
              style={wrapperStyle}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-full h-full object-contain block"
                loading="lazy"
                style={{ filter: filterToUse }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
