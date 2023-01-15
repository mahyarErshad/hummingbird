import React, { memo } from "react";
import Slider from "./Slider";

function MainBody() {
  return (
    <main className="mt-[3.75rem]">
      <Slider />
    </main>
  );
}

export default memo(MainBody);
