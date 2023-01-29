import React from "react";
import MyButton from "../Utils/MyButton/MyButton";

function Footer() {
  return (
    <footer className="mt-14 w-full bg-[#FAF8F0] py-12 px-8 flex-center flex-wrap max-md:gap-4 md:gap-16">
      <MyButton onClick={() => window.open("https://www.zhaket.com/web/hummingbird-pro", "_blank")} className="bg-primary" text="خرید نسخه حرفه ای" />
      <MyButton onClick={() => window.open("https://www.zhaket.com/web/hummingbird-pro/support", "_blank")} className="bg-[#1b6169]" text="ارتباط با پشتیبانی" />
    </footer>
  );
}

export default Footer;
