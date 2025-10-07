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
  const parts = text.split(/(\s+)/);
  const { t } = useTranslation();

  return (
    <div className="border border-1 border-custom-gray p-2 text-custom-gray">
      {parts.map((part, i) =>
        whiteWords.includes(part) ?
          <span
            key={i}
            className="text-white break-words"
          >
            {t(part)}
          </span>
        : <span key={i}>{t(part)}</span>,
      )}
    </div>
  );
};
