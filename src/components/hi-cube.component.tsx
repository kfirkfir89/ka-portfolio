import { motion } from 'framer-motion';
import { getRandomInt } from '../routes/home/home.component';

const HiCube = () => {
  let windowVh = '-25vh';
  let windowVw = '45vw';
  let cubeSize = '15rem';
  if (window.innerWidth > 390) {
    windowVh = '-30vh';
    windowVw = '45vw';
    cubeSize = '17rem';
  }
  if (window.innerWidth > 1200) {
    windowVh = '-20vh';
    windowVw = '47vw';
    cubeSize = '20rem';
  }

  return (
    <div className="z-50 flex">
      <motion.div
        initial={{
          x: '-100vw',
          y: windowVh,
        }}
        animate={{
          x: windowVw,
          rotate: [-360, getRandomInt(5, 170)],
          transition: {
            type: 'spring',
            velocity: 10,
            stiffness: 80,
            mass: 3,
            damping: 30,
          },
        }}
        className="relative z-30 flex items-center justify-center"
      >
        <motion.div
          initial={{ height: '0.8rem', width: '0.8rem' }}
          animate={{
            rotate: getRandomInt(5, 170),
            height: cubeSize,
            width: cubeSize,
            transition: { delay: 2 },
          }}
          className="absolute z-20 flex h-10 w-10 bg-teal-300 shadow-sm"
        />
        <motion.div
          initial={{ height: '0.8rem', width: '0.8rem' }}
          animate={{
            rotate: [360, -getRandomInt(5, 170)],
            height: cubeSize,
            width: cubeSize,
            transition: { delay: 2 },
          }}
          className="absolute z-10 flex w-full max-w-xs bg-orange-300 shadow-sm"
        />
      </motion.div>

      {/* info */}
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
        className="relative z-30 flex items-center justify-center "
      >
        <motion.div className="absolute z-20 flex justify-center bg-teal-300 pb-10">
          <div className=" flex flex-col">
            <div className="flex justify-center text-3xl text-amber-700">
              <span className="font-custom">Hi</span>
              <h1 className="flex ">
                {' '}
                <span className="animate-waving-hand pl-1 pt-4 text-2xl">
                  👋🏻
                </span>
              </h1>
              <p className="flex pt-9 ">
                <span className="self-end whitespace-nowrap font-custom  text-xl text-purple-400">
                  I&apos;m
                </span>
                <span className="self-end whitespace-nowrap pl-2 font-custom  text-xl text-purple-400">
                  kfir
                </span>
              </p>
            </div>
            <p className="white pl-3 pt-4 text-xs font-semibold capitalize sm:text-base">
              <span className="whitespace-nowrap">
                A Fullstack web developer
              </span>
              <br />
              <span className="flex">
                bringing ideas to life with fully responsive
              </span>

              <span className="flex whitespace-nowrap">
                and user-friendly applications.
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HiCube;
