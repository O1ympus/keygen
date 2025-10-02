import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink
      to="home"
      replace
      className="flex gap-2 items-center h-full"
    >
      <img
        src="../../../public/img/logo/logo-light.svg"
        alt="elias"
        className="w-4 h-4 object-contain"
      />
      <span className="font-bold text-white">Keygen</span>
    </NavLink>
  );
};
