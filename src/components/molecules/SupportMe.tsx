import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

export const SupportMe = () => {
  return (
    <div className="border border-1 border-custom-gray p-4 w-fit h-fit">
      <p className="font-semibold text-white mb-4">Support me here</p>
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
