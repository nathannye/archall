import Lenis from "lenis";

export default class Scroll{
  constructor() {
    this.init()
  }

  init() {
    const lenis = new Lenis();
  
    window.lenis = lenis;
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }
}