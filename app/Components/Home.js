"use client";
import React from "react";
import Image from "next/image";
import { easeIn, easeInOut, motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import Typed from "typed.js";
import { useRef, useEffect, useState } from "react";

const Nilesh = () => {
  const [rotate, setrotate] = useState(0);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span style="background: linear-gradient(90deg, #00bcd4, #00838f); -webkit-background-clip: text; background-clip: text; color: transparent;">Fullstack</span> Webdevloper',
        '<span style="background: linear-gradient(90deg, #26a69a, #00796b); -webkit-background-clip: text; background-clip: text; color: transparent;">Android</span> Devloper',
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div
        className="flex py-10 md:flex-row flex-col px-10 gap-10 justify-center items-center lg:px-32 md:px-0 mx-auto w-[90vw]"
      >
        <motion.div
          whileTap={{ rotateZ: 360 }}
          whileHover={{ rotateZ: 360 }}
          whileInView={{ opacity: 1}}
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="image  rounded"
        >
          <Image
            className="relative shadow-lg shadow-slate-500 hover:shadow-xl hover:shadow-slate-600 rounded-full"
            src={"./web-1.jpg"}
            width={350}
            height={350}
            alt="Picture of the author"
          />
        </motion.div>
        <div className=" h-fit flex text-center md:w-[50%] w-[100%] flex-col md:gap-y-6 gap-4">
          <h3 className="lg:text-3xl  md:text-2xl text-xl font-semibold">
            Hey,
          </h3>
          <h2 className="lg:text-5xl  md:text-4xl text-3xl font-bold">
            Nilesh{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-800 ... bg-clip-text text-transparent">
              Mori
            </span>
          </h2>
          <h3 className="lg:text-4xl  w-max mx-auto md:text-3xl text-2xl font-semibold">
            <span ref={el}></span>
          </h3>
          <div className="btns mx-auto text-lg md:flex-row flex-col flex gap-3">
            <motion.button
              whileInView={{ opacity: 1}}
              initial={{
                opacity: 0,
              }}
              whileTap={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
                backgroundColor: "white",
                color: "black",
                fontWeight: "700",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
                backgroundColor: "white",
                color: "black",
                fontWeight: "700",
              }}
            // transition={{ duration: 0.5, ease: "easeInOut" }}

              className="Cvbtn bg-black border-2  border-black text-white lg:w-[10rem] md:w-32 w-[10rem] py-2 rounded-3xl"
            >
              <a href="./CV.pdf" download={"CV"}>
                {" "}
                Download CV{" "}
              </a>
            </motion.button>
            <motion.button
              whileInView={{ opacity: 1}}
              initial={{
                opacity: 0,
              }}
          // transition={{ duration: 0.5, ease: "easeInOut" }}

              whileTap={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
                backgroundColor: "black",
                color: "white",
                fontWeight: "700",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
                backgroundColor: "black",
                color: "white",
                fontWeight: "700",
              }}
              onHoverStart={() => setrotate(90)}
              onHoverEnd={() => setrotate(0)}
              className="Aboutbtn border-2 flex gap-2 justify-center items-center border-black  lg:w-[10rem] md:w-32 py-2 w-[10rem] rounded-3xl"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me{" "}
              </Link>
              <BsArrowUpRightCircle
                size={25}
                style={{ transform: `rotate(${rotate}deg)` }}
              />
            </motion.button>
          </div>
          <div className="contacts mx-auto flex gap-x-4">
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
            >
              <a href="https://github.com/nilesh7757">
                <FaGithub size={50} />
              </a>
            </motion.div>
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
            >
              <a href="https://www.facebook.com/akash.mori.792/">
                <FaFacebook size={50} />
              </a>
            </motion.div>
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              className="size-[50px] rounded-full flex items-center justify-center bg-black text-white"
            >
              <a href="https://www.linkedin.com/in/nilesh-mori-7757n">
                <FaLinkedinIn size={40} />
              </a>
            </motion.div>
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              className="size-[50px] rounded-full flex items-center justify-center bg-black text-white"
            >
              <a href="https://x.com/Programmer7757?t=tRdexLvNV7qv22ZC5Q6jxg&s=08">
                <FaXTwitter size={35} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nilesh;
