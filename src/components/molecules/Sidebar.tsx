import { Icon } from '../atoms/Icon.tsx';

export const Sidebar = () => {
  return (
    <div className="hidden absolute left-[17px] top-0 xl:flex flex-col gap-2 items-center z-50">
      <div className="w-[1px] h-[191px] bg-custom-gray"></div>
      <a
        href="https://t.me/keygen_exe"
        target="_blank"
      >
        <Icon
          name="telegram"
          className={`hover:text-white`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/vladyslav-matkovskyi-477474332/"
        target="_blank"
      >
        <Icon
          name="linkedin"
          className={`hover:text-white`}
        />
      </a>
      <a
        href="https://github.com/O1ympus"
        target="_blank"
      >
        <Icon
          name="github"
          className={`hover:text-white`}
        />
      </a>
    </div>
  );
};
