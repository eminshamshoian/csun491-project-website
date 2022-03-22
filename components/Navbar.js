import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#team'>
                Team
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
