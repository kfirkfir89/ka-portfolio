import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DevPortalIcon } from '../assets/devportallogo.svg';
import { ReactComponent as GibHubIcon } from '../assets/iconmonstr-github-1.svg';
import { getRandomInt } from '../routes/home/home.component';

const DevPortalCube = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isResize, setIsResize] = useState(false);

  let windowVh = '35vh';
  let windowVw = '27vw';
  let cubeSize = '8rem';
  if (window.innerWidth > 390) {
    windowVh = '20vh';
    windowVw = '50vw';
    cubeSize = '10rem';
  }
  if (window.innerWidth > 1200) {
    windowVh = '20vh';
    windowVw = '50vw';
    cubeSize = '10rem';
  }

  useEffect(() => {
    const handleResize = () => {
      setIsResize(true);
    };

    window.addEventListener('resize', handleResize);
    setIsMounted(true);
    return setIsResize(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

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
            transition: { delay: isMounted || isResize ? 0 : 2 },
          }}
          onClick={() => setIsToggled(!isToggled)}
          className="absolute z-20 flex h-10 w-10 bg-teal-300 shadow-sm"
        />
        <motion.div
          initial={{ height: '0.8rem', width: '0.8rem' }}
          animate={{
            rotate: [360, -getRandomInt(5, 170)],
            height: cubeSize,
            width: cubeSize,
            transition: { delay: isResize ? 0 : 2 },
          }}
          className="absolute z-10 flex w-full max-w-xs bg-orange-300 shadow-sm"
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
            className="absolute z-50 mr-8 max-h-screen w-[310px] cursor-default flex-col justify-center overflow-auto  py-8 pb-12  sm:w-[460px]"
          >
            <h1 className="mb-4 self-center whitespace-nowrap p-4 font-custom text-3xl">
              <DevPortalIcon className="h-fit w-28 sm:w-32" />
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
                devPortal is social-media platform for developers community
                built in C#, ASP.NET MVC Pattern, JavaScript, jQuery, Bootstrap,
                PostgreSQL, TinyMCE(editor).
              </span>
              <span>
                Fully responsive design features an intuitive user interface,
                fully CRUD application.
              </span>
              <br />
              <span>
                • Implemented a role-system, and secure authentication and
                authorization mechanisms.
              </span>
              <span>
                • Created a tag system for better content sorting and
                personalized suggestions, including admin capabilities to add
                new tags.
              </span>
              <span>
                • Designed a comments system that lets users chat, with tools
                for admins and authors to keep the conversations respectful
              </span>
              <span>
                • Implemented dual feedback mechanisms, allowing users to ’like’
                posts for enjoyment and mark them as ’useful’.
              </span>
              <span>
                • Developed a post creation feature for text, image, and video
                uploads, with admin permissions to modify or delete content as
                necessary.
              </span>
              <span>
                • Built a user profile system for easy account details
                management.
              </span>
              <span>
                • Integrated infinite scrolling, post sorting, and a search
                feature to enhance navigation, content discovery, and
                personalized recommendations.
              </span>
            </p>
            <div className="flex justify-center gap-4 py-8">
              <div className=" flex items-center justify-center gap-8 ">
                <div className="group relative  inline-flex">
                  <div className="transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r  from-gray-100 via-orange-100 to-gray-100 opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
                  <Link
                    target="_blank"
                    to="https://dev-portal.org/"
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
                    to="https://github.com/kfirkfir89/TheBlogProject"
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
            x: windowVw,
            y: windowVh,
            transition: {
              duration: 0.5,
              delay: isResize ? 0 : 2.2,
            },
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, 5, -5, 5, -5, 0],
          }}
          className="relative z-30 flex cursor-pointer items-center justify-center"
          onClick={() => setIsToggled(!isToggled)}
        >
          <motion.div className="absolute z-20 flex justify-center ">
            <DevPortalIcon className="h-fit w-28 sm:w-32" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DevPortalCube;
