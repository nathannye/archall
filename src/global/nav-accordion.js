export default class NavAccordion {
	constructor(element) {
		this.element = element;
		this.carat = element.querySelector('[data-dropdown="carat"]');
		this.trigger = element.querySelector('[data-dropdown="trigger"]');
		this.optionsWrapper = element.querySelector('[data-nav="options"]');
		this.options = element.querySelectorAll('[data-nav="option"]');
		this.wrapAll = element.querySelector('[data-nav="options-wrap"]');
		this.navLinks = element.querySelectorAll(".nav_link");
		this.wrapAll.style.height = 0;
		this.dropdownOpen = false;

		console.log({
			navLinks: this.navLinks,
			trigger: this.trigger,
			optionsWrapper: this.optionsWrapper,
			options: this.options,
			wrapAll: this.wrapAll,
			carat: this.carat,
		});

		this.init();
	}

	unlockScrollWhenCLickItem() {
		window.lenis.start();
	}

	init() {
		this.element.addEventListener("click", this.handleClick.bind(this));
		this.createAnimation();
	}

	toggleDropdown() {
		this.dropdownOpen ? this.optionsTl.reverse() : this.optionsTl.play();
		this.dropdownOpen = !this.dropdownOpen;
	}

	listeners() {
		this.trigger.addEventListener("click", this.toggleDropdown.bind(this));
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
