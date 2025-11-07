import React from "react";

export default function BottomBar() {
  return (
    <div
      className="backdrop-blur-sm backdrop-saturate-125 fixed left-0 bottom-0 w-full h-14 flex items-center justify-center shadow-md z-50 fadeContainer"
      role="contentinfo"
      aria-label="Bottom persistent bar"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
    </div>
  );
}
