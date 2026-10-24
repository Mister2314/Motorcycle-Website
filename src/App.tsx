import { useReveal } from "./hooks/useReveal";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import BoxSection from "./components/BoxSection";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";

export default function App() {
  useReveal();
  return (
    <>
      <Slider />
      <Hero />
      <main id="grid">
        <BoxSection
          sectionClass="box1-section"
          id="catalogue"
          startIndex={1}
          boxes={[
            { img: "/assets/img/port-img-1.jpg", date: "SEPTEMBER 6, 2019", title: "LOGOS & MOTORS" },
            { img: "/assets/img/port-img-2.jpg", date: "SEPTEMBER 6, 2019", title: "CATEGORY: MOTORSPORT" },
            { img: "/assets/img/port-img-3.jpg", date: "SEPTEMBER 10, 2019", title: "READY TO RACE" },
          ]}
        />
        <BoxSection
          sectionClass="box2-section"
          startIndex={4}
          boxes={[
            { img: "/assets/img/port-img-4.jpg", date: "SEPTEMBER 10, 2019", title: "SUPERCROSS SEASON" },
            { img: "/assets/img/port-img-5.jpg", date: "SEPTEMBER 11, 2019", title: "WOMEN OF MOTOCROSS" },
            { img: "/assets/img/port-img-6.jpg", date: "SEPTEMBER 11, 2019", title: "SE GEAR | SPOTLIGHT" },
          ]}
        />
        <BoxSection
          sectionClass="box3-section"
          startIndex={7}
          boxes={[
            { img: "/assets/img/port-img-7.jpg", date: "SEPTEMBER 11, 2019", title: "MTB SPOTLIGHT" },
            { img: "/assets/img/port-img-8.jpg", date: "SEPTEMBER 11, 2019", title: "WAREHOUSE REVIEW" },
            { img: "/assets/img/port-img-9.jpg", date: "SEPTEMBER 12, 2019", title: "MOTOGP SAN MARINO" },
          ]}
        />
      </main>
      <Footer />
      <FooterBottom />
    </>
  );
}
