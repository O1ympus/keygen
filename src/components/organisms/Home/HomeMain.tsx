import { HomeMainInfo } from '../../molecules/HomeMainInfo.tsx';
import { HomeMainExtra } from '../../molecules/HomeMainExtra.tsx';

export const HomeMain = () => {
  return (
    <div
      className={`flex justify-between gap-[18px] mb-20 lg:mb-28 flex-col
      lg:flex-row xl:justify-center items-center
    `}
    >
      <HomeMainInfo />
      <HomeMainExtra />
    </div>
  );
};
