import gsap from "gsap";

export default class ModalForm{
  constructor(el) {
    this.el = el
    this.isOpen = false
    this.triggers = document.querySelectorAll('[data-modal="trigger"]');
    this.modalContent = this.el.querySelector(".modal-form");

    this.init()
  }

  init() {

    const tl = gsap.timeline({
      paused: true,
    });
  
    tl.to(
      this.modal,
      {
        display: "flex",
        duration: 0,
        ease: "none",
      },
      0
    )
      .from(
        this.el,
        {
          opacity: 0,
          duration: 0.7,
          ease: "expo.out",
        },
        0.2
      )
      .to(
        this.modalContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
        },
        0.2
      );


    this.triggers?.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.isOpen ? tl.reverse() : tl.play();
        this.el.setAttribute("data-open", this.isOpen ? "false" : "true");
        this.isOpen = !this.isOpen;
      });
    });
  }
}