import React from "react";
import FAQCard from "../Utils/FAQCard/FAQCard";

function FAQ() {
  return (
    <section className="py-24 md:px-20 max-md:px-4 w-[95%] max-w-[60rem] mx-auto bg-[#fafafa] rounded-[20px] flex-center flex-col mb-12">
      <h2 className="text-center font-bold max-md:text-2xl md:text-4xl">سوالات متداول</h2>
      <p className="mt-8 mr-8 mb-3 ml-0 text-[#505050] text-[0.8125rem] font-medium self-start">بهینه سازی صفحه</p>
      <FAQCard />
    </section>
  );
}

export default FAQ;
