import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  title?: string;
  badge?: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | 'auto';
  objectFit?: 'cover' | 'contain';
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  title,
  badge,
  aspectRatio = '16/9',
  objectFit = 'cover',
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [failedOriginal, setFailedOriginal] = useState<boolean>(false);
  const [failedAll, setFailedAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Synchronize state whenever src or fallbackSrc changes
  useEffect(() => {
    setCurrentSrc(src);
    setFailedOriginal(false);
    setFailedAll(false);
    setIsLoading(true);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (!failedOriginal && fallbackSrc && fallbackSrc !== currentSrc) {
      setFailedOriginal(true);
      setCurrentSrc(fallbackSrc);
      setIsLoading(true);
    } else {
      setFailedAll(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : aspectRatio === 'auto'
      ? 'aspect-auto'
      : 'aspect-square';

  const fitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover object-top';

  if (failedAll) {
    return (
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-navy-900/80 border border-electric-sky/20 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-sky/30 flex items-center justify-center text-electric-sky mb-2 shadow-glow-sm">
            <ImageIcon className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-semibold text-slate-200 line-clamp-1 mb-1 font-space">
            {title || alt}
          </h4>
          {badge && (
            <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
              {badge}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden bg-navy-900 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-navy-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-electric-sky/30 border-t-electric-sky animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onError={handleError}
        onLoad={handleLoad}
        className={`w-full h-full ${fitClass} transition-all duration-700 ${
          isLoading ? 'opacity-0 scale-98 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      />
    </div>
  );
};
