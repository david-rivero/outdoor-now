import React from 'react';

import './Header.css';
import logo from './shared/icons/outdoor-now.svg';

export default function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Logo" />
    </header>
  );
}
