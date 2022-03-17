import React from 'react';
import NavElement from './NavElement';

import './sidebar.css';

function Sidebar(props: SidebarProps) {
  const options: Array<OptionsElement> = [
    { text: 'Element 1' },
    { text: 'Element 2' },
    { text: 'Element 3' },
    { text: 'Element 4' },
    { text: 'Element 5' },
    { text: 'Element 6' },
  ];

  const test = () => {
    console.log('lol');
  };
  return (
    <div className="flex-container side-bar-wrapper">
      <div className="logo">Logo</div>
      <nav className="flex-container options-wrapper">
        {options.map((opt, index) => {
          return <NavElement text={opt.text}></NavElement>;
        })}
      </nav>
      {/* social icons */}
      <div className="footer"> icons </div>
    </div>
  );
}

export default Sidebar;

interface SidebarProps {}

interface OptionsElement {
  text: string;
}
