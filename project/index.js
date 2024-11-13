import EmblaCarousel from 'embla-carousel'
import HotspotSection from "./hotspot-section";

export default class Project {
  constructor() {
    this.createCarousel();
    this.randomizeProjectsInSlider();
    this.createHotspots();
  }

  shuffle() {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  createCarousel() {
    const emblaNode = document.querySelector('[data-slider="wrapper"]');
    if (!emblaNode) return;

    let nextButtonHidden = false;
    let prevButtonHidden = true;
    const options = { loop: false, dragFree: true };
    const emblaApi = EmblaCarousel(emblaNode, options);
    const gradientNext = document.querySelector('[data-slider="fade-next"]');
    const nextBtn = gradientNext.querySelector('[data-slider="button"');
    const gradientPrev = document.querySelector('[data-slider="fade-prev"]');
    const prevBtn = gradientPrev.querySelector('[data-slider="button"');

    gradientPrev.classList.add("cant-scroll");

    emblaApi.on("scroll", (e) => {
      if (!emblaApi.canScrollNext() && !nextButtonHidden) {
        gradientNext.classList.add("cant-scroll");
        nextButtonHidden = true;
      } else if (emblaApi.canScrollNext() && nextButtonHidden) {
        gradientNext.classList.remove("cant-scroll");
        nextButtonHidden = false;
      }

      if (!emblaApi.canScrollPrev() && !prevButtonHidden) {
        gradientPrev.classList.add("cant-scroll");
        prevButtonHidden = true;
      } else if (emblaApi.canScrollPrev() && prevButtonHidden) {
        gradientPrev.classList.remove("cant-scroll");
        prevButtonHidden = false;
      }
    });

    nextBtn.addEventListener("click", () => {
      emblaApi.scrollNext();
    });

    prevBtn.addEventListener("click", () => {
      emblaApi.scrollPrev();
    });
  }

  randomizeProjectsInSlider() {
    const items = document.querySelectorAll(".project-slider-item");
    const parent = document.querySelector('[data-slider="container"]');

    if (!items?.length > 0 && !parent) return;

    for (var i = items.length; i >= 0; i--) {
      parent.appendChild(items[(Math.random() * i) | 0]);
    }
  }

  createHotspots() {
    this.containers = [
      ...document.querySelectorAll('[data-points="container"]'),
    ];
    if (this.containers?.length === 0) return;
    this.containers = this.containers.map((el) => new HotspotSection(el));
  }
}