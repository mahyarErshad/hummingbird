import React, { memo, useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.svg";
import { Transition } from "@headlessui/react";
import HeaderNavLinks from "./HeaderNavLinks";
import { goToTop } from "../../lib/globalFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = () => {
    return (
      <>
        <HeaderNavLinks color="text-[#bbb]" title="صفحه اصلی" />
        <HeaderNavLinks href="#demos" title="پیش نمایش ها" />
        <HeaderNavLinks href="#features" title="ویژگی ها" />
        <HeaderNavLinks target="_blank" href="https://www.rstheme.com/products/documentations/gimnas/" title="مستندات آنلاین" />
      </>
    );
  };
  return (
    <header className={styles.wrapper}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:flex-row-reverse h-16">
          <div className="-mr-2 flex lg:hidden">
            <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="bg-transparent flex-center p-2 rounded-md hover:opacity-90 transition-all" aria-controls="mobile-menu" aria-expanded="false">
              <FontAwesomeIcon className={isOpen ? styles.menuOpen : styles.menuClose} icon={faChevronDown} />
            </button>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <ul className="ml-10 flex items-baseline gap-10">
                <NavLinks />
              </ul>
            </div>
          </div>
          <div onClick={goToTop} className="flex-center gap-3 cursor-pointer h-full hover:opacity-[0.85] transition-all">
            <img className="h-6 w-6" src={logo} alt="Logo" />
            <div className="flex-center gap-1">
              <h1 className="text-lg font-bold">هامینگ برد</h1>
              <span className="bg-transparent font-bold p-1 text-[0.5625rem] border rounded-[0.625rem] border-black">حرفه ایی</span>
            </div>
          </div>
        </div>
      </div>
      <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        {() => (
          <div className="lg:hidden" id="mobile-menu">
            <ul ref={React.createRef()} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinks />
            </ul>
          </div>
        )}
      </Transition>
    </header>
  );
}

export default memo(Navbar);
