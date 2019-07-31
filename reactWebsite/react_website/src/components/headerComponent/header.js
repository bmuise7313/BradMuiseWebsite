import React from 'react';
import Logo from './logo.png'
import{
  Link
} from 'react-router-dom';

function Header() {
  return (
      <header>
      <div className="logo">
    <img src={Logo} alt="Logo" />
      </div>

      <nav>
        <ul>
          <li className="first">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Workhistory">Work History</Link>
          </li>
          <li className="last">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>


      </header>
  );
}

export default Header;
