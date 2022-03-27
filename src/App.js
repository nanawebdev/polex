import './sass/styles.scss';
import Videos from './pages/Videos';
import { Routes, Route } from "react-router-dom";
import Exercises from './pages/Exercises';
import NotFound from './pages/NotFound';
import Layout from './blocks/Layout';
import Main from './pages/Main';
import Alphabet from './exercises/Alphabet';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/exercises/:id" element={<Exercises />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/videos/:id" element={<Videos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/alphabet" element={<Alphabet />} />
        {/* <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Account />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
