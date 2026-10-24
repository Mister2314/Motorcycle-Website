import { useEffect, useState } from "react";

export default function Slider() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`slider${visible ? " visible" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-play fa-rotate-270"></i>
    </div>
  );
}
