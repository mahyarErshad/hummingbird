import React from "react";
import styles from "./header.module.css";

function HeaderNavLinks({ target, href, text }) {
  return (
    <a className={`${styles.borderBottom}`} href={href || "#"} target={target || ""}>
      <span>{text}</span>
    </a>
  );
}

export default HeaderNavLinks;
