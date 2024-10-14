import gsap from "gsap";

export default class Lists{
  constructor() {
    this.elements = document.querySelectorAll(".project-list-item");
    
    if (this.elements?.length > 0) {
      this.init();
    }
    
  }

  init(){
    // only do it for 3 and on since 2 are in viewport
    [...elements].slice(2).forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          start: "top 90%",
          trigger: el.parentNode,
        },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "expo.out",
      });
    });
  };
}