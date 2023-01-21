import React, { memo } from "react";
import { ReactComponent as Wheat } from "../../assets/images/wheat.svg";

function Badges() {
  return (
    <section className="flex-center flex-col pb-8 px-4">
      <h2 className="font-bold max-md:text-xl md:text-4xl mb-4">توصیه شده توسط</h2>
      <h3 className="font-bold max-md:text-xl md:text-4xl mb-8">توسعه دهندگان وردپرس</h3>
      <p className="text-center font-medium text-lg max-w-[37.5rem] leading-8 max-md:mb-14 md:mb-20">توسعه دهندگان وردپرس در سر تا سر دنیا WPMU DEV را ترجیح میدهند. با میانگین امتیاز 4.9 از 5، بیش از 5000 امتیاز 5/5 و برنده سیزدهمین جشنواره بهترین محصول G2 در بخش بهترین محصول.</p>
      <div className="flex items-start justify-between min-w-[55rem] max-w-[62.5rem]">
        <div className="flex-center max-w-[16.25rem] gap-1">
          <Wheat />
          <p className="max-w-[6.125rem] font-bold text-sm">انتخاب توسعه دهندگان وب</p>
          <Wheat className="" />
        </div>
      </div>
    </section>
  );
}

export default memo(Badges);
