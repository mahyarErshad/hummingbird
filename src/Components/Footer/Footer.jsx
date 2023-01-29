import React from "react";
import MyButton from "../Utils/MyButton/MyButton";

function Footer() {
  return (
    <footer className="mt-14 w-full bg-[#FAF8F0] py-12 px-8 flex-center flex-wrap max-md:gap-8 md:gap-16">
      <MyButton onClick={() => window.open("https://www.zhaket.com/web/hummingbird-pro/support", "_blank")} className="max-sm:w-full" text="ارتباط با پشتیبانی" />
      <MyButton onClick={() => window.open("https://www.zhaket.com/web/hummingbird-pro", "_blank")} className="max-sm:w-full" text="خرید نسخه حرفه ای" />
    </footer>
  );
}

export default Footer;
