import './index.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header.tsx';
import { Footer } from './components/organisms/Footer.tsx';
import { useBurgerMenu } from './hooks/useBurgerMenu.ts';
import cn from 'classnames';

const linkNames = ['home', 'works', 'about-me', 'contacts'];

function App() {
  const { isBurgerMenuActive, setIsBurgerMenuActive } = useBurgerMenu();

  return (
    <div
      className={cn(
        {
          'max-h-[100vh] overflow-y-hidden': isBurgerMenuActive,
        },
        `
            w-screen font-fira bg-background
            min-h-screen relative overflow-hidden
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
