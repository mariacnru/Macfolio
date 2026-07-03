import React, { useEffect, useRef, useState } from "react";
import { BsGithub, BsTelegram, BsTwitterX } from "react-icons/bs";
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
      } transition-all text-gray-300 md:w-2xl absolute top-1/7 right-0 left-0 mx-5 md:mx-20 bg-white rounded-xl overflow-hidden border border-stone-700 shadow-xl`}
    >
      <header className="grid grid-cols-3 px-1.5 py-2 bg-[#3f4042]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#ff5f57]"></div>
          <div className="w-4 h-4 rounded-full bg-[#febc2e]"></div>
          <div className="w-4 h-4 rounded-full bg-[#28c840]"></div>
        </div>

        <div className="justify-self-center">
          <p className="text-sm font-semibold">Contact me</p>
        </div>

        <div
          onClick={() => setContactMe(false)}
          className="justify-self-end cursor-pointer"
        >
          <RiCloseLine />
        </div>
      </header>

      <div
        dir="rtl"
        className="bg-[#1e1e1e] p-5 space-y-5 h-80 md:h-fit overflow-y-auto project"
      >
        <div className="w-20 h-20 bg-purple-400 rounded-full overflow-hidden">
          <img
            src="/images/profile_picture.jpg"
            alt="profile_picture"
            width={80}
            height={80}
          />
        </div>

        <h3 className="font-semibold text-2xl">بیایید در ارتباط باشیم</h3>

        <p>
          ایده‌ای داری، پروژه‌ای برای همکاری هست یا فقط می‌خوای درباره تکنولوژی
          و توسعه صحبت کنیم؟ خوشحال می‌شم ازت بشنوم و با هم در ارتباط باشیم.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <a href="tel:+989336049409" target="_self" rel="noopener noreferrer">
            <div className="bg-red-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
              <SlCalender size={25} />
              تماس تلفنی
            </div>
          </a>

          <a href="mailto:mariacnru@gmail.com">
            <div className="bg-green-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
              <SiMinutemailer size={25} />
              ارسال ایمیل
            </div>
          </a>

          <a
            href="https://t.me/maryam_ahmadabadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#fe886c] p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
              <BsTelegram size={25} />
              تلگرام
            </div>
          </a>

          <a
            href="https://github.com/mariacnru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-purple-400 p-3 w-full h-22 rounded-lg flex flex-col justify-between font-semibold text-sm">
              <BsGithub size={25} />
              گیت‌هاب
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
