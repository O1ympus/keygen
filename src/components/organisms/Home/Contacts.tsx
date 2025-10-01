import { Heading } from '../../molecules/Heading.tsx';
import { MessageMe } from '../../molecules/MessageMe.tsx';

export const Contacts = () => {
  return (
    <div className="flex justify-between h-[228px] mb-[145px]">
      <div className="max-w-[505px]">
        <Heading
          text="contacts"
          linePresent={true}
        />
        <p className="text-custom-gray font-medium">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
      </div>
      <div className="flex items-end">
        <MessageMe />
      </div>
    </div>
  );
};
