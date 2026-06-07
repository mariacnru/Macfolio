import React from "react";

function Resume() {
  return (
    <div
      className="p-5 h-80 md:h-100 overflow-y-auto font-dana project"
      dir="rtl"
    >
      <div className="p-2 text-center">
        <h2 className="font-morraba text-2xl text-blue-500">مریم احمدآبادی</h2>
        <h2>Frontend Developer</h2>
      </div>

      <div className="text-sm flex justify-between items-center border-y border-blue-500 py-2">
        <span>استان تهران | شهریار</span>
        <span>
          <a href="tel:09336049409">09336049409</a>
        </span>

        <span>
          <a href="mail:maryamahmadabadi80@gmail.com">
            maryamahmadabadi80@gmail.com
          </a>
        </span>
      </div>

      <div className="flex justify-evenly text-sm py-2">
        <span>حداقل حقوق درخواستی: توافقی</span>
        <span>خانم</span>
      </div>

      <div className="text-right">
        <h3 className="font-semibold font-morraba text-blue-500 border-b border-blue-500 pb-2">
          سوابق کاری
        </h3>
        <div className="flex justify-between items-center py-2">
          <span className="font-semibold">توسعه وب</span>
          <span className="">1403/6 - 1404/1</span>
        </div>
        <span>موسسه فنی شهریار</span>
        <ul className="list-disc pr-8 mt-2">
          <li>تعریف مراحل انجام پروژه و تعیین قدم به قدم انجام مراحل</li>
          <li>تعریف زمانبندی بر اساس نساز پروژه</li>
          <li>
            طراحی نقشه راه و ساختار <bdi>API</bdi> ها
          </li>
          <li>استفاده از ابزار های بهینه و بروز برای بهینه بودن وبسایت</li>
          <li>استارت پروژه و گزارش کار در هر مرحله از انجام </li>
          <li>تحویل پروژه</li>
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold font-morraba text-blue-500 border-b border-blue-500 pb-2">
          مهارت ها
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 *:w-full py-2">
          <span>HTML | حرفه ای</span>
          <span>CSS | حرفه ای</span>
          <span>JavaScript | پیشرفته</span>
          <span>Tailwind | پیشرفته</span>
          <span>React | پیشرفته</span>
          <span>Git | پیشرفته</span>
          <span>GitHub | پیشرفته</span>
          <span>Rest API | پیشرفته</span>
          <span>Problem-Solving | حرفه ای</span>
          <span>Team-Work | حرفه ای</span>
          <span>Responsive Web Design | حرفه ای</span>
          <span>SPA Website | پیشرفته</span>
          <span>انعطاف پذیری | حرفه ای</span>
          <span>Debugging | پیشرفته</span>
          <span>Postman | متوسط</span>
          <span>Firebase | حرفه ای</span>
          <span>familiar with MySQL</span>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold font-morraba text-blue-500 border-b border-blue-500 pb-2">
          تحصیلات
        </h3>
        <div className="*:block py-2">
          <span>دیپلم علوم انسانی</span>
          <span>معدل: 17.83</span>
          <span className="pr-5 text-gray-400">- سال تحصیلی 1401 - 1402</span>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="font-semibold font-morraba text-blue-500 border-b border-blue-500 pb-2">
          زبان های خارجی
        </h3>
        <span className="block py-2">انگلیسی | پیشرفته</span>
      </div>
    </div>
  );
}

export default Resume;
