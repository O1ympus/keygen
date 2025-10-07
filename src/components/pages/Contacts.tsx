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
import { useTranslation } from 'react-i18next';

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`px-4 md:px-6 lg:px-8 xl:px-[171px] mt-[34px] sm:mt-[53px]`}
    >
      <ContactsElements />
      <Sidebar />
      <Title
        title="header-contacts"
        subtitle="who-am-i"
        className={`mb-[20px] md:mb-[46px]`}
      />

      <div
        className={`flex justify-between items-start flex-col md:flex-row
          gap-x-[117px] gap-y-10 mb-10 md:mb-20 lg:mb-[25px]
        `}
      >
        <p className="text-custom-gray font-medium md:max-w-[400px]">
          {t('i-am-seeking')}
        </p>
        <div
          className={`flex flex-col-reverse sm:flex-row-reverse md:flex-col-reverse
          gap-y-4 lg:flex-row gap-x-[11px] w-fit
        `}
        >
          <SupportMe />
          <MessageMe />
        </div>
      </div>

      <div className={`md:absolute top-[400px] left-4 md:left-6 lg:static`}>
        <Heading
          text="all-media"
          linePresent={false}
          className={`!mb-[22px]`}
        />
        <div
          className={`flex items-center gap-[22px] text-custom-gray mb-10 md:mb-[84px]`}
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
    </div>
  );
};
