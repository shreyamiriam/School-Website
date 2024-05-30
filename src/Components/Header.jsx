import React, { useState, useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setShowCloseIcon(false), 500); // Match the transition duration
    } else {
      setIsMenuOpen(true);
      setShowCloseIcon(true);
    }
  };

  return (
    <>
      <div className="w-full lg:h-30 md:h-30 sm:h-30 bg-purple-400 md:flex flex-wrap items-center justify-around hidden">
        <div>
          <span>889123494</span>
          <span>763849390</span>
          <span>9:30am-5:30pm</span>
        </div>
        <div>
          <p className='capitalize'>hellokid,maruthankuzhi,thiruvanathapuram</p>
        </div>
        <div>
          <span>fb</span>
          <span>in</span>
          <span>tw</span>
          <span>pi</span>
        </div>
      </div>

      <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
          <img className='h-10 inline' src="https://hellokidsmaruthankuzhi.com/images/logo.png" alt="Na" />
          <span className='text-3xl cursor-pointer md:hidden block'>
            <button onClick={handleMenuToggle}>
              {showCloseIcon ? <CloseIcon /> : <MoreVertIcon />}
            </button>
          </span>
        </div>

        <ul className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:pl-0 pl-7 transition-all ease-in duration-500 ${isMenuOpen ? 'top-20 opacity-100' : 'top-[-400px] opacity-0'} md:top-auto md:opacity-100`}>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            <a href="/">Home</a>
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            <a href="/about">About</a>
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            Services
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            Gallery
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;