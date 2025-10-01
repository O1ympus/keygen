import { HomeMainInfo } from '../../molecules/HomeMainInfo.tsx';
import { HomeMainExtra } from '../../molecules/HomeMainExtra.tsx';

export const HomeMain = () => {
  return (
    <div className="flex justify-between gap-[18px] mb-28">
      <HomeMainInfo />
      <HomeMainExtra />
    </div>
  );
};
