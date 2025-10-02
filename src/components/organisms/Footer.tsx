import { Logo } from '../molecules/Logo.tsx';

export const Footer = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={`py-8 px-[171px] border-t border-t-1 border-custom-gray
          w-screen flex flex-col items-center h-fit`}
    >
      <div className="mb-12 flex justify-between items-center w-full">
        <div>
          <Logo />
          <p className="text-white mt-4">Full stack developer</p>
        </div>
        <div>
          <button
            className={`border border-1 border-custom-gray rounded-full
              w-12 h-12 flex items-center justify-center group hover:border-white
              transition-all duration-300 ease-in-out cursor-pointer
            `}
            onClick={handleScroll}
          >
            <svg
              className={`transition-all duration-300 ease-in-out
                text-custom-gray group-hover:text-white
              `}
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.52827 5.47124C0.26792 5.21089 0.26792 4.78878 0.52827 4.52843L4.52827 0.528433C4.78862 0.268083 5.21073 0.268083 5.47108 0.528433L9.47108 4.52843C9.73143 4.78878 9.73143 5.21089 9.47108 5.47124C9.21073 5.73159 8.78862 5.73159 8.52827 5.47124L4.99967 1.94265L1.47108 5.47124C1.21073 5.73159 0.788619 5.73159 0.52827 5.47124Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-custom-gray">© Copyright 2025. Made by Keygen</p>
    </footer>
  );
};
