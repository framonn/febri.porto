import React, { useState } from 'react';
import { Layers, Image as ImageIcon } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  title?: string;
  badge?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  title,
  badge,
  aspectRatio = '16/9',
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [failedOriginal, setFailedOriginal] = useState<boolean>(false);
  const [failedAll, setFailedAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleError = () => {
    if (!failedOriginal && fallbackSrc && fallbackSrc !== currentSrc) {
      setFailedOriginal(true);
      setCurrentSrc(fallbackSrc);
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
      : 'aspect-square';

  if (failedAll) {
    return (
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-navy-900/80 border border-electric-sky/20 flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-sky/30 flex items-center justify-center text-electric-sky mb-3 shadow-glow-sm">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-semibold text-slate-200 line-clamp-1 mb-1 font-space">
            {title || alt}
          </h4>
          <span className="text-xs text-slate-400 font-mono mb-3">
            {badge || 'Interactive Project Preview'}
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-800/90 border border-slate-700/60 text-[11px] text-slate-400 font-mono">
            <Layers className="w-3 h-3 text-electric-sky" />
            <span>Drop image to {src}</span>
          </div>
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
        className={`w-full h-full object-cover object-top transition-all duration-700 ${
          isLoading ? 'opacity-0 scale-98 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      />
    </div>
  );
};
