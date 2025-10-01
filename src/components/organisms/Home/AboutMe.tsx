import { Heading } from '../../molecules/Heading.tsx';
import { About } from '../../molecules/About.tsx';

export const AboutMe = () => {
  return (
    <div className={`mb-[112px]`}>
      <Heading
        text="about-me"
        linePresent={true}
        className={`max-w-[516px]`}
      />
      <About />
    </div>
  );
};
