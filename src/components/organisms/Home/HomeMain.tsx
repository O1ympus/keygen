import { HomeMainInfo } from '../../molecules/HomeMainInfo.tsx';
import { HomeMainExtra } from '../../molecules/HomeMainExtra.tsx';

export const HomeMain = () => {
  return (
    <div className="flex justify-center gap-[18px] mb-28 px-[171px]">
      <HomeMainInfo />
      <HomeMainExtra />
    </div>
  );
};
