import React from "react";
import FAQCard from "../Utils/FAQCard/FAQCard";

function FAQ() {
  return (
    <section className="py-24 md:px-20 max-md:px-4 w-[95%] max-w-[60rem] mx-auto bg-[#fafafa] rounded-[20px] flex-center flex-col mb-12 shadow-lg">
      <h2 className="text-center font-bold max-md:text-2xl md:text-4xl">سوالات متداول</h2>
      <p className="mt-8 mr-8 mb-3 ml-0 text-[#505050] text-[0.8125rem] font-medium self-start">بهینه سازی صفحه</p>
      <FAQCard title="اگر قبلاً یک افزونه کش مانند WP Rocket یا W3 Total Cache داشته باشم به Hummingbird نیاز دارم؟ اگر سرویس کش قبلاً توسط میزبانی من ارائه شده باشد چه می شود؟" description="آره! البته، مجموعه کش ما بیش از اندازه کافی است، اما اگر قبلاً از WP Rocket، W3 Total Cache استفاده می‌کنید، یا اگر میزبانی شما این ویژگی‌ها را ارائه می‌دهد، ابزارهای نظارتی ویژه‌ای که مرغ مگس خوار ارائه می‌دهد همچنان ارزش آن را دارد. برای اطمینان از سازگاری، فقط ویژگی‌های همپوشانی را در یکی از ابزارهای کش فعال کنید" />
      <FAQCard title="آیا مرغ مگس خوار با Cloudflare کار می کند؟" description="آره! مرغ مگس خوار برای استفاده کامل از ویژگی های Cloudflare ساخته شده است. کافی است کلید API خود را وصل کنید تا شروع کنید و تنظیمات Cloudflare خود را از طریق Hummingbird کنترل کنید." />
      <FAQCard title="آیا Hummingbird Pro از Multisite پشتیبانی می کند و به چه برنامه ای نیاز دارم؟" description="آره! Hummingbird Pro 100% با Multisite سازگار است و شامل کنترل های گسترده شبکه است." />
      <FAQCard
        title="آیا مرغ مگس خوار فایل های من را با CDN ارائه می کند؟"
        description="آره! اگر عضو شوید، می‌توانید WPMU DEV CDN را فعال کنید و ما فایل‌های CSS و Javascript شما را بدون محدودیت پهنای باند در CDN خود میزبانی می‌کنیم.
این بدان معناست که فایل‌های شما از 112 مکان در سراسر جهان با استفاده از نزدیک‌ترین مکان به هر بازدیدکننده ارائه می‌شوند، چقدر عالی است؟ و اگر قبلاً از CDN شخص ثالث مانند Cloudflare استفاده می‌کنید، می‌توانید از WPMU DEV CDN نیز استفاده کنید، فقط مطمئن شوید که محتوایی که در هر دو ارائه می‌دهید همپوشانی نداشته باشد. می توانید در اسناد ما درباره CDN ما بیشتر بیاموزید."
      />
      <FAQCard title="Hummingbird Pro در مقابل Hummingbird Free چه چیزی به من می دهد؟" description="تعدادی ویژگی پیشرفته وجود دارد که با نسخه رایگان پیدا نخواهید کرد، از جمله: نظارت بر زمان (به طور پیش فرض در تمام سایت های میزبانی شده جدید WPMU DEV فعال است) و Pro Notifications (فعال کردن و مدیریت اعلان ها/گزارش ها برای ویژگی های پیشرفته). همچنین، از آنجایی که Hummingbird Pro فقط با یک طرح عضویت WPMU DEV در دسترس است، به طور پیش‌فرض به کل مجموعه ابزارهای عملکرد، امنیت، پشتیبان‌گیری و برچسب‌گذاری سفید دسترسی خودکار دریافت می‌کنید – نیازی نیست به پشتیبانی تخصصی 24/7/365 اشاره کنیم. (از جمله چت زنده)." />
      <FAQCard title="اگر من فقط Hummingbird Pro را بخواهم چه می شود؟ آیا می توانم آن را به تنهایی دریافت کنم؟" description="این یک نوع معامله بسته در اینجاست (به روشی خوب!). هر طرح WPMU DEV دارای تعدادی پلاگین حرفه ای (از جمله Hummingbird Pro) برای کمک به بهینه سازی عملکرد، امنیت، به روز رسانی، پشتیبان گیری، برچسب گذاری سفید و موارد دیگر است. ما اطمینان حاصل کرده‌ایم که برنامه پایین‌ترین اعضای ما به‌طور باورنکردنی مقرون‌به‌صرفه و همتراز با هزینه عادی یک افزونه حرفه‌ای وردپرس است. همچنین اگر می‌خواهید دیگر افزونه‌های حرفه‌ای ما و The Hub را فعال یا استفاده کنید، کاملاً به شما بستگی دارد - آنها را به عنوان ابزارهای پاداشی در نظر بگیرید که در صورت نیاز وجود دارند." />
      <FAQCard title="آیا مرغ مگس خوار با Cloudflare کار می کند؟" description="" />
      <p className="mt-8 mr-8 mb-3 ml-0 text-[#505050] text-[0.8125rem] font-medium self-start">آزمایشی و عضویت</p>
    </section>
  );
}

export default FAQ;
