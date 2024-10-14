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
          if (this.el.dataset?.counter === 'year') {
            const endValue = new Date().getFullYear()
            gsap.to(this.el, {
              innerText: endValue,
              snap: {
                innerText: 1
              },
              duration: 1.75,
            })
            
          } else {
            gsap.from(this.el, {
              innerText: 0,
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