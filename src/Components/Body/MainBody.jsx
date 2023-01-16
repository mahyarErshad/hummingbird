import React, { memo } from "react";
import Banner from "./Banner";

function MainBody() {
  return (
    <main className="mt-[3.75rem] max-lg:px-4 lg:px-[15%]">
      <Banner />
    </main>
  );
}

export default memo(MainBody);
