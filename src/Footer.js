import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export function Footer() {
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
  }
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    });
  }, []);

  return (
    <div className="footer">
      Copyright © Your Website 2021
      {scrollToTopButton && <Button className="scrollToTopButton" onClick={() => scrollUp()}>^</Button>}
    </div>
  );
}
