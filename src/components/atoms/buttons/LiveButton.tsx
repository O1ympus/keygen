import * as React from 'react';
import { useTranslation } from 'react-i18next';

type LiveButtonProps = {
  text: string;
};

export const LiveButton: React.FC<LiveButtonProps> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <button
      className={`border border-1 border-primary py-2 px-4 font-md text-white
        hover:bg-primary/30 transition-all duration-300 ease-in-out
      `}
    >
      {t(text)}
    </button>
  );
};
