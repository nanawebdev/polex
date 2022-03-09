import './sass/styles.scss';
import Videos from './pages/Videos';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import NotFoundPage from './pages/NotFoundPage';
import Account from './pages/Account';

function App() {

  return (
    <>
      <header className="header container">

        <NavLink to="/" className="header__main">PolEx</NavLink>
        <nav className='header__nav'>
          <NavLink to="videos">Видео</NavLink>
          <NavLink to="exercises">Упражнения</NavLink>
        </nav>

        <NavLink to="/account" className="header__account">Аккаунт</NavLink>
      </header>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercises/:id" element={<Exercises />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/videos/:id" element={<Videos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Account />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  );
}

export default App;
