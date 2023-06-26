'use client';

import Image from 'next/image';
import Logo from '../../../public/images/logo.svg';
import HamburgerIcon from '../../../public/images/icon-hamburger.svg';
import CloseIcon from '../../../public/images/icon-close.svg';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className='logo'>
        <Image src={Logo} alt='Easybank' />
      </div>
      <div className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
        <Image src={isOpen ? CloseIcon : HamburgerIcon} alt='menu toggle' />
      </div>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>About</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
          <li>
            <Link href='#'>Blog</Link>
          </li>
          <li>
            <Link href='#'>Careers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
