import Link from 'next/link';
import React from 'react';
import './index.scss';

export default function Navbar() {
  return (
    <div className='nav'>
      <p className='logo'>My Blog</p>
      <div>
        <Link href=''>home</Link>
      </div>
    </div>
  );
}
