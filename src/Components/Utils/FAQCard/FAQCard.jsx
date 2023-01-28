import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FAQCard() {
  const [open, setOpen] = useState(false);
  return (
    <figure>
      <div onClick={() => setOpen((prev) => !prev)} className="border-t border-b border-[#e6e6e6] w-full py-3 px-8 cursor-pointer flex-center transition-all duration-300 hover:border-primary flex-col">
        <div className="flex-center">
          <h3 className="font-medium text-lg flex-grow">اگر قبلاً یک افزونه کش مانند WP Rocket یا W3 Total Cache داشته باشم به Hummingbird نیاز دارم؟ اگر سرویس کش قبلاً توسط میزبانی من ارائه شده باشد چه می شود؟</h3>
          <FontAwesomeIcon icon={faPlus} className="w-[0.625rem]" />
        </div>
        <p className={`text-[0.9375rem] font-medium text-[#505050] ${open ? "FaqOpen" : "FaqClose"}`}>آره! البته، مجموعه کش ما بیش از اندازه کافی است، اما اگر قبلاً از WP Rocket، W3 Total Cache استفاده می‌کنید، یا اگر میزبانی شما این ویژگی‌ها را ارائه می‌دهد، ابزارهای نظارتی ویژه‌ای که مرغ مگس خوار ارائه می‌دهد همچنان ارزش آن را دارد. برای اطمینان از سازگاری، فقط ویژگی‌های همپوشانی را در یکی از ابزارهای کش فعال کنید</p>
      </div>
    </figure>
  );
}

export default FAQCard;
