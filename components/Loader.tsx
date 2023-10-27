import Image from 'next/image';
import React from 'react';
import logo from '../public/logo.png';

const Loader = () => {
  return (
    <div
      className="h-full flex flex-col gayp-y-4
  items-center justify-center"
    >
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" fill src={logo} />
      </div>
      <p className="text-sm text-muted-foreground">Genius is thinking....</p>
    </div>
  );
};

export default Loader;