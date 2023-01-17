import React from "react";

function Features() {
  return (
    <section className="max-md:mt-8 md:mt-12 pb-8 max-md:pt-8 md:pt-28 flex justify-start flex-col max-sm:px-8 max-lg:px-12 lg:px-[25%] items-center w-full bg-[#FAF9F5]">
      <h2 className="font-bold max-md:text-2xl md:text-4xl">ویژگی ها</h2>
      <div className="w-full max-md:mt-8 md:mt-28 px-6 py-8 border-b border-[#e6e6e6] flex items-start justify-start max-md:flex-col max-md:items-start max-md:gap-4 md:gap-44">
        <h3 className="font-bold max-md:text-[1.375rem] md:text-2xl">عنوان</h3>
        <ul className="list-disc">
          <li className="text-base max-md:mr-8 font-medium text-[#505050]">تست</li>
          <li>تست</li>
          <li>تست</li>
          <li>تست</li>
          <li>تست</li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
