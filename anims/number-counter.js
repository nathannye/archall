export default class NumberCounter{
  constructor(el) {
    this.el = el
    
  }

  init() {
    if (+this.el.textContent) {
      const currentNum = +this.el.textContent;
      gsap.from(this.el, {
        textContent: 0,
        snap: { textContent: 1 },
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          start: "top 95%",
          trigger: this.el,
        },
      });
    }
  }
}