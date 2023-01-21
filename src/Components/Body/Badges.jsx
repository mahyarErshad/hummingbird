import React, { memo } from "react";
import { ReactComponent as Wheat } from "../../assets/images/wheat.svg";
import { ReactComponent as Smush } from "../../assets/images/smush.svg";

function Badges() {
  return (
    <section className="flex-center flex-col pb-8 px-4">
      <h2 className="font-bold max-md:text-xl md:text-4xl mb-4">توصیه شده توسط</h2>
      <h3 className="font-bold max-md:text-xl md:text-4xl mb-8">توسعه دهندگان وردپرس</h3>
      <p className="text-center font-medium text-lg max-w-[37.5rem] leading-8 max-md:mb-14 md:mb-20">توسعه دهندگان وردپرس در سر تا سر دنیا WPMU DEV را ترجیح میدهند. با میانگین امتیاز 4.9 از 5، بیش از 5000 امتیاز 5/5 و برنده سیزدهمین جشنواره بهترین محصول G2 در بخش بهترین محصول.</p>
      <div className="flex items-start justify-between max-w-[62.5rem] max-md:flex-col gap-12">
        <div className="flex-center max-w-[16.25rem] flex-col">
          <div className="flex-center gap-1 mb-5">
            <Wheat className="flip" />
            <p className="max-w-[6.125rem] font-bold text-sm text-center text-[#6b6b6b]">انتخاب توسعه دهندگان وب</p>
            <Wheat />
          </div>
          <p className="text-center text-lg font-bold">انتخاب شماره یک توسعه دهندگان وب وردپرس</p>
        </div>
        <div className="flex-center max-w-[16.25rem] flex-col md:gap-3">
          <div className="flex-center max-w-[12rem] max-md:mb-5">
            <Smush />
            <p className="text-[#6b6b6b] font-bold text-sm text-center">پلاگین بهبود عکس Smush</p>
          </div>
          <p className="text-center text-lg font-bold">برندگان پشت سر هم Torque Plugin Madness</p>
        </div>
        <div className="flex-center max-w-[16.25rem] flex-col">
          <div className="flex-center gap-1 mb-5">
            <Wheat className="flip" fill="#F9D949" />
            <p className="max-w-[6.125rem] font-bold text-sm text-center text-[#6b6b6b]">انتخاب توسعه دهندگان وب</p>
            <Wheat fill="#F9D949" />
          </div>
          <p className="text-center text-lg font-bold">از بین بیش از 5000 رای از تمام دنیا</p>
        </div>
      </div>
    </section>
  );
}

export default memo(Badges);
