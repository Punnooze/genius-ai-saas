import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import logo from '../public/logo.png';
import Image from 'next/image';

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="/logo,png" />
      <AvatarFallback>
        <Image height={26} width={26} src={logo} alt="G" />
      </AvatarFallback>
    </Avatar>
  );
};

export default BotAvatar;
