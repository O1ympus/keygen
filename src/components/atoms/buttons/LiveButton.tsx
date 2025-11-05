import * as React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

type LiveButtonProps = {
  text: string;
  disabled?: boolean;
};

export const LiveButton: React.FC<LiveButtonProps> = ({ text, disabled }) => {
  const { t } = useTranslation();

  return (
    <button
      disabled={disabled}
      className={cn(
        {
          'bg-[#42474F] text-[#ABB2BF] border-[#ABB2BF] hover:bg-[#42474F]':
            disabled,
        },
        `border border-1 border-primary py-2 px-4 font-md text-white
        hover:bg-primary/30 transition-all duration-300 ease-in-out
        `,
      )}
    >
      {t(text)}
    </button>
  );
};
