import { AbsoluteElement } from './AbsoluteElement.tsx';
import { Dots } from '../Dots.tsx';

export const HomeElements = () => {
  return (
    <div className={`hidden xl:block`}>
      <AbsoluteElement
        className={`top-[670px] -right-[1px] w-[91px] h-[91px]`}
      />
      <AbsoluteElement
        className={`top-[1160px] -right-[87px] w-[155px] h-[155px]`}
      />
      <AbsoluteElement
        className={`bottom-[912px] -left-[77px] w-[155px] h-[155px]`}
      />
      <Dots className={`-left-[31px] bottom-[384px]`} />
      <Dots className={`-right-[23px] bottom-[795px]`} />
    </div>
  );
};
