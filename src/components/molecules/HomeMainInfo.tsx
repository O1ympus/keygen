import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const HomeMainInfo = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`my-[40px] md:mt-[74px] md:mb-[85px] flex flex-col items-center lg:block
    text-center lg:text-left
    `}
    >
      <h1 className="font-semibold text-[32px] text-white mb-8 lg:max-w-[537px]">
        {t('keygen-is')}
        <span className="text-primary"> {t('fullstack-developer')}</span>
      </h1>
      <p className="text-custom-gray mb-6 lg:max-w-[443px]">
        {t('he-crafts-websites')}
      </p>
      <NavLink to="contacts">
        <LiveButton text="contact-me" />
      </NavLink>
    </div>
  );
};
