import gsap from "gsap";

export default class HotspotPoint {
  constructor({
    point,
    containerHeight,
    containerWidth,
    isMobile,
    container,
    index,
    selected,
  }) {
    this.point = point;
    this.selected = selected;
    this.isMobile = window.innerWidth <= 786;
    this.container = container;
    this.containerHeight = containerHeight;
    this.containerWidth = containerWidth;
    this.marker = this.point.querySelector('[data-point="marker"]');
    this.img = this.container.querySelector('[data-point="image"] img');
    this.mobilePopup = [
      ...this.container.querySelectorAll('[data-point="mobile-popup"]'),
    ][index];
    this.posX = this.marker.dataset.x / 100;
    this.posY = this.marker.dataset.y / 100;
    this.mobileCloseButton = this.mobilePopup.querySelector("img");
    this.isPopupLeft = this.isMobile ? false : this.posX >= 0.8;
    this.popup = this.point.querySelector('[data-point="popup"]');
    this.closeButton = this.point.querySelector('[data-point="close"]');

    this.init();
    this.listeners();
    this.setPosition();
    
  }

  listeners() {
    if (this.img.complete) {
      setTimeout(() => {
        
        this.setPosition();
      }, 800)
    }

    this.img.addEventListener("load", () => { 
      setTimeout(() => {
        this.setPosition();
      }, 800)
    })

    this.marker.addEventListener("click", () => this.open.bind(this)());
    this.closeButton.addEventListener("click", () => this.close.bind(this)());
    this.mobileCloseButton.addEventListener("click", () =>
      this.close.bind(this)()
    );
  }

  setPosition() {
    this.containerHeight = this.container.querySelector(
      '[data-point="image"]'
    ).clientHeight;

    const x = Math.min(this.posX, 0.9);
    const y = Math.min(this.posY, 0.9);

    const s = `translate(${x * this.containerWidth}px, ${
      y * this.containerHeight
    }px)`;

    this.point.style.transform = s;

    this.isPopupLeft = this.isMobile ? false : this.posX >= 0.8;

    if (this.isPopupLeft) {
      // this.popup.style.transform = `translate(calc(-100% - 75px),20px,0px);`;
      this.popup.classList.add("is-left");
    } else {
      this.popup.classList.remove("is-left");
    }
  }

  open() {
    this.container.active = true;
    this.point.dataset.open = true;
    if (this.isMobile) {
      gsap.to(this.mobilePopup, {
        opacity: 1,
        ease: "expo.out",
        duration: 0.8,
      });
    } else {
      gsap.to(this.popup, {
        opacity: 1,
        ease: "expo.out",
        duration: 0.8,
      });
    }
  }

  close() {
    this.container.dataset.active = false;
    this.point.dataset.open = false;

    if (this.isMobile) {
      gsap.to(this.mobilePopup, {
        opacity: 0,
        ease: "expo.out",
        duration: 0.8,
      });
    } else {
      gsap.to(this.popup, {
        opacity: 0,
        ease: "expo.out",
        duration: 0.8,
      });
    }
  }

  resize() {
    this.containerWidth = this.img.getBoundingClientRect().width;
    this.containerHeight = this.img.getBoundingClientRect().height;

    if (window.innerWidth <= 768 && this.isMobile) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.setPosition();
  }

  init() {
    this.popup.style.opacity = 0;
    this.mobilePopup.style.opacity = 0;
    if (this.isPopupLeft) {
      this.popup.style.transform = `translate(calc(-100% - 75px),20px,0px);`;
    }
    this.point.style.position = "absolute";
  }


}