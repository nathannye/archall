import Lists from "./lists";
import NumberCounter from "./number-counter";
import Parallax from "./parallax";
import Scroll from "./scroll";

export default class Animations{
  constructor() {
    this.parallaxElements = document.querySelectorAll('[data-animation="parallax"]');
  }

  init() {
    new Scroll()
    const parallaxElements = document.querySelectorAll('[data-animation="parallax"]');

    if(parallaxElements?.length > 0){
      parallaxElements.forEach((el, i) => { 
        new Parallax(el)
      })
    }

    new Lists()


    const counterElements = document.querySelectorAll('[data-animation="count"]');

    if (counterElements?.length > 0) {
      counterElements.forEach((el, i) => {
        new NumberCounter(el)
      })
    }

  }

 
  
  // createListFades = () => {
  //   const elements = document.querySelectorAll(".project-list-item");
  //   if (!elements?.length) return;
  //   // only do it for 3 and on since 2 are in viewport
  //   [...elements].slice(2).forEach((el, i) => {
  //     gsap.from(el, {
  //       scrollTrigger: {
  //         start: "top 90%",
  //         trigger: el.parentNode,
  //       },
  //       opacity: 0,
  //       y: 30,
  //       duration: 0.9,
  //       ease: "expo.out",
  //     });
  //   });
  // };
  
  // createNumberCounters = () => {
    
  //   if (!elements?.length) return;
  //   elements.forEach((el, i) => {
  //     if (+el.textContent) {
  //       const currentNum = +el.textContent;
  //       gsap.from(el, {
  //         textContent: 0,
  //         snap: { textContent: 1 },
  //         ease: "power3.out",
  //         duration: 1.2,
  //         scrollTrigger: {
  //           start: "top 95%",
  //           trigger: el,
  //         },
  //       });
  //     }
  //   });
  // };
}