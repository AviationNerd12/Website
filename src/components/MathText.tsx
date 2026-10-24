import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  // Parse string with inline math $...$ and display math $$...$$
  const renderFormattedText = () => {
    // Split by $$...$$ first, then $...$
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const formula = part.slice(2, -2);
        try {
          const html = katex.renderToString(formula, { displayMode: true, throwOnError: false });
          return (
            <span
              key={index}
              className="my-2 block text-center overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const formula = part.slice(1, -1);
        try {
          const html = katex.renderToString(formula, { displayMode: false, throwOnError: false });
          return (
            <span
              key={index}
              className="inline text-cyan-300 font-mono"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      }

      return <span key={index}>{part}</span>;
    });
  };

  return <span className={className}>{renderFormattedText()}</span>;
};
