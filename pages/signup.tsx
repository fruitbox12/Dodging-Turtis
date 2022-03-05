import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Image from 'next/dist/client/image';
import metamask from '../public/assets/website/metamask.svg';
import avtar from '../public/assets/website/avtar.webp';
import ShortUniqueId from 'short-unique-id';
import axios from 'axios';

library.add(fab);
const uid = new ShortUniqueId({ length: 10 });

function Signup() {
  const [verified, notverified] = useState(0);
  const [nickName, setNickName] = useState('');
  const [selectedImage, setSelectedImage] = useState<any>();
  const [walletAddress, setWalletAddress] = useState<any>('temp');
  const [preview, setPreview] = useState(
    avtar || URL.createObjectURL(selectedImage)
  );

  

export default Signup;
