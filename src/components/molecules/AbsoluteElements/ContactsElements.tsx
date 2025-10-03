import { AbsoluteElement } from './AbsoluteElement.tsx';
import { Dots } from '../Dots.tsx';

export const ContactsElements = () => {
  return (
    <div className={`hidden xl:block`}>
      <AbsoluteElement
        className={`top-[320px] -right-[87px] w-[155px] h-[155px]`}
      />
      <Dots className={`-left-[31px] top-[450px] !h-[49px]`} />
    </div>
  );
};
