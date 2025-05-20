import gsap from "gsap";
import { emit } from "../utils/events";

export default class Nav {
	constructor(dropdowns) {
		this.dropdowns = dropdowns;
		this.navOpen = false;
		this.activeImage = null;
		this.menuButton = document.querySelector('[data-nav="trigger"]');
		this.panel = document.querySelector('[data-nav="panel"]');
		this.navLinks = document.querySelectorAll(".nav_link");
		this.navContainer = document.querySelector('[data-nav="container"]');

		this.navTl = gsap.timeline({ paused: true });
		this.init();
		this.listeners();
	}

	unlockScrollWhenCLickItem() {
		window.lenis.start();
	}

	handleSectorIn(index) {
		if (window.innerWidth < 768 || navigator.maxTouchPoints > 0) return; // dont fire this on mobile
		const images = document.querySelectorAll('[data-nav="images"] img');
		if (!images[index] && !this.navOpen) return;
		images[index].classList.add("active-image");
	}

	handleSectorOut() {
		const images = document.querySelectorAll('[data-nav="images"] img');
		images.forEach((el, i) => {
			el.classList.remove("active-image");
		});
	}

	init() {
		const mm = gsap.matchMedia();
		// desktop
		// mm.add("(min-width: 768px)", () => {
		gsap.set(this.panel, {
			clipPath: `inset(0% 100% 0% 0%)`,
			pointerEvents: "none",
			opacity: 0,
		});

		this.navTl.to(
			this.panel,
			{
				clipPath: `inset(0% 0% 0% 0%)`,
				pointerEvents: "auto",
				opacity: 1,
				duration: 0.8,
				ease: "power4.out",
			},
			0,
		);
		// });
	}

	toggleNav() {
		const isOpen = this.navOpen;

		emit("nav-open", {
			isOpen,
		});

		this.panel.setAttribute("data-open", isOpen);

		if (isOpen && this.dropdowns.length > 0) {
			for (const dropdown of this.dropdowns) {
				dropdown.close();
			}
		}

		isOpen ? this.navTl.reverse() : this.navTl.play();
		isOpen ? window.lenis.start() : window.lenis.stop();
		this.menuButton.textContent = isOpen ? "Menu" : "Close";
		this.navOpen = !this.navOpen;
	}

	listeners() {
		this.menuButton.addEventListener("click", this.toggleNav.bind(this));
		this.navLinks.forEach((el, i) => {
			el.addEventListener("click", this.unlockScrollWhenCLickItem.bind(this));
		});
	}
}
