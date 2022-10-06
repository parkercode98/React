import './App.module.scss';
import { Navbar, Shell, Outlet } from './layouts';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Shell>
        <Outlet></Outlet>
      </Shell>
    </div>
  );
}

export default App;
