import React, { memo } from "react";
import Banner from "./Banner";
import Features from "./Features";

function MainBody() {
  return (
    <main className="mt-[3.75rem]">
      <Banner />
      <Features />
    </main>
  );
}

export default memo(MainBody);
