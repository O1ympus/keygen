import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const SupportMe = () => {
  const { t } = useTranslation();

  return (
    <div className="border border-1 border-custom-gray p-4 w-fit h-fit">
      <p className="font-semibold text-white mb-4">{t('support')}</p>
      <button
        className={`text-custom-gray hover:text-white transition-all
          duration-300 
        `}
        onClick={(e) => {
          e.preventDefault();
          copy('4441114463260628');
          toast.success('Card number copied!', {
            style: {
              color: '#ABB2BF',
              backgroundColor: '#282C33',
              border: '1px solid #ABB2BF',
            },
          });
        }}
      >
        4441114463260628
      </button>
    </div>
  );
};
