import { motion } from 'framer-motion';
import { getRandomInt } from '../routes/home/home.component';

export const tailwindColors = [
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

export function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const BgCubes = () => {
  return (
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
                  className="absolute z-10 cursor-pointer"
                  whileHover={{
                    scale: 2,
                    zIndex: 100,
                    rotate: getRandomInt(5, 170),
                  }}
                  style={{ userSelect: 'none' }}
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
                        contentEditable="false"
                        className={`absolute bg-gray-400 opacity-50 ${
                          tailwindColors[getRandomInt(0, tailwindColors.length)]
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
                  className=" absolute z-0"
                  style={{ userSelect: 'none' }}
                >
                  <div className="relative  flex flex-col items-center justify-center">
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
  );
};

export default BgCubes;
