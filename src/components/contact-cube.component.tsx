import { motion } from 'framer-motion';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as GibHubIcon } from '../assets/iconmonstr-github-1.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons8-linkedin.svg';

import { getRandomInt } from '../routes/home/home.component';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactCube = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isToggled, setIsToggled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isResize, setIsResize] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  let windowVh = '6vh';
  let windowVw = '17vw';
  let cubeSize = '6rem';
  if (window.innerWidth > 390) {
    windowVh = '-2vh';
    windowVw = '20vw';
    cubeSize = '10rem';
  }
  if (window.innerWidth > 1200) {
    windowVh = '3vh';
    windowVw = '35vw';
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

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const sendEmail = async (target: EventTarget) => {
      if (!form.current) return;
      try {
        const res = await emailjs.sendForm(
          'service_7t9573v',
          'template_jdzykrt',
          form.current,
          'wKrNV5PQsbDeKT6yB'
        );
        if (res) {
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setIsLoading(false);
          setMessage('Email successfully sent'!);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const { target } = event;
    const res = sendEmail(target);
  };

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
            className="absolute z-50 mr-8 max-h-screen w-[310px] cursor-default flex-col justify-center overflow-auto  py-8 sm:w-[460px]"
          >
            <div className="self-center whitespace-nowrap p-4 text-2xl font-semibold tracking-widest">
              <div className="flex flex-col">
                <span className="h-fit w-28 sm:w-32">GET IN TOUCH</span>
                <div className="flex gap-3">
                  <Link target="_blank" to="https://github.com/kfirkfir89">
                    <GibHubIcon className="flex w-8" />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/kfir-avraham-91637b123/"
                    className="flex w-7"
                  >
                    <LinkedInIcon className="text-slate-800" />
                  </Link>
                  <Link
                    to="mailto:kfirkfir89@gmail.com"
                    className="flex w-6 items-center  pb-1 text-3xl font-extrabold"
                  >
                    @{' '}
                  </Link>
                </div>
              </div>
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
            </div>
            {message && (
              <div className="alert alert-success bg-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{message}</span>
              </div>
            )}
            <form
              ref={form}
              className="flex flex-col gap-4 px-6 pb-4"
              onSubmit={handleSubmit}
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="label font-semibold tracking-wide">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div>
                <label className="label font-semibold tracking-wide">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div>
                <label className="label font-semibold tracking-wide">
                  Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea"
                  required
                />
              </div>

              <div className="flex justify-center gap-4">
                <div className=" flex items-center justify-center gap-8 pt-8">
                  <div className="group relative  inline-flex">
                    <div className="transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r  from-gray-100 via-orange-100 to-gray-100 opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
                    <button
                      type="submit"
                      className="relative inline-flex h-14 items-center justify-center bg-slate-300 px-12  text-lg font-bold uppercase text-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                    >
                      <span className={`${isLoading ? 'loading' : ''}`}>
                        submit
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
            <motion.div className=" flex flex-col  whitespace-nowrap text-center font-semibold   tracking-widest text-slate-700">
              <motion.span>Get in</motion.span>
              <motion.span>Touch</motion.span>
              <motion.span className="mt-1 flex flex-col items-center justify-center sm:text-xl">
                🙋‍♂️
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactCube;
