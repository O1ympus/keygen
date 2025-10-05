import { Heading } from '../../molecules/Heading.tsx';
import { MessageMe } from '../../molecules/MessageMe.tsx';

export const Contacts = () => {
  return (
    <div className="flex flex-col justify-between mb-[100px] lg:mb-[145px]">
      <Heading
        text="contacts"
        linePresent={true}
        className={`md:max-w-[317px]`}
      />
      <div className={`flex flex-col gap-y-8 lg:flex-row justify-between`}>
        <div className="w-full lg:max-w-[505px]">
          <p className="text-custom-gray font-medium">
            I’m currently seeking a Full-Stack Developer position. If you have
            any requests or questions, feel free to contact me.
          </p>
        </div>
        <div className="flex items-end">
          <MessageMe />
        </div>
      </div>
    </div>
  );
};
