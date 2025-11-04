import React from 'react';
import { useTranslation } from 'react-i18next';

type LangButtonProps = {
  handleIsBurgerMenuActive: (value: boolean) => void;
};

export const LangButton: React.FC<LangButtonProps> = ({
  handleIsBurgerMenuActive,
}) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={() => {
        toggleLanguage();
        handleIsBurgerMenuActive(false);
      }}
      className="flex items-center gap-1 z-30 md:pr-6 lg:pr-8 xl:pr-0 group"
    >
      <span
        className={`text-custom-gray group-hover:text-white group-active:text-white
        transition-all duration-300 ease-in-out text-2xl md:text-base
      `}
      >
        {i18n.language === 'ua' ? 'UA' : 'EN'}
      </span>
    </button>
  );
};
