/* eslint-disable no-param-reassign */

import { useEffect, useState } from 'react';
import HiCube from '../../components/hi-cube.component';
import BgCubes from '../../components/bg-cubes.component';
import NanaStyleCube from '../../components/nanastyle-cube.component';
import DevPortalCube from '../../components/devportal-cube.component';
import ContactCube from '../../components/contact-cube.component';

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Home = () => {
  const [windowVwInner, setWindowVwInner] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowVwInner(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-full w-full justify-center overflow-hidden bg-white p-4">
      <HiCube />
      <ContactCube />
      <NanaStyleCube />
      <DevPortalCube />
      <BgCubes />
      <div className="absolute bottom-2 z-50  w-full pl-2">
        <span className="tracking-wider text-slate-700 opacity-40">
          © kfir avraham 2023 - All right reserved
        </span>
      </div>
    </div>
  );
};

export default Home;
