import { Contact } from './Contact.tsx';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

export const MessageMe = () => {
  return (
    <div className="border border-1 border-custom-gray p-4 w-fit">
      <p className="font-semibold text-white mb-4">Message me here</p>
      <div>
        <a
          href="https://t.me/keygen_exe"
          target="_blank"
        >
          <Contact
            iconName="telegram"
            text="keygen_exe"
          />
        </a>
        <div
          onClick={() => {
            copy('matkovskiyf3vlad@gmail.com');
            toast.success('Email copied!', {
              style: {
                color: '#ABB2BF',
                backgroundColor: '#282C33',
                border: '1px solid #ABB2BF',
              },
            });
          }}
        >
          <Contact
            iconName="email"
            text="matkovskiyf3vlad@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
