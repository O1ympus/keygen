import { LiveButton } from '../atoms/buttons/LiveButton.tsx';
import { NavLink } from 'react-router-dom';

export const HomeMainInfo = () => {
  return (
    <div
      className={`my-[40px] md:mt-[74px] md:mb-[85px] flex flex-col items-center lg:block
    text-center lg:text-left
    `}
    >
      <h1 className="font-semibold text-[32px] text-white mb-8 lg:max-w-[537px]">
        Keygen is a<span className="text-primary"> full stack developer</span>
      </h1>
      <p className="text-custom-gray mb-6 lg:max-w-[443px]">
        He crafts responsive websites where technologies meet creativity
      </p>
      <NavLink to="contacts">
        <LiveButton text="Contact me!!" />
      </NavLink>
    </div>
  );
};
