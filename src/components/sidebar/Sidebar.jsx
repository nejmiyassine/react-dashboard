// Style
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Logo */}
      <div className='top'>
        <span className='logo'>Let's Code</span>
      </div>

      {/* Horizontal Link */}
      <hr />

      {/* Dashboard Links */}
      <div className='center'>
        <ul>
          <li>
            <span>List 1</span>
          </li>
          <li>
            <span>List 2</span>
          </li>
          <li>
            <span>List 3</span>
          </li>
          <li>
            <span>List 4</span>
          </li>
        </ul>
      </div>

      {/* Colors */}
      <div className='bottom'>colors</div>
    </div>
  );
};

export default Sidebar;
