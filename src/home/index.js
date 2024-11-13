import HeroSlider from "./heroSlider";
import RandomizedImageCarousel from "./randomizedImageCarousel";

export default class Home{
  constructor() {
    const heroSlider = document.querySelector(".slider-container");
    const marketSlider = document.querySelectorAll(".market-slider__item-images");
    
    if (marketSlider) {
      new RandomizedImageCarousel(marketSlider);
    }

    if (heroSlider) {
      new HeroSlider(heroSlider);
    }
  }
}