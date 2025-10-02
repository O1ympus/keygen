import './index.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header.tsx';
import { Footer } from './components/organisms/Footer.tsx';

const linkNames = ['home', 'works', 'about-me', 'contacts'];

function App() {
  return (
    <div
      className={`
            w-screen font-fira bg-background
            min-h-screen relative overflow-hidden
        `}
    >
      <Header linkNames={linkNames} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
