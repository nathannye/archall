export default class ModalForm{
  constructor(el) {
    this.el = el
    this.isOpen = false
    this.triggers = document.querySelectorAll('[data-modal="trigger"]');
    this.modalContent = this.el.querySelector(".modal-form");

    this.init()
  }

  init() {
    this.triggers?.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.isOpen ? this.tl.reverse() : this.tl.play();
        this.el.setAttribute("data-open", this.isOpen ? "false" : "true");
        this.isOpen = !this.isOpen;
      });
    });
  }
}