import { Icon } from '../atoms/Icon.tsx';
import * as React from 'react';

type ContactProps = {
  iconName: string;
  text: string;
};

export const Contact: React.FC<ContactProps> = ({ iconName, text }) => (
  <div className="flex gap-[5px] items-center">
    <Icon fileName={iconName} />
    <span className="text-custom-gray">{text}</span>
  </div>
);
