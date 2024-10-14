import gsap from "gsap";

export default class Parallax{
  constructor(el) {
    this.el = el
    this.DISTANCE = 1.15
    this.init()
  }

  init() {
    const img = this.el.querySelector("img");
    img.style.scale = 100 + this.DISTANCE + "%";

    gsap.to(this.el, {
      yPercent: this.DISTANCE / 2,
      ease: "none",
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        trigger: el,
        scrub: true,
      },
    });
  }
}