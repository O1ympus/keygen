import { Logo } from '../molecules/Logo.tsx';
import { Icon } from '../atoms/Icon.tsx';

export const Footer = () => {
  return (
    <footer
      className={`py-8 px-[171px] border-t border-t-1 border-custom-gray
          w-screen flex flex-col items-center h-fit`}
    >
      <div className="mb-12 flex justify-between items-start w-full">
        <div>
          <Logo />
          <p className="text-white mt-4">Full stack developer</p>
        </div>
        <div>
          <h3 className="text-2xl text-white font-medium mb-3">Media</h3>
          <ul className="flex gap-2">
            <li>
              <Icon fileName="Github" />
            </li>
            <li>
              <Icon fileName="Figma" />
            </li>
            <li>
              <Icon fileName="Discord" />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-custom-gray">© Copyright 2025. Made by Keygen</p>
    </footer>
  );
};
