import { Icon } from '../atoms/Icon.tsx';

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-[1px] h-[191px] bg-custom-gray"></div>
      <Icon fileName="Github" />
      <Icon fileName="Dribble" />
      <Icon fileName="Figma" />
    </div>
  );
};
