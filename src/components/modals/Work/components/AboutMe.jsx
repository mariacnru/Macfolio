import React from "react";

function AboutMe() {
  return (
    <div className="px-5 py-4 space-y-5" dir="rtl">
      <div className="w-18 h-18 rounded-full bg-purple-500"></div>

      <h2 className="font-semibold">با توسعه‌دهنده پشت این کدها آشنا شوید</h2>

      <p className="*:block space-y-5 text-sm">
        <span>
          سلام! من مریم 👋 هستم، توسعه‌دهنده فرانت‌اند که عاشق ساخت وبسایت‌های
          مدرن، تعاملی و کاربردی است.
        </span>

        <span>
          تخصص من در JavaScript و React.js است و از ساخت رابط‌های کاربری روان،
          سریع و جذاب لذت می‌برم.
        </span>

        <span>
          به طراحی تمیز UI، تجربه کاربری خوب (UX) و نوشتن کدهای مرتب و قابل
          نگهداری اهمیت زیادی می‌دهم.
        </span>

        <span>
          خارج از دنیای برنامه‌نویسی، احتمالاً من را در حال تغییر دادن طراحی
          صفحات تا ساعت ۲ شب، نوشیدن قهوه، یا خرید گجت‌هایی می‌بینید که خودم را
          قانع کرده‌ام به آن‌ها نیاز دارم 😅
        </span>
      </p>
    </div>
  );
}

export default AboutMe;
