import { AbsoluteElement } from './AbsoluteElement.tsx';
import { Dots } from '../Dots.tsx';

export const WorksElements = () => {
  return (
    <>
      <AbsoluteElement
        className={`top-[256px] -right-[87px] w-[155px] h-[155px]`}
      />
      <AbsoluteElement
        className={`top-[871px] -left-[77px] w-[155px] h-[155px]`}
      />
      <Dots className={`-left-[35px] bottom-[570px]`} />
      <Dots className={`-right-[23px] bottom-[1050px]`} />
      <Dots className={`-left-[31px] top-[400px] !h-[39px]`} />
    </>
  );
};
