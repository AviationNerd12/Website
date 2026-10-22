import React, { useEffect } from 'react';
import { ProjectMedia } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  media: ProjectMedia | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ media, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (media) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [media, onClose]);

  if (!media) return null;

  return (
    <div
      role="dialog"
      aria-label="Technical Figure Preview"
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg bg-slate-900/90 text-slate-300 hover:text-white hover:bg-cyan-950 border border-slate-700/80 transition-colors z-10 cursor-pointer"
        title="Close Preview (ESC)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[82vh] flex flex-col items-center bg-[#070b16] border border-cyan-800/60 rounded-xl overflow-hidden shadow-2xl shadow-cyan-950/40 relative"
      >
        <div className="w-full overflow-auto max-h-[70vh] flex items-center justify-center bg-white p-2">
          <img
            src={media.src}
            alt={media.alt}
            className="max-w-full max-h-[66vh] object-contain block mx-auto"
          />
        </div>

        {/* Footer Caption */}
        <div className="w-full px-5 py-3.5 bg-[#090e1c] border-t border-cyan-950 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-slate-200 font-medium">{media.caption || media.alt}</span>
          <div className="flex items-center gap-3">
            <a
              href={media.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Open Raw Image</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
