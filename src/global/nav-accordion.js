import gsap from "gsap";
import { emit, listen } from "../utils/events";

export default class NavAccordion {
	constructor(element, index) {
		this.element = element;
		this.index = index;
		this.carat = element.querySelector('[data-dropdown="carat"]');
		this.trigger = element.querySelector('[data-dropdown="trigger"]');
		this.optionsWrapper = element.querySelector('[data-nav="options"]');
		this.options = element.querySelectorAll('[data-nav="option"]');
		this.wrapAll = element.querySelector('[data-nav="options-wrap"]');
		this.navLinks = element.querySelectorAll(".nav_link");
		this.optionsTl = gsap.timeline({ paused: true });
		this.wrapAll.style.height = 0;
		this.dropdownOpen = false;
		this.navOpen = false;

		this.isSectorDropdown = this.element?.dataset?.dropdowns === "sectors";

		this.init();
	}

	isNavOpen() {
		return (
			document.querySelector('[data-nav="panel"]').getAttribute("data-open") ===
			"true"
		);
	}

	unlockScrollWhenCLickItem() {
		window.lenis.start();
	}

	fireEvent() {
		emit("nav-accordion-open", {
			index: this.index,
			isOpen: this.dropdownOpen,
		});
	}

	init() {
		// this.element.addEventListener("click", this.handleClick.bind(this));
		this.listeners();
		this.createAnimation();
	}

	close() {
		this.dropdownOpen = false;
		this.wrapAll.style.pointerEvents = "none";
		this.optionsTl.reverse();
	}

	open() {
		this.wrapAll.style.pointerEvents = "auto";
		this.dropdownOpen = true;
		this.optionsTl.play();
		this.fireEvent();
	}

	toggleDropdown() {
		this.dropdownOpen ? this.close() : this.open();
	}

	handleSectorIn(index) {
		function isNavOpen() {
			return (
				document
					.querySelector('[data-nav="panel"]')
					.getAttribute("data-open") === "true"
			);
		}

		if (window.innerWidth < 768 || navigator.maxTouchPoints > 0) return; // dont fire this on mobile
		const images = document.querySelectorAll('[data-nav="images"] img');
		if (!images[index] && !isNavOpen()) return;
		images[index].classList.add("active-image");
	}

	handleSectorOut() {
		const images = document.querySelectorAll('[data-nav="images"] img');
		images.forEach((el, i) => {
			el.classList.remove("active-image");
		});
	}

	listeners() {
		this.trigger.addEventListener("click", this.toggleDropdown.bind(this));

		if (this.isSectorDropdown) {
			this.options.forEach((el, i) => {
				el.addEventListener("mouseover", () => this.handleSectorIn(i));
				el.addEventListener("mouseout", this.handleSectorOut.bind(this));
			});
		}

		listen("nav-accordion-open", (e) => {
			if (e.detail.index !== this.index) {
				this.close();
			}
		});

		listen("nav-close", (e) => {
			this.close();
		});
	}

	createAnimation() {
		const mm = gsap.matchMedia();
		// desktop
		mm.add("(min-width: 768px)", () => {
			this.optionsTl
				.to(
					this.carat,
					{
						rotate: 180,
						duration: 0.7,
						ease: "expo.out",
					},
					0,
				)
				// .to(
				// 	this.navLinks,
				// 	{
				// 		opacity: 0.35,
				// 		duration: 0.5,
				// 		ease: "expo.out",
				// 	},
				// 	0,
				// )
				.to(
					this.wrapAll,
					{
						height: "auto",
						duration: 0.4,
						ease: "expo.out",
					},
					0,
				)
				.from(
					this.options,
					{
						duration: 0.8,
						opacity: 0,
						y: 10,
						stagger: 0.04,
						ease: "expo.out",
					},
					0,
				);
		});

		// mobile
		mm.add("(max-width: 767px)", () => {
			this.optionsTl
				.to(
					this.carat,
					{
						rotate: 180,
						duration: 0.7,
						ease: "expo.out",
					},
					0,
				)
				.to(
					this.navLinks,
					{
						opacity: 0.6,
						duration: 0.5,
						ease: "expo.out",
					},
					0,
				)
				.to(
					this.wrapAll,
					{
						height: "auto",
						duration: 0.7,
						ease: "expo.out",
					},
					0,
				)
				.from(
					this.options,
					{
						duration: 0.8,
						opacity: 0,
						y: 10,
						stagger: 0.04,
						ease: "expo.out",
					},
					0,
				);
		});
	}
}
