import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default class NumberCounter{
  constructor(el) {
    this.el = el
    this.init()
  }

  init() {
      new ScrollTrigger({
        once: true,
        trigger: this.el,
        onEnter: () => {
          if (el.dataset?.counter === 'year') {
            gsap.to(el, {
              innerText: endValue,
              snap: {
                innerText: 1
              },
              duration: 1.75,
            })
            
          } else {
            gsap.to(el, {
              innerText: endValue,
              snap: {
                innerText: 1
              },
              duration: 1.75,
            })
            
          }
        }
      })
  }
  
}