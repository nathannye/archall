(() => {
  // about/team-members.js
  var Members = class {
    constructor() {
      this.people = document.querySelectorAll(".team-grid > div");
      this.createJoinUs();
    }
    createListeners() {
      this.people.forEach((person, index) => {
        person.addEventListener("touchstart", () => {
          person.classList.toggle("active");
        });
      });
    }
    createJoinUs() {
      const joinUsBlock = document.querySelector(".team-grid__filler");
      const grid = document.querySelector(".team-grid");
      if (joinUsBlock.dataset.hidden === "true") {
        joinUsBlock.remove();
      } else {
        grid.append(joinUsBlock);
      }
    }
  };

  // about/index.js
  var About = class {
    constructor() {
      this.init();
    }
    init() {
      const people = document.querySelectorAll(".team-grid > div");
      if (people?.length > 0) {
        new Members();
      }
    }
  };

  // anims/lists.js
  var Lists = class {
    constructor() {
      this.elements = document.querySelectorAll(".project-list-item");
      if (this.elements?.length > 0) {
        this.init();
      }
    }
    init() {
      [...elements].slice(2).forEach((el2, i) => {
        gsap.from(el2, {
          scrollTrigger: {
            start: "top 90%",
            trigger: el2.parentNode
          },
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "expo.out"
        });
      });
    }
  };

  // anims/number-counter.js
  var NumberCounter = class {
    constructor(el2) {
      this.el = el2;
    }
    init() {
      if (+this.el.textContent) {
        const currentNum = +this.el.textContent;
        gsap.from(this.el, {
          textContent: 0,
          snap: { textContent: 1 },
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            start: "top 95%",
            trigger: this.el
          }
        });
      }
    }
  };

  // anims/parallax.js
  var Parallax = class {
    constructor(el2) {
      this.el = el2;
      this.init();
    }
    init() {
      const img = this.el.querySelector("img");
      img.style.scale = 100 + DISTANCE + "%";
      gsap.to(this.el, {
        yPercent: DISTANCE / 2,
        ease: "none",
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          trigger: el,
          scrub: true
        }
      });
    }
  };

  // anims/scroll.js
  var Scroll = class {
    construtor() {
      this.init();
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
  };

  // anims/index.js
  var Animations = class {
    constructor() {
      this.parallaxElements = document.querySelectorAll('[data-animation="parallax"]');
    }
    init() {
      new Scroll();
      const parallaxElements = document.querySelectorAll('[data-animation="parallax"]');
      if (parallaxElements?.length > 0) {
        parallaxElements.forEach((el2, i) => {
          new Parallax(el2);
        });
      }
      new Lists();
      const counterElements = document.querySelectorAll('[data-animation="count"]');
      if (counterElements?.length > 0) {
        counterElements.forEach((el2, i) => {
          new NumberCounter(el2);
        });
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
  };

  // global/mix-blocks.js
  var MixBlocks = class {
    constructor() {
      this.blocksToMix = document.querySelectorAll(".mixing-blocks > *");
      this.projectsWrapper = document.querySelector(".projects-wrapper");
      if (!this.projectsWrapper) return;
      this.projects = this.projectsWrapper.children;
      this.init();
    }
    gridPatternIndex(num) {
      return 4 + (num - 1) * 5;
    }
    init() {
      this.blocksToMix.forEach((block, i) => {
        const indexToPlace = gridPatternIndex(i + 1);
        if (indexToPlace > this.projects.length) return;
        const projectBefore = this.projects[indexToPlace - 1];
        this.rojectsWrapper.insertBefore(block, projectBefore);
      });
    }
  };

  // global/modal.js
  var ModalForm = class {
    constructor(el2) {
      this.el = el2;
      this.isOpen = false;
      this.triggers = document.querySelectorAll('[data-modal="trigger"]');
      this.modalContent = this.el.querySelector(".modal-form");
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
  };

  // global/nav.js
  var Nav = class {
    constructor() {
      this.navOpen = false;
      this.dropdownOpen = false;
      this.activeImage = null;
      this.menuButton = document.querySelector('[data-nav="trigger"]');
      this.carat = document.querySelector('[data-sectors="carat"]');
      this.trigger = document.querySelector('[data-nav="dropdown"]');
      this.panel = document.querySelector('[data-nav="panel"]');
      this.optionsWrapper = document.querySelector('[data-nav="options"]');
      this.options = document.querySelectorAll('[data-nav="option"]');
      this.navLinks = document.querySelectorAll(".nav_link");
      this.navContainer = document.querySelector('[data-nav="container"]');
      this.optionsTl = gsap.timeline({ paused: true });
      this.wrapAll = document.querySelector('[data-nav="options-wrap"]');
      this.wrapAll.style.height = 0;
      this.navTl = gsap.timeline({ paused: true });
      this.init();
      this.listeners();
      console.log("created nav");
    }
    unlockScrollWhenCLickItem() {
      window.lenis.start();
    }
    toggleDropdown() {
      this.dropdownOpen ? this.optionsTl.reverse() : this.optionsTl.play();
      this.dropdownOpen = !this.dropdownOpen;
    }
    handleSectorIn(index) {
      if (window.innerWidth < 768 || navigator.maxTouchPoints > 0) return;
      const images = document.querySelectorAll('[data-nav="images"] img');
      if (!images[index] && !navOpen) return;
      images[index].classList.add("active-image");
    }
    handleSectorOut() {
      const images = document.querySelectorAll('[data-nav="images"] img');
      images.forEach((el2, i) => {
        el2.classList.remove("active-image");
      });
    }
    init() {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        this.optionsTl.to(
          this.carat,
          {
            rotate: 180,
            duration: 0.7,
            ease: "expo.out"
          },
          0
        ).to(
          this.navLinks,
          {
            opacity: 0.35,
            duration: 0.5,
            ease: "expo.out"
          },
          0
        ).to(
          this.wrapAll,
          {
            height: "auto",
            duration: 0.4,
            ease: "expo.out"
          },
          0
        ).from(
          this.options,
          {
            duration: 0.8,
            opacity: 0,
            y: 10,
            stagger: 0.04,
            ease: "expo.out"
          },
          0
        );
      });
      mm.add("(max-width: 767px)", () => {
        this.optionsTl.to(
          this.carat,
          {
            rotate: 180,
            duration: 0.7,
            ease: "expo.out"
          },
          0
        ).to(
          this.navLinks,
          {
            opacity: 0.6,
            duration: 0.5,
            ease: "expo.out"
          },
          0
        ).to(
          this.wrapAll,
          {
            height: "auto",
            duration: 0.7,
            ease: "expo.out"
          },
          0
        ).from(
          this.options,
          {
            duration: 0.8,
            opacity: 0,
            y: 10,
            stagger: 0.04,
            ease: "expo.out"
          },
          0
        );
      });
      gsap.set(this.panel, {
        clipPath: `inset(0% 100% 0% 0%)`
      });
      this.navTl.to(
        this.panel,
        {
          clipPath: `inset(0% 0% 0% 0%)`,
          pointerEvents: "auto",
          duration: 0.8,
          ease: "power4.out"
        },
        0
      );
    }
    toggleNav() {
      this.navOpen ? this.navTl.reverse() : this.navTl.play();
      this.navOpen ? window.lenis.start() : window.lenis.stop();
      this.menuButton.textContent = this.navOpen ? "Menu" : "Close";
      this.navOpen = !this.navOpen;
    }
    listeners() {
      this.menuButton.addEventListener("click", this.toggleNav.bind(this));
      this.navLinks.forEach((el2, i) => {
        el2.addEventListener("click", this.unlockScrollWhenCLickItem.bind(this));
      });
      this.trigger.addEventListener("click", this.toggleDropdown.bind(this));
      this.options.forEach((el2, i) => {
        el2.addEventListener("mouseover", () => this.handleSectorIn(i));
        el2.addEventListener("mouseout", this.handleSectorOut.bind(this));
      });
    }
  };

  // global/index.js
  var Global = class {
    constructor() {
      new MixBlocks();
      new Nav();
      new Animations();
      console.log("global created");
    }
    init() {
      const modal = document.querySelector(".modal-wrapper");
      if (modal) {
        new ModalForm(modal);
      }
    }
  };

  // home/heroSlider.js
  var HeroSlider = class {
    constructor(el2) {
      this.heroSlider = el2;
      this.items = document.querySelectorAll(".slider-item");
      this.dots = document.querySelectorAll(".hero-slider__controller > .dot");
      this.toggleButton = document.querySelector(".slider-toggle");
      this.toggleIcons = this.toggleButton.querySelectorAll("img");
      this.activeImage = 1;
      this.duration = 4200;
      this.interval;
      this.timer;
      this.paused = false;
      this.createSliderInterval();
      this.createClickListeners();
      this.setInitialSlide();
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
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.createSliderInterval();
          }, this.duration);
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
        this.items.forEach((el2) => {
          el2.classList.remove("active");
        });
        this.dots.forEach((el2) => {
          el2.classList.remove("active");
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
        this.clearSlides();
        this.setActive(nextSlide);
      } else {
        this.clearSlides();
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
  };

  // home/randomizedImageCarousel.js
  var RandomizedImageCarousel = class {
    constructor(cards) {
      this.cards = cards;
      this.initRandomizer();
      this.countSlides();
    }
    countSlides() {
      const el2 = document.querySelector(".market-number");
      const total = this.cards.length;
      el2.innerText = "//" + total;
    }
    getRandom(max) {
      return Math.floor(Math.random() * max);
    }
    initRandomizer() {
      this.cards.forEach((card, index) => {
        const cardImages = Array.from(card.querySelectorAll("img"));
        if (cardImages && cardImages.length > 0) {
          const randomNumber = this.getRandom(cardImages.length - 1);
          const visibleImage = cardImages[randomNumber];
          cardImages.forEach((image, i) => {
            if (i !== randomNumber) {
              image.remove();
            }
          });
        }
      });
    }
  };

  // home/index.js
  var Home = class {
    constructor() {
      const heroSlider = document.querySelector(".slider-container");
      const marketSlider = document.querySelectorAll(".market-slider__item-images");
      if (marketSlider) {
        new RandomizedImageCarousel(marketSlider);
      }
      if (heroSlider) {
        new HeroSlider(heroSlider);
      }
    }
  };

  // project/index.js
  var HotspotPoint = class {
    constructor({
      point,
      containerHeight,
      containerWidth,
      isMobile,
      container,
      index,
      selected
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
        ...this.container.querySelectorAll('[data-point="mobile-popup"]')
      ][index];
      this.posX = this.marker.dataset.x / 100;
      this.posY = this.marker.dataset.y / 100;
      this.mobileCloseButton = this.mobilePopup.querySelector("img");
      this.isPopupLeft = this.isMobile ? false : this.posX >= 0.8;
      this.popup = this.point.querySelector('[data-point="popup"]');
      this.closeButton = this.point.querySelector('[data-point="close"]');
      this.init();
      this.listeners();
      this.listeners2();
      this.setPosition();
    }
    listeners() {
      if (this.img.complete) {
        this.setPosition();
      } else {
        this.img.onload = () => {
          this.setPosition();
        };
      }
    }
    listeners2() {
      this.marker.addEventListener("click", () => this.open.bind(this)());
      this.closeButton.addEventListener("click", () => this.close.bind(this)());
      this.mobileCloseButton.addEventListener(
        "click",
        () => this.close.bind(this)()
      );
    }
    setPosition() {
      this.containerHeight = this.container.querySelector(
        '[data-point="image"]'
      ).clientHeight;
      const x = Math.min(this.posX, 0.9);
      const y = Math.min(this.posY, 0.9);
      const s = `translate(${x * this.containerWidth}px, ${y * this.containerHeight}px)`;
      this.point.style.transform = s;
      this.isPopupLeft = this.isMobile ? false : this.posX >= 0.8;
      if (this.isPopupLeft) {
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
          duration: 0.8
        });
      } else {
        gsap.to(this.popup, {
          opacity: 1,
          ease: "expo.out",
          duration: 0.8
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
          duration: 0.8
        });
      } else {
        gsap.to(this.popup, {
          opacity: 0,
          ease: "expo.out",
          duration: 0.8
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
  };
  var HotspotSection = class {
    constructor(el2) {
      this.container = el2;
      this.isMobile = window.innerWidth <= 768;
      this.image = this.container.querySelector('[data-point="image"] > img');
      this.containerHeight = this.image.getBoundingClientRect().height;
      this.containerWidth = this.image.getBoundingClientRect().width;
      this.selected = null;
      this.createPoints();
      this.listeners();
    }
    createPoints() {
      this.points = [...this.container.querySelectorAll('[data-point="point"]')];
      this.points = this.points.map(
        (point, index) => new HotspotPoint({
          point,
          index,
          isMobile: this.isMobile,
          containerHeight: this.containerHeight,
          containerWidth: this.containerWidth,
          container: this.container,
          selected: this.selected
        })
      );
    }
    listeners() {
      window.addEventListener("resize", () => {
        this.isMobile = window.innerWidth <= 768;
        this.containerHeight = this.image.getBoundingClientRect().height;
        this.containerWidth = this.image.getBoundingClientRect().width;
        this.points.forEach((point) => point.resize());
      });
      if (this.image.complete) {
        this.containerHeight = this.image.getBoundingClientRect().height;
        this.containerWidth = this.image.getBoundingClientRect().width;
      } else {
        this.image.onload = () => {
          this.containerHeight = this.image.getBoundingClientRect().height;
          this.containerWidth = this.image.getBoundingClientRect().width;
        };
      }
      this.points.forEach((point, index) => {
        point.marker.addEventListener("click", () => {
          if (this.selected !== index) {
            this.points.forEach((p) => p.close());
            point.open();
          } else {
          }
          this.selected = index;
        });
        point.closeButton.addEventListener("click", () => {
          point.close();
          this.points.filter((index2) => index2 !== this.selected).forEach((p) => p.close());
          this.selected = null;
        });
        point.mobileCloseButton.addEventListener("click", () => {
          this.points.filter((index2) => index2 !== this.selected).forEach((p) => p.close());
          this.selected = null;
        });
      });
    }
  };
  var Project = class {
    constructor() {
      this.createCarousel();
      this.randomizeProjectsInSlider();
      this.createHotspots();
    }
    shuffle() {
      let currentIndex = array.length;
      while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex]
        ];
      }
    }
    createCarousel() {
      const emblaNode = document.querySelector('[data-slider="wrapper"]');
      if (!emblaNode) return;
      let nextButtonHidden = false;
      let prevButtonHidden = true;
      const options = { loop: false, dragFree: true };
      const emblaApi = EmblaCarousel(emblaNode, options);
      const gradientNext = document.querySelector('[data-slider="fade-next"]');
      const nextBtn = gradientNext.querySelector('[data-slider="button"');
      const gradientPrev = document.querySelector('[data-slider="fade-prev"]');
      const prevBtn = gradientPrev.querySelector('[data-slider="button"');
      gradientPrev.classList.add("cant-scroll");
      emblaApi.on("scroll", (e) => {
        if (!emblaApi.canScrollNext() && !nextButtonHidden) {
          gradientNext.classList.add("cant-scroll");
          nextButtonHidden = true;
        } else if (emblaApi.canScrollNext() && nextButtonHidden) {
          gradientNext.classList.remove("cant-scroll");
          nextButtonHidden = false;
        }
        if (!emblaApi.canScrollPrev() && !prevButtonHidden) {
          gradientPrev.classList.add("cant-scroll");
          prevButtonHidden = true;
        } else if (emblaApi.canScrollPrev() && prevButtonHidden) {
          gradientPrev.classList.remove("cant-scroll");
          prevButtonHidden = false;
        }
      });
      nextBtn.addEventListener("click", () => {
        emblaApi.scrollNext();
      });
      prevBtn.addEventListener("click", () => {
        emblaApi.scrollPrev();
      });
    }
    randomizeProjectsInSlider() {
      const items = document.querySelectorAll(".project-slider-item");
      const parent = document.querySelector('[data-slider="container"]');
      if (!items?.length > 0 && !parent) return;
      for (var i = items.length; i >= 0; i--) {
        parent.appendChild(items[Math.random() * i | 0]);
      }
    }
    createHotspots() {
      this.containers = [
        ...document.querySelectorAll('[data-points="container"]')
      ];
      if (this.containers?.length === 0) return;
      this.containers = this.containers.map((el2) => new HotspotSection(el2));
    }
  };

  // sector/index.js
  var Sector = class {
    constructor() {
      this.blocksToMix = document.querySelectorAll(".mixing-blocks > *");
      this.projectsWrapper = document.querySelector(".sector-projects-wrapper");
      this.projects = this.projectsWrapper?.children;
      if (blocksToMix?.length > 0) {
        this.init();
      }
    }
    init() {
      this.blocksToMix.forEach((block, i) => {
        const indexToPlace = gridPatternIndex(i + 1);
        if (indexToPlace + 1 > this.projects.length) {
          hideMixBlock(block);
          return;
        }
        const projectBefore = this.projects[indexToPlace - 1];
        this.projectsWrapper.insertBefore(block, projectBefore);
        alignMixBlock(block);
      });
    }
  };

  // index.js
  var App = class {
    constructor() {
      this.currentPage = window.location.pathname;
      console.log("current page", this.currentPage);
      this.init();
    }
    init() {
      new Global();
      if (this.currentPage === "/") {
        new Home();
        console.log("created home");
      }
      if (this.currentPage === "/about") {
        new About();
        console.log("created about");
      }
      if (this.currentPage.startsWith("/projects/")) {
        new Project();
        console.log("created project");
      }
      if (this.currentPage.startsWith("/sector/")) {
        new Sector();
        console.log("created sector");
      }
    }
  };
  new App();
})();
//# sourceMappingURL=index.js.map
