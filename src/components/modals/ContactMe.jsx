import React, { useEffect, useRef, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { SlCalender } from "react-icons/sl";

function ContactMe({ contactMe, setContactMe, topZ }) {
  const modalRef = useRef();
  const [zIndex, setZIndex] = useState(10);

  useEffect(() => {
    if (contactMe) {
      topZ.current += 1;
      setZIndex(topZ.current);
    }
  }, [contactMe]);

  const bringToFront = () => {
    topZ.current += 1;
    console.log(modalRef.current);

    modalRef.current.style.zIndex = topZ.current;
  };

  return (
    <div
      ref={modalRef}
      onClick={bringToFront}
      style={{ zIndex }}
      className={`${
        contactMe
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      } transition-all text-gray-300  md:w-2xl absolute top-1/7 right-0 left-0 mx-5 md:mx-20 bg-white rounded-xl overflow-hidden border border-stone-700 shadow-xl`}
      dir="rtl"
    >
      <header className="grid grid-cols-3 px-1.5 py-2 bg-[#3f4042]" dir="ltr">
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

      <div className="bg-[#1e1e1e] p-5 space-y-5 h-80 md:h-fit overflow-y-auto project">
        <div className="w-20 h-20 bg-purple-400 rounded-full"></div>

        <h3 className="font-semibold text-2xl">در ارتباط باشیم</h3>

        <p>
          ایده‌ای داری؟ پروژه‌ای برای همکاری؟ یا فقط می‌خوای درباره تکنولوژی
          صحبت کنیم؟ خوشحال می‌شم در تماس باشیم.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="bg-red-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <SlCalender size={25} />

            <a
              href="tel:+989336049409"
              target="_self"
              rel="noopener noreferrer"
            >
              تماس تلفنی
            </a>
          </div>

          <div className="bg-green-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <SiMinutemailer size={25} />

            <a href="mailto:mariacnru@gmail.com">ارسال ایمیل</a>
          </div>

          <div className="bg-[#fe886c] p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <BsTwitterX size={25} />

            <a
              href="https://x.com/yourusername"
              target="_self"
              rel="noopener noreferrer"
            >
              توییتر / ایکس
            </a>
          </div>

          <div className="bg-sky-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
            <FaLinkedin size={25} />

            <a
              href="https://linkedin.com/in/yourusername"
              target="_self"
              rel="noopener noreferrer"
            >
              لینکدین
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
