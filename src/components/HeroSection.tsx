import { useState, useCallback, useEffect } from "react";
import heroBg from "@/assets/hero-bg.webp";
import sliderDalaiLama from "@/assets/slider-dalailama.webp";
import sliderMenlha from "@/assets/slider-menlha.webp";
import sliderProduction from "@/assets/slider-production.webp";
import sliderQc from "@/assets/slider-qc.webp";
import slider from "@/assets/slider5.jpeg";
import slider6 from "@/assets/slider6.jpeg";
import slider7 from "@/assets/slider7.png";
import slider8 from "@/assets/slider8.png";
import slider9 from "@/assets/slider9.png";
import slider10 from "@/assets/slider10.png";
import slider11 from "@/assets/slider11.png";
import slider13 from "@/assets/slider13.png";
import slider14 from "@/assets/slider14.png";
import slider15 from "@/assets/slider15.png";



const slides = [
  { img: heroBg, alt: "Sang-Druk Tibetan Herbal Clinic" },
  // { img: sliderDalaiLama, alt: "His Holiness the 14th Dalai Lama" },
  // { img: sliderMenlha, alt: "The Great Medicinal Buddha" },
  // { img: sliderProduction, alt: "Authentic Tibetan Herbal Medicine Production" },
  // { img: sliderQc, alt: "Modern Quality Control & Research" },
  { img: slider, alt: "Sang-Druk Clinic & Wellness Center" },
  { img: slider13, alt: "Sang-Druk Sustainable Practices" },
  // { img: slider6, alt: "Sang-Druk Wellness Program" },
  { img: slider7, alt: "Sang-Druk Community Outreach" },
  { img: slider14, alt: "Sang-Druk Innovation Hub" },
  // { img: slider8, alt: "Sang-Druk Healing Arts" },
  { img: slider9, alt: "Sang-Druk Traditional Medicine" },
  { img: slider15, alt: "Sang-Druk Global Impact" },
  // { img: slider10, alt: "Sang-Druk Research & Development" },
  { img: slider11, alt: "Sang-Druk Future Innovations" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full pt-[60px] sm:pt-[100px] lg:pt-[150px]">

      {/* ✅ CHANGED: removed max-width container */}
      <div className="w-full px-0">

        <div className="relative w-full h-[490px] overflow-hidden shadow-elegant bg-spa-green-deep">

          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-fit object-center"
                width={1920}
                height={1080}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* ✅ LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition"
          >
            ❮
          </button>

          {/* ✅ RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition"
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;