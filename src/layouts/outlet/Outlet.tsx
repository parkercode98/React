import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Bookmarks } from '../../pages';

function Outlet() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
        </Routes>
      </Router>
    </>
  );
}

export default Outlet;
