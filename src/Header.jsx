import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header>
      <h1>Library</h1>
      <ul>
        <li>
          <div className="sign-inBtn">
           <Button buttonText="SIGN IN" />
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
