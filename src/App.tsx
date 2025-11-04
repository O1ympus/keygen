import './index.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header.tsx';
import { Footer } from './components/organisms/Footer.tsx';
import { useBurgerMenu } from './hooks/useBurgerMenu.ts';
import cn from 'classnames';
import { linkNames } from './api/Constants.tsx';

function App() {
  const { isBurgerMenuActive, setIsBurgerMenuActive } = useBurgerMenu();

  return (
    <div
      className={cn(
        {
          'max-h-[100vh] overflow-y-hidden': isBurgerMenuActive,
        },
        `
            font-fira bg-background
            min-h-screen relative overflow-x-hidden
        `,
      )}
    >
      <Header
        linkNames={linkNames}
        isBurgerMenuActive={isBurgerMenuActive}
        handleIsBurgerMenuActive={setIsBurgerMenuActive}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
