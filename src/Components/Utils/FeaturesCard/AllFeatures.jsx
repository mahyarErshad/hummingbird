import React, { memo } from "react";
import styles from "./FeatureCards.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AllFeatures() {
  const data = ["ارائه گزارش عملکرد", "توصیه های بهبود سرعت", "کش مرورگر", "کش تمام صفحه", "کش گراواتار", "کش RSS", "کوچک کردن فایل ها", "بهینه سازی فونت گوگل", "ترکیب فایل ها", "پاکسازی پایگاه داده", "Cloudflare APO", "رشته های کوئری URL را حذف کنید", "موقعیت بار را تنظیم کنید", "پیکربندی ساده GZIP", "کنترل های پیشرفته بهینه سازی منابع", "بهینه سازی منابع در چند سایت", "به تعویق انداختن / منابع درون خطی", "همگام سازی آسان با مانیتور آپتایم", "اعلان‌های بارگذاری پایین و آهسته", "ردیابی سرعت متوسط ​​صفحه", "قطعات سبد خرید ووکامرس را بهینه کنید", "کنترل ایموجی ها", "تنظیمات را به صورت انبوه با تنظیمات روی سایت ها اعمال کنید", "راه اندازی سریع 5 مرحله ای", "یکپارچه سازی کش اشیاء Redis", "صد و دوازده نقطه WPMU DEV CDN", "نظرات بارگذاری تنبل", "CSS بحرانی", "گزینه های واکشی/پیش اتصال", "حالت ایمن بهینه سازی دارایی"];

  return (
    <div className={`${styles.wrapper} pt-14 w-full max-w-[60rem] mx-auto px-6 flex flex-nowrap items-start justify-start max-md:items-start`}>
      <h2 className="font-bold max-md:text-[1.375rem] md:text-2xl w-full mb-14">تمام ویژگی ها</h2>
      {data.map((item, index) => {
        return (
          <div key={index} className={`${styles.card} max-md:w-full my-3 md:w-[26.25rem]`}>
            <FontAwesomeIcon className={`${styles.icon} w-fit`} icon={faCheck} />
            <p className="whitespace-nowrap font-medium flex-grow">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default memo(AllFeatures);
