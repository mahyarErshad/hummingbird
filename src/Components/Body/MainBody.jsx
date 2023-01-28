import React, { memo } from "react";
import Badges from "./Badges";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Features from "./Features";

function MainBody() {
  return (
    <main className="mt-[3.75rem]">
      <Banner />
      <Features />
      <Badges />
      <FAQ />
    </main>
  );
}

export default memo(MainBody);
