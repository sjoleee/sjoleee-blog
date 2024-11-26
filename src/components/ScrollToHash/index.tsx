"use client";

import { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    // URL에 해시가 있는 경우
    if (window.location.hash) {
      const decodedHash = decodeURIComponent(window.location.hash);

      setTimeout(() => {
        const element = document.querySelector(decodedHash);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, []);

  return null;
};

export default ScrollToHash;
