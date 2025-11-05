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
          'text-white border-primary hover:bg-primary/30': !disabled,
        },
        `border border-1 py-2 px-4 font-md transition-all duration-300 ease-in-out`,
      )}
    >
      {t(text)}
    </button>
  );
};
