import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';
import { HiMenu, HiXCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={`app__navbar ${toggle ? 'bold-navbar' : ''}`}>
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'skills', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiXCircle onClick={() => setToggle(false)} />
            <ul className='sidebar-open'>
              {['home', 'about', 'skills', 'contact'].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

