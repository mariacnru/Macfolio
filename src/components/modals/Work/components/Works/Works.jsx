import React, { useState } from "react";
import Home from "./components/Home";
import { FaArrowLeftLong } from "react-icons/fa6";

function Works() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div dir="rtl">
      {activeTab === "home" && <Home setActiveTab={setActiveTab} />}

      <div className="">
        {activeTab === "cms" && (
          <div className="p-5 space-y-5 h-100 overflow-y-scroll project">
            <div
              onClick={() => setActiveTab("home")}
              className="w-fit cursor-pointer"
            >
              <FaArrowLeftLong />
            </div>

            <h3 className="font-semibold text-white">
              نام پروژه : پنل مدیریتی ادمین
            </h3>
            <p className="text-sm">
              پنل مدیریت مدرن توسعه داده شده با react.js مناسب مدیریت محصولات,
              کاربران و سفارشات
            </p>
            <p className="text-sm">
              تکنولوژی ها: JavaScript, React.js, TailwindCss, React-Router, SPA
            </p>
            <p className="text-sm">
              لینک گیتهاب پروژه:
              <a
                href="https://github.com/mariacnru/professioal-admin-dashboard.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                مشاهده پروژه در گیتهاب
              </a>
            </p>

            <p className="text-sm">
              مشاهده آنلاین پروژه :
              <a
                href="https://mariacnru.github.io/professioal-admin-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                دمو آنلاین
              </a>
            </p>

            <div className="space-y-2">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/images/Professional_admin_dashboard/1.webp"
                  alt=""
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/images/Professional_admin_dashboard/2.webp"
                  alt=""
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/images/Professional_admin_dashboard/3.webp"
                  alt=""
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/images/Professional_admin_dashboard/4.webp"
                  alt=""
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/images/Professional_admin_dashboard/5.webp"
                  alt=""
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/images/Professional_admin_dashboard/6.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "news_magazine" && (
          <div className="p-5 space-y-5 h-100 overflow-y-scroll project">
            <div
              onClick={() => setActiveTab("home")}
              className="w-fit cursor-pointer"
            >
              <FaArrowLeftLong />
            </div>

            <h3 className="font-semibold text-white">
              نام پروژه: لندینگ پیج مجله خبری
            </h3>

            <p className="text-sm">
              یک لندینگ پیج ریسپانسیو برای پلتفرم آنلاین اخبار و مجله، همراه با
              مقالات ویژه و بخش‌های مدرن رابط کاربری.
            </p>

            <p className="text-sm">
              تکنولوژی ها: JavaScript, React.js, TailwindCss, React-Router, SPA
            </p>

            <p className="text-sm">
              لینک گیتهاب پروژه:
              <a
                href="https://github.com/mariacnru/news-magazine-landing.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                مشاهده پروژه در گیتهاب
              </a>
            </p>

            <p className="text-sm">
              مشاهده آنلاین پروژه :
              <a
                href="https://mariacnru.github.io/news-magazine-landing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                دمو آنلاین
              </a>
            </p>

            <div className="">
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-fit rounded-lg overflow-hidden">
                  <img
                    src="/Macfolio/Mega_News/localhost_5174_ (1).webp"
                    alt=""
                  />
                </div>

                <div className="w-full h-fit rounded-lg overflow-hidden">
                  <img
                    src="/Macfolio/Mega_News/localhost_5174_ (2).webp"
                    alt=""
                  />
                </div>

                <div className="w-full h-fit rounded-lg overflow-hidden">
                  <img
                    src="/Macfolio/Mega_News/localhost_5174_ (3).webp"
                    alt=""
                  />
                </div>

                <div className="w-full h-fit rounded-lg overflow-hidden">
                  <img
                    src="/Macfolio/Mega_News/localhost_5174_ (4).webp"
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="w-full h-fit overflow-hidden">
                  <p className="text-center text-sm p-1">نسخه دسکتاپ</p>

                  <img
                    src="/Macfolio/Mega_News/descktop.webp"
                    alt="descktop"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>

                <div className="w-full h-fit overflow-hidden">
                  <p className="text-center text-sm p-1">نسخه تبلت</p>

                  <img
                    src="/Macfolio/Mega_News/tablet.webp"
                    alt="tablet"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>

                <div className="w-full h-fit overflow-hidden">
                  <p className="text-center text-sm p-1">نسخه موبایل</p>

                  <img
                    src="/Macfolio/Mega_News/mobile.webp"
                    alt="mobile"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "personal_website" && (
          <div className="p-5 space-y-5 h-100 overflow-y-scroll project">
            <div
              onClick={() => setActiveTab("home")}
              className="w-fit cursor-pointer"
            >
              <FaArrowLeftLong />
            </div>

            <h3 className="font-semibold text-white">نام پروژه: وبسایت شخصی</h3>
            <p className="text-sm">
              یک وبسایت نمونه‌کار شخصی مدرن و تک‌صفحه‌ای <bdi>(SPA)</bdi>
              ساخته‌شده با <bdi>React.js</bdi>، دارای طراحی واکنش‌گرا
              <bdi>(Responsive)</bdi>، رابط کاربری روان، و پشتیبانی از حالت روشن
              و تاریک برای نمایش پروژه‌ها، مهارت‌ها و اطلاعات تماس و مقالات.
            </p>
            <p className="text-sm">
              تکنولوژی ها: JavaScript, React.js, TailwindCss, React-Router, SPA,
              Dark Mode
            </p>

            <p className="text-sm">
              لینک گیتهاب پروژه:
              <a
                href="https://github.com/mariacnru/frontEnd-developer-portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                مشاهده پروژه در گیتهاب
              </a>
            </p>

            <p className="text-sm">
              مشاهده آنلاین پروژه :
              <a
                href="https://mariacnru.github.io/frontEnd-developer-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                دمو آنلاین
              </a>
            </p>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-fit rounded-lg overflow-hidden">
                  <p className="text-sm text-center p-2">لایت مود</p>
                  <img src="/Macfolio/images/personal_website/1.webp" alt="" />
                </div>

                <div className="w-full h-fit rounded-lg overflow-hidden">
                  <p className="text-sm text-center p-2">دارک مود</p>
                  <img src="/Macfolio/images/personal_website/2.webp" alt="" />
                </div>
              </div>
              <div className="w-full h-fit rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/personal_website/3.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="w-full h-fit rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/personal_website/4.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="w-full h-fit rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/personal_website/5.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="w-full h-fit rounded-lg overflow-hidden">
                <img
                  src="/Macfolio/personal_website/6.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Works;
