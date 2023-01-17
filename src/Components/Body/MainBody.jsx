import React, { memo } from "react";
import Banner from "./Banner";
import Pricing from "./Pricing";

function MainBody() {
  return (
    <main className="mt-[3.75rem] max-lg:px-4 lg:px-[15%] pb-8">
      <Banner />
      <Pricing />
    </main>
  );
}

export default memo(MainBody);
