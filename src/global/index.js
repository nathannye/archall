import Animations from "../anims";
import MixBlocks from "./mix-blocks";
import ModalForm from "./modal";
import Nav from "./nav";
import NavAccordion from "./nav-accordion";
import gsap from "gsap";

export default class Global {
	constructor() {
		this.activeDropdown = null;
		this.dropdowns = gsap.utils.toArray('[data-dropdown="container"]');
		this.init();
	}

	init() {
		if (this.dropdowns.length > 0) {
			this.dropdowns.forEach((dropdown, i) => {
				new NavAccordion(dropdown, i);
			});
		}

		new MixBlocks();
		new Nav(this.dropdowns);
		new Animations();

		const modal = document.querySelector(".modal-wrapper");
		if (modal) {
			new ModalForm(modal);
		}
	}
}
