import './Navbar.module.scss';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='left'>
        <div className='logo'>
          <h3>React</h3>
        </div>
      </div>
      <div className='mid'></div>
      <div className='right'>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/bookmarks'>Bookmarks</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
