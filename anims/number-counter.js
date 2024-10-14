import gsap from "gsap";

export default class NumberCounter{
  constructor(el) {
    this.el = el
    
  }

  stuff() {
    const elements = document.querySelectorAll('[data-animation="counter"]');

    elements.forEach((el) => {
        new ScrollTrigger({
          once: true,
          trigger: el,
          start: "top 90%",
          ease: "power3.out",
          onEnter: () => {
            gsap.from(el, {
              innerText: 0,
              snap: {
                innerText:1
              },
              duration: 2.75,
            })

          }
        });
    });
  }

  init() {
    if (+this.el.textContent) {
      gsap.from(this.el, {
        innerText: 0,
        snap: { innerText: 1 },
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          start: "top 95%",
          once: true,
          trigger: this.el,
        },
      });
    }
  }
}