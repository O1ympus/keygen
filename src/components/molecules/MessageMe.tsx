import { Contact } from './Contact.tsx';

export const MessageMe = () => {
  return (
    <div className="border border-1 border-custom-gray p-4">
      <p className="font-semibold text-white mb-4">Message me here</p>
      <div>
        <Contact
          iconName="Github"
          text="keygen._exe"
        />
        <Contact
          iconName="Email"
          text="matkovskiyf3vlad@gmail.com"
        />
      </div>
    </div>
  );
};
