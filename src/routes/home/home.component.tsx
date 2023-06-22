/* eslint-disable no-param-reassign */
import { delay, motion, stagger } from 'framer-motion';
import { url } from 'inspector';
import { useState } from 'react';
import { ReactComponent as CatIcon } from '../../assets/catglasses.svg';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const BigCube = () => {
  const [isHoverd, setIsHoverd] = useState(false);

  return (
    <div className="z-50 flex">
      <motion.div
        initial={{
          x: '-100vw',
          y: '20vh',
        }}
        animate={{
          x: '60vw',
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
            height: '17rem',
            width: '17rem',
            // transition: { delay: 2 },
          }}
          whileHover={
            isHoverd
              ? { height: '35rem', width: '35rem' }
              : { height: '15rem', width: '15rem' }
          }
          onMouseEnter={() => setIsHoverd(true)}
          onMouseLeave={() => setIsHoverd(false)}
          className="absolute z-20 flex h-10 w-10 bg-teal-300"
        />
        <motion.div
          initial={{ height: '0.8rem', width: '0.8rem' }}
          animate={{
            rotate: [360, -getRandomInt(5, 170)],
            height: '17rem',
            width: '17rem',
            transition: { delay: 2 },
          }}
          className="absolute z-10 flex w-full max-w-xs bg-orange-300"
        />
      </motion.div>

      {/* info */}
      <motion.div
        initial={{
          x: '20vw',
          y: '-30vh',
          opacity: 0,
        }}
        animate={{
          x: '20vw',
          y: '-30vh',
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 2.2,
          },
        }}
        className="relative z-30 flex items-center justify-center"
      >
        <motion.div className="absolute z-20 flex h-fit justify-center bg-teal-300 pb-10">
          <div className=" flex flex-col">
            <div className="pl-19 flex text-3xl text-lime-600">
              <span className="font-custom">Hi</span>
              <h1 className="flex">
                {' '}
                <span className="animate-waving-hand pl-1 pt-4 text-2xl">
                  👋🏻
                </span>
              </h1>
              <p className="flex pt-9">
                <span className="self-end whitespace-nowrap font-custom text-xl text-cyan-500">
                  I&apos;M
                </span>
                <span className="self-end whitespace-nowrap pl-2 font-custom text-xl text-cyan-500">
                  kfir
                </span>
                {/* <span className="self-end font-custom text-2xl text-cyan-500">
                {' '}Kfir
                </span> */}
              </p>
            </div>
            <h1 className="whitespace-nowrap py-6 font-semibold">
              Fullstack Web Developer
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
const tailwindColors = [
  'hover:bg-red-300',
  'hover:bg-orange-300',
  'hover:bg-yellow-300',
  'hover:bg-amber-300',
  'hover:bg-lime-300',
  'hover:bg-green-300',
  'hover:bg-emerald-300',
  'hover:bg-teal-300',
  'hover:bg-cyan-300',
  'hover:bg-sky-300',
  'hover:bg-blue-300',
  'hover:bg-indigo-300',
  'hover:bg-violet-300',
  'hover:bg-purple-300',
  'hover:bg-fuchsia-300',
  'hover:bg-pink-300',
  'hover:bg-rose-300',
];
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isHoverdVariants = {
    open: { height: '15rem', width: '15rem' },
    closed: { height: '35rem', width: '35rem' },
  };

  return (
    <div className="flex h-full w-full justify-center overflow-hidden bg-white p-4">
      {/* hi cube */}
      <div className="z-50 flex">
        <motion.div
          initial={{
            x: '-100vw',
            y: '-30vh',
          }}
          animate={{
            x: '20vw',
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
              height: '17rem',
              width: '17rem',
              // transition: { delay: 2 },
            }}
            whileTap={{ height: '40rem', width: '40rem' }}
            className="absolute z-20 flex h-10 w-10 bg-teal-300"
          />
          <motion.div
            initial={{ height: '0.8rem', width: '0.8rem' }}
            animate={{
              rotate: [360, -getRandomInt(5, 170)],
              height: '17rem',
              width: '17rem',
              transition: { delay: 2 },
            }}
            className="absolute z-10 flex w-full max-w-xs bg-orange-300"
          />
        </motion.div>

        {/* info */}
        <motion.div
          initial={{
            x: '20vw',
            y: '-30vh',
            opacity: 0,
          }}
          animate={{
            x: '20vw',
            y: '-30vh',
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 2.2,
            },
          }}
          className="relative z-30 flex items-center justify-center"
        >
          <motion.div className="absolute z-20 flex h-fit justify-center bg-teal-300 pb-10">
            <div className=" flex flex-col">
              <div className="pl-19 flex text-3xl text-lime-600">
                <span className="font-custom">Hi</span>
                <h1 className="flex">
                  {' '}
                  <span className="animate-waving-hand pl-1 pt-4 text-2xl">
                    👋🏻
                  </span>
                </h1>
                <p className="flex pt-9">
                  <span className="self-end whitespace-nowrap font-custom text-xl text-cyan-500">
                    I&apos;M
                  </span>
                  <span className="self-end whitespace-nowrap pl-2 font-custom text-xl text-cyan-500">
                    kfir
                  </span>
                  {/* <span className="self-end font-custom text-2xl text-cyan-500">
                {' '}Kfir
                </span> */}
                </p>
              </div>
              <h1 className="whitespace-nowrap py-6 font-semibold">
                Fullstack Web Developer
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* big cube */}
      <BigCube />

      {/* BG */}
      <div className="relative h-full w-full">
        <div className="absolute z-10">
          <div className="relative h-full w-full">
            {Array.from({ length: 50 }, (_, index) => {
              const setChecker = new Set<number>();
              const circleDimentionsH = getRandomInt(10, 30);
              const cubeDimentionsH = getRandomFloat(1, 1.8);
              let cubeX = getRandomInt(3, 97);
              let cubeY = getRandomInt(3, 97);
              while (setChecker.has(cubeX) || cubeX % 2 === 1) {
                cubeX = getRandomInt(3, 97);
              }
              while (setChecker.has(cubeY) || cubeY % 2 === 1) {
                cubeY = getRandomInt(3, 97);
              }
              setChecker.add(cubeY);
              const cubeXInitDirection = index % 2 === 0 ? '-100vw' : '100vw';
              const cubeDimentionsW = cubeDimentionsH;
              const circleDimentionsW = circleDimentionsH;

              return (
                <div key={index}>
                  <motion.div
                    key={`${index}+cube`}
                    initial={{
                      x: cubeXInitDirection,
                      y: `${cubeY}vh`,
                    }}
                    animate={{
                      x: `${cubeX}vw`,
                      rotate: [-360, getRandomInt(5, 170)],
                      transition: {
                        type: 'spring',
                        velocity: 10,
                        stiffness: 80,
                        mass: 3,
                        damping: 30,
                      },
                    }}
                    className="absolute z-10"
                    whileHover={{
                      scale: 2,
                      rotate: getRandomInt(5, 170),
                    }}
                  >
                    <motion.div className="relative flex flex-col items-center justify-center">
                      <div className="relative flex items-center justify-center ">
                        <motion.div
                          initial={{
                            height: '0.8rem',
                            width: '0.8rem',
                          }}
                          animate={{
                            rotate: getRandomInt(5, 170),
                            height: `${cubeDimentionsH}rem`,
                            width: `${cubeDimentionsW}rem`,
                            transition: { delay: 2 },
                          }}
                          className="absolute bg-gray-400"
                        />
                        <motion.div
                          initial={{
                            height: '0.8rem',
                            width: '0.8rem',
                          }}
                          animate={{
                            rotate: getRandomInt(5, 170),
                            height: `${cubeDimentionsH}rem`,
                            width: `${cubeDimentionsW}rem`,
                            transition: { delay: 2.1 },
                          }}
                          whileTap={{
                            rotate: [360, -360],
                            transition: {
                              type: 'spring',
                              duration: 5,
                            },
                          }}
                          className={`absolute bg-gray-400 opacity-50 ${
                            tailwindColors[
                              getRandomInt(0, tailwindColors.length)
                            ]
                          } hover:opacity-100`}
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    key={`${index}+circle`}
                    initial={{
                      x: cubeXInitDirection,
                      y: `${cubeY}vh`,
                    }}
                    animate={{
                      x: `${cubeX}vw`,
                      rotate: [-360, getRandomInt(5, 170)],
                      transition: {
                        type: 'spring',
                        velocity: 10,
                        stiffness: 80,
                        mass: 3,
                        damping: 30,
                      },
                    }}
                    className="absolute z-0"
                  >
                    <div className="relative flex flex-col items-center justify-center">
                      <motion.div
                        initial={{
                          height: '0vw',
                          width: '0vw',
                        }}
                        animate={{
                          height: `${circleDimentionsH}rem`,
                          width: `${circleDimentionsW}rem`,
                          transition: { delay: 2.1 + index / 50, duration: 1 },
                        }}
                        className="absolute z-0 flex rounded-full border-[1px]  border-gray-200 opacity-50"
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
