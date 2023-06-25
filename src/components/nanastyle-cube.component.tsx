import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NanaStyleIcon } from '../assets/nanalogo.svg';
import { ReactComponent as GibHubIcon } from '../assets/iconmonstr-github-1.svg';
import { getRandomInt } from '../routes/home/home.component';

const NanaStyleCube = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  let windowVh = '14vh';
  let windowVw = '67vw';
  let cubeSize = '8rem';
  if (window.innerWidth > 390) {
    windowVh = '-5vh';
    windowVw = '70vw';
    cubeSize = '10rem';
  }
  if (window.innerWidth > 1200) {
    windowVh = '5vh';
    windowVw = '63vw';
    cubeSize = '10rem';
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div className={`${isToggled ? 'z-[100]' : 'z-50'} flex`}>
      <motion.div
        initial={{
          x: '-100vw',
          y: windowVh,
        }}
        animate={{
          x: isToggled ? '50vw' : windowVw,
          y: isToggled ? '0vh' : windowVh,
          rotate: isToggled ? 0 : [-360, getRandomInt(5, 170)],
          transition: {
            type: 'spring',
            velocity: 10,
            stiffness: 80,
            mass: 3,
            damping: 30,
          },
        }}
        className="relative z-30 flex cursor-pointer items-center justify-center"
      >
        <motion.div
          initial={{ height: '0.8rem', width: '0.8rem' }}
          animate={{
            rotate: getRandomInt(5, 170),
            height: isToggled ? '65rem' : cubeSize,
            width: isToggled ? '65rem' : cubeSize,
            transition: { delay: isMounted ? 0 : 2 },
          }}
          onClick={() => setIsToggled(!isToggled)}
          className="absolute z-20 flex h-10 w-10 bg-teal-300"
        />
        <motion.div
          initial={{ height: '0.8rem', width: '0.8rem' }}
          animate={{
            rotate: [360, -getRandomInt(5, 170)],
            height: cubeSize,
            width: cubeSize,
            transition: { delay: 2 },
          }}
          className="absolute z-10 flex w-full max-w-xs bg-orange-300"
        />
        {isToggled && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            className="absolute z-50 mr-8 max-h-full w-[310px] cursor-default flex-col justify-center overflow-auto py-8 pb-12 sm:w-[460px]"
          >
            <h1 className="mb-4 self-center whitespace-nowrap p-4 font-custom text-3xl">
              <NanaStyleIcon className="h-fit w-28 sm:w-32" />
              <div className="absolute  right-4 top-10 h-10 w-10 ">
                <div className="relative h-full w-full">
                  <button
                    className="absolute  h-full w-full"
                    onClick={() => setIsToggled(false)}
                  >
                    <span className="absolute left-0 h-1 w-10 origin-center rotate-45 rounded-full bg-slate-700 shadow-md"></span>
                    <span className="absolute left-0 h-1 w-10 origin-center -rotate-45 rounded-full bg-orange-300 shadow-md"></span>
                  </button>
                </div>
              </div>
            </h1>
            <p className="flex flex-col px-6 pb-4">
              <span>
                nana-style is e-commerce-app system built in TypeScript, React,
                Redux, Tailwind, Firebase.
              </span>
              <span>
                Fully responsive design features an intuitive user interface,
                client-side interface, admin-side dashboard.
              </span>
              <br />
              <span>
                • Implemented Firebase Authentication and Firebase Storage.
              </span>
              <span>
                • Built a user profile system, account detail updates and
                addresses management.
              </span>
              <span>
                • Incorporated filters for user-customizable item sorting by
                color, size, etc.
              </span>
              <span>
                • Developed a shopping cart quantity update, and removal.
              </span>
              <span>• Integrated Stripe payment via serverless function.</span>
              <span>• Implemented a ”Favorites” , Search feture.</span>
              <span>
                • Implemented a content management system for adding categories,
                subcategories, and new products.
              </span>
              <span>
                • Developed a customizable product-listing feature, enabling
                creation of links to these product lists.
              </span>
              <span>
                • Built a pages-preview functionality to customize the website’s
                homepage and manage associated links to product lists or
                categories.
              </span>
            </p>
            <div className="flex justify-center gap-4 py-8">
              <div className=" flex items-center justify-center gap-8">
                <div className="group relative  inline-flex">
                  <div className="transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r  from-gray-100 via-orange-100 to-gray-100 opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
                  <Link
                    target="_blank"
                    to="https://nanastyle-e.com/"
                    className="font-pj relative inline-flex h-14 items-center   justify-center bg-gray-300 px-12  text-lg font-bold uppercase text-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                    role="button"
                  >
                    live
                  </Link>
                </div>
                <div className="group relative  inline-flex">
                  <div className="transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r  from-gray-100 via-orange-100 to-gray-100 opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
                  <Link
                    target="_blank"
                    to="https://github.com/kfirkfir89/e-commerce-app"
                    className="font-pj relative inline-flex h-14 items-center   justify-center bg-slate-700 px-12  text-lg font-bold uppercase text-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                    role="button"
                  >
                    <GibHubIcon className="w-9 text-gray-100 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {!isToggled && (
        <motion.div
          initial={{
            x: windowVw,
            y: windowVh,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 2.2,
            },
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, 5, -5, 5, -5, 0],
          }}
          className="relative z-30 flex cursor-pointer items-center justify-center"
          onClick={() => setIsToggled(!isToggled)}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 5, -5, 0],
              transition: {
                duration: 0.5,
              },
            }}
            className="absolute z-20 flex justify-center "
          >
            <NanaStyleIcon className="h-fit w-28 sm:w-32" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NanaStyleCube;
