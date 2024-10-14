import Lenis from "lenis";

export default class Scroll{
  constructor() {
    console.log('scroll created')
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