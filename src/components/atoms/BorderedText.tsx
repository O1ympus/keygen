import * as React from 'react';
import { useTranslation } from 'react-i18next';

type BorderedTextProps = {
  text: string;
  whiteWords: string[];
};

export const BorderedText: React.FC<BorderedTextProps> = ({
  text,
  whiteWords,
}) => {
  const { t } = useTranslation();
  const parts = text.split(/(\s+)/);

  return (
    <div className="border border-1 border-custom-gray p-2 text-custom-gray">
      {parts.map((part, i) => {
        const cleanWord = part.replace(/[.,!?;:]+$/g, '');
        const isWhite = whiteWords.includes(cleanWord);

        return (
          <span
            key={i}
            className={isWhite ? 'text-white break-words' : undefined}
          >
            {t(part)}
          </span>
        );
      })}
    </div>
  );
};
