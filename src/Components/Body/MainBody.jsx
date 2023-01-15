import React, { memo } from "react";
import Banner from "./Banner";

function MainBody() {
  return (
    <main className="mt-[3.75rem]">
      <Banner />
    </main>
  );
}

export default memo(MainBody);
