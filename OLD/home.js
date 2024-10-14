export class HeroSlider {
  constructor() {
    this.heroSlider = document.querySelector(".slider-container");
    if (this.heroSlider) {
      this.items = document.querySelectorAll(".slider-item");
      this.dots = document.querySelectorAll(".hero-slider__controller > .dot");
      this.toggleButton = document.querySelector(".slider-toggle");
      this.toggleIcons = this.toggleButton.querySelectorAll("img");
      this.activeImage = 1; // set as 1 so first slide changed to is index 1
      this.duration = 4200;
      this.interval;
      this.timer;
      this.paused = false;

      this.createSliderInterval();
      this.createClickListeners();
      this.setInitialSlide();
    }
  }

  setInitialSlide() {
    this.setActive(0);
  }

  killInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  toggleState() {
    this.paused = !this.paused;

    this.toggleButton.classList.toggle("paused");
    if (this.paused) {
      this.killInterval();
    } else {
      this.createSliderInterval();
    }
  }

  resetInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      // if timer created, kill it
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.createSliderInterval();
        }, this.duration);
        // if no timer, make a new one
      } else {
        this.timer = setTimeout(() => {
          this.createSliderInterval();
        }, this.duration);
      }
    }
  }

  createClickListeners() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.activeImage = index;
        this.clearSlides();
        this.nextSlide(this.activeImage, true);
        this.resetInterval();
      });
    });

    this.toggleButton.addEventListener("click", () => {
      this.toggleState();
    });
  }

  clearSlides(index) {
    if (!+index) {
      this.items.forEach((el) => {
        el.classList.remove("active");
      });
      this.dots.forEach((el) => {
        el.classList.remove("active");
      });
    } else {
      this.dots[index].classList.remove("active");
      this.items[index].classList.remove("active");
    }
  }

  setActive(index) {
    this.dots[index].classList.add("active");
    this.items[index].classList.add("active");
  }

  nextSlide(nextSlide, immediate = false) {
    if (immediate) {
      // Immediately kill, run if user clicks on a dot
      this.clearSlides();
      this.setActive(nextSlide);
    } else {
      this.clearSlides();
      // if last, loop to 0 next
      if (nextSlide === this.items.length) {
        this.activeImage = 0;
        this.setActive(this.activeImage);
      } else {
        this.setActive(this.activeImage);
      }
    }
    this.activeImage++;
  }

  createSliderInterval() {
    this.interval = setInterval(() => {
      this.nextSlide(this.activeImage);
    }, this.duration);
  }
}
