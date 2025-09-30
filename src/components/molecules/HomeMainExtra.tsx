import { CurrentlyWorkingOn } from './CurrentlyWorkingOn.tsx';
import { Dots } from './Dots.tsx';

export const HomeMainExtra = () => {
  return (
    <div className="flex flex-col relative">
      <img
        src="../../../public/img/profile.png"
        alt="anonym"
        className="h-[386px] w-[469px] z-10"
      />
      <CurrentlyWorkingOn text="Portfolio" />
      <img
        src="../../../public/img/logo/logo-dark.svg"
        alt="elias"
        className="w-[155px] h-[155px] absolute top-[84px] -left-3"
      />
      <Dots className="bottom-[93px] right-4" />
    </div>
  );
};
