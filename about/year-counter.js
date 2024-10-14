export default class YearCounter(){
  constructor(el) {
    this.el = el
    this.init()
  }

  init() {
    const year = new Date().getFullYear();

    elements.forEach((el) => {
      // console.log('creating counter for', el);
      let endValue;
      
      if(el.dataset?.counter === 'year'){
      // set year as current text, animate to inputed value in tween
        endValue = el.innerText;
        el.innerText = year;
      } else {
      // set text as 0, animate to inputted text
        endValue = el.innerText;
        el.innerText = 0;
      }
    
        new ScrollTrigger({
          once: true,
          trigger: el,
          start: "top 90%",
          ease: "power3.out",
          onEnter: () => {
          // if year counter, use year, if not, start at 0
          if(el.dataset?.counter === 'year'){
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
        });
    });
  }
}