import * as React from 'react';
import { Sidebar } from '../molecules/Sidebar.tsx';
import { Title } from '../molecules/Title.tsx';
import { MessageMe } from '../molecules/MessageMe.tsx';
import { SupportMe } from '../molecules/SupportMe.tsx';
import { Heading } from '../molecules/Heading.tsx';
import { Icon } from '../atoms/Icon.tsx';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { ContactsElements } from '../molecules/AbsoluteElements/ContactsElements.tsx';

export const Contacts: React.FC = () => {
  return (
    <div className={`px-4 md:px-6 lg:px-8 xl:px-[171px] mt-[53px]`}>
      <ContactsElements />
      <Sidebar />
      <Title
        title="contacts"
        subtitle="Who am i?"
      />

      <div
        className={`flex justify-between items-center gap-[117px] mb-[25px]`}
      >
        <p className="text-custom-gray font-medium max-w-[400px]">
          I’m currently seeking a Full-Stack Developer position. If you have any
          requests or questions, feel free to contact me.
        </p>
        <div className={`flex gap-[11px] w-fit`}>
          <SupportMe />
          <MessageMe />
        </div>
      </div>

      <Heading
        text="all-media"
        linePresent={false}
        className={`mb-[22px]`}
      />
      <div
        className={`flex items-center gap-[22px] text-custom-gray mb-[84px]`}
      >
        <div
          className={`group cursor-pointer flex gap-[5px] items-center`}
          onClick={() => {
            copy('keygen.app');
            toast.success('Discord name copied!', {
              style: {
                color: '#ABB2BF',
                backgroundColor: '#282C33',
                border: '1px solid #ABB2BF',
              },
            });
          }}
        >
          <Icon name="discord" />
          <span
            className={`group-hover:text-white transition-all duration-300
            ease-in-out
          `}
          >
            keygen.app
          </span>
        </div>
      </div>
    </div>
  );
};
