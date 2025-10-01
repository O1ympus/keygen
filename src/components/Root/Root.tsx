import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import App from '../../App.tsx';
import { HomePage } from '../pages/HomePage.tsx';

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
      </Route>
    </Routes>
  </HashRouter>
);
