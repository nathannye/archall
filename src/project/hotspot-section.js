import { ScrollTrigger } from "gsap/all";
import HotspotPoint from "./hotspot-point";

export default class HotspotSection {
  constructor(el) {
    this.container = el;
    this.isMobile = window.innerWidth <= 768;
    this.image = this.container.querySelector('[data-point="image"] > img');
    this.containerHeight = this.image.getBoundingClientRect().height;
    this.containerWidth = this.image.getBoundingClientRect().width;
    this.selected = null;

    this.createPoints();
    this.listeners();
  }

  createPoints() {
    this.points = [...this.container.querySelectorAll('[data-point="point"]')];
    this.points = this.points.map(
      (point, index) =>
        new HotspotPoint({
          point,
          index,
          isMobile: this.isMobile,
          containerHeight: this.containerHeight,
          containerWidth: this.containerWidth,
          container: this.container,
          selected: this.selected,
        })
    );
  }

  listeners() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
      this.containerHeight = this.image.getBoundingClientRect().height;
      this.containerWidth = this.image.getBoundingClientRect().width;
      this.points.forEach((point) => point.resize());
    });

    
    ScrollTrigger.create({
      start: 'top bottom', 
      trigger: this.container,
      onEnter: () => {
        this.points.forEach((point) => point.resize());
      },
      once: true,
    })

    if (this.image.complete) {
      this.containerHeight = this.image.getBoundingClientRect().height;
      this.containerWidth = this.image.getBoundingClientRect().width;
    } else {
      this.image.onload = () => {
        this.containerHeight = this.image.getBoundingClientRect().height;
        this.containerWidth = this.image.getBoundingClientRect().width;
      };
    }

    this.points.forEach((point, index) => {
      point.marker.addEventListener("click", () => {
        if (this.selected !== index) {
          this.points.forEach((p) => p.close());
          point.open();
        } else {
        }

        this.selected = index;
      });

      point.closeButton.addEventListener("click", () => {
        point.close();
        this.points
          .filter((index) => index !== this.selected)
          .forEach((p) => p.close());
        this.selected = null;
      });

      point.mobileCloseButton.addEventListener("click", () => {
        this.points
          .filter((index) => index !== this.selected)
          .forEach((p) => p.close());
        this.selected = null;
      });
    });
  }
}