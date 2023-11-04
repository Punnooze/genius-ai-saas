'use client';

import React, { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('46352468-a525-4db4-8f4b-10cb84fb5a2c');
  }, []);
  return null;
};

export default CrispChat;
