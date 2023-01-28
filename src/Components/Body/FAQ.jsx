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
      <FAQCard title="آیا مرغ مگس خوار با Cloudflare کار می کند؟" description="" />
    </section>
  );
}

export default FAQ;
