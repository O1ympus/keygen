import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import App from '../../App.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { Works } from '../pages/Works.tsx';
import { Contacts } from '../pages/Contacts.tsx';
import { AboutMe } from '../pages/AboutMe.tsx';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="home"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

        <Route
          path="works"
          element={<Works />}
        />
        <Route
          path="about-me"
          element={<AboutMe />}
        />
        <Route
          path="contacts"
          element={<Contacts />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
