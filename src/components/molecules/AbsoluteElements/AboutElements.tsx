import { AbsoluteElement } from './AbsoluteElement.tsx';
import { Dots } from '../Dots.tsx';

export const AboutElements = () => {
  return (
    <div className={`hidden xl:block`}>
      <AbsoluteElement
        className={`top-[256px] -right-[87px] w-[155px] h-[155px]`}
      />
      <AbsoluteElement
        className={`bottom-[400px] -left-[77px] w-[155px] h-[155px]`}
      />
      <Dots className={`-right-[23px] bottom-[300px]`} />
      <Dots className={`-right-[45px] top-[850px]`} />
      <Dots className={`-left-[31px] top-[400px] !h-[39px]`} />
    </div>
  );
};
