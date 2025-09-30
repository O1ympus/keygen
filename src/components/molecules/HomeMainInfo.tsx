import { LiveButton } from '../atoms/buttons/LiveButton.tsx';

export const HomeMainInfo = () => {
  return (
    <div className="mt-[74px] mb-[85px]">
      <h1 className="font-semibold text-[32px] text-white mb-8 max-w-[537px]">
        Keygen is a<span className="text-primary"> full stack </span>developer
      </h1>
      <p className="text-custom-gray mb-6 max-w-[463px]">
        He crafts responsive websites where technologies meet creativity
      </p>
      <LiveButton text="Contact me!!" />
    </div>
  );
};
