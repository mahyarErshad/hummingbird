import React from "react";
import styles from "./header.module.css";

function HeaderNavLinks({ target, href, text, noBorder }) {
  return (
    <a className={`max-lg:${!noBorder && styles.borderBottom} h-full w-full inline-block py-[0.6875rem] px-[0.9375rem] cursor-pointer hover:text-primary transition-all font-medium`} href={href || "#"} target={target || ""}>
      <span className="whitespace-nowrap">{text}</span>
    </a>
  );
}

export default HeaderNavLinks;
