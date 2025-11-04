import { Heading } from '../../molecules/Heading.tsx';
import { MessageMe } from '../../molecules/MessageMe.tsx';
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between mb-[100px] lg:mb-[145px]">
      <Heading
        text="header-contacts"
        linePresent={true}
        className={`md:max-w-[317px]`}
      />
      <div className={`flex flex-col gap-y-8 lg:flex-row justify-between`}>
        <div className="w-full lg:max-w-[505px]">
          <p className="text-custom-gray font-medium">{t('i-am-seeking')}</p>
        </div>
        <div className="flex items-end">
          <MessageMe />
        </div>
      </div>
    </div>
  );
};
