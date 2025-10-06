import { CurrentlyWorkingOn } from './CurrentlyWorkingOn.tsx';
import { Dots } from './Dots.tsx';

export const HomeMainExtra = () => {
  return (
    <div className="flex flex-col items-center relative max-w-[500px] w-full md:w-auto md:max-w-auto">
      <img
        src="/img/profile.png"
        alt="anonym"
        className="max-w-full h-auto md:w-[469px] z-10 object-contain"
      />
      <CurrentlyWorkingOn text="Portfolio" />
      <img
        src="/img/logo/logo-dark.svg"
        alt="elias"
        className={`w-[120px] md:w-[155px] md:h-[155px] absolute
          md:top-[84px] md:-left-3 left-0 top-[50px]
        `}
      />
      <Dots className="bottom-[93px] right-4" />
    </div>
  );
};
