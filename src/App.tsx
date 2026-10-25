import { useState } from "react";
import { useReveal } from "./hooks/useReveal";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import BoxSection from "./components/BoxSection";
import Lightbox from "./components/Lightbox";
import Showroom from "./components/Showroom";
import BookRide from "./components/BookRide";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import { GALLERY } from "./data/gallery";

export default function App() {
  useReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Slider />
      <Lightbox
        items={GALLERY}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
      <Hero />
      <main id="grid">
        <BoxSection
          sectionClass="box1-section"
          id="catalogue"
          startIndex={1}
          items={GALLERY.slice(0, 3)}
          onOpen={setLightboxIndex}
        />
        <BoxSection
          sectionClass="box2-section"
          startIndex={4}
          items={GALLERY.slice(3, 6)}
          onOpen={setLightboxIndex}
        />
        <BoxSection
          sectionClass="box3-section"
          startIndex={7}
          items={GALLERY.slice(6, 9)}
          onOpen={setLightboxIndex}
        />
        <Showroom />
        <BookRide />
      </main>
      <Footer />
      <FooterBottom />
    </>
  );
}
