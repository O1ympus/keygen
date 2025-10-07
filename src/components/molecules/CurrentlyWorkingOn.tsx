import { ColoredSquare } from '../atoms/buttons/ColoredSquare.tsx';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

type CurrentlyWorkingOnProps = {
  text: string;
};

export const CurrentlyWorkingOn: React.FC<CurrentlyWorkingOnProps> = ({
  text,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex gap-[10px] px-2 py-[10.5px] items-center border
        border-1 border-custom-gray md:min-w-[402px] md:ml-[20px] md:mr-9
        max-w-[420px] md:max-w-[465px] w-full md:w-auto md:justify-start justify-center
      `}
    >
      <ColoredSquare />
      <p>
        <span className="text-custom-gray mr-2">
          {t('currently-working-on')}
        </span>
        <span className="text-white font-semibold">{t(text)}</span>
      </p>
    </div>
  );
};
