import * as React from 'react';

type BorderedTextProps = {
  text: string;
  whiteWords: string[];
};

export const BorderedText: React.FC<BorderedTextProps> = ({
  text,
  whiteWords,
}) => {
  const parts = text.split(/(\s+)/);

  return (
    <div className="border border-1 border-custom-gray p-2 text-custom-gray">
      {parts.map((part, i) =>
        (
          whiteWords.includes(part) // clean punctuation
        ) ?
          <span
            key={i}
            className="text-white"
          >
            {part}
          </span>
        : <span key={i}>{part}</span>,
      )}
    </div>
  );
};
