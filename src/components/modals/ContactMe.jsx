import React, { useRef } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { SlCalender } from "react-icons/sl";

function ContactMe({ contactMe, setContactMe, topZ }) {
  const modalRef = useRef();

  const bringToFront = () => {
    topZ.current += 1;
    console.log(modalRef.current);

    modalRef.current.style.zIndex = topZ.current;
  };

  return (
    <div
      ref={modalRef}
      onClick={bringToFront}
      className={`${
        contactMe
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      } transition-all text-gray-300 w-2xl absolute top-1/7 right-0 left-0 mx-auto bg-white rounded-xl overflow-hidden border border-stone-700 shadow-xl`}
    >
      <header className="grid grid-cols-3 px-1.5 py-2 bg-[#3f4042]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#ff5f57]"></div>
          <div className="w-4 h-4 rounded-full bg-[#febc2e]"></div>
          <div className="w-4 h-4 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="justify-self-center">
          <p className="text-sm font-semibold">Contact Me</p>
        </div>
        <div
          onClick={() => setContactMe(false)}
          className="justify-self-end cursor-pointer"
        >
          <RiCloseLine />
        </div>
      </header>
      <div className="bg-[#1e1e1e] p-5 space-y-5">
        <div className="w-20 h-20 bg-purple-400 rounded-full"></div>
        <h3 className="font-semibold text-2xl">Let's Contact</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I’m in.</p>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-red-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <SlCalender size={25} />

            <a
              href="tel:+989336049409"
              target="_self"
              rel="noopener noreferrer"
            >
              call me
            </a>
          </div>

          <div className="bg-green-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <SiMinutemailer size={25} />

            <a href="mailto:mariacnru@gmail.com">Email me</a>
          </div>

          <div className="bg-[#fe886c] p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <BsTwitterX size={25} />

            <a
              href="https://x.com/yourusername"
              target="_self"
              rel="noopener noreferrer"
            >
              Twitter/X
            </a>
          </div>

          <div className="bg-sky-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <FaLinkedin size={25} />

            <a
              href="https://linkedin.com/in/yourusername"
              target="_self"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
