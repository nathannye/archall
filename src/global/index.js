import Animations from "../anims";
import MixBlocks from "./mix-blocks";
import ModalForm from "./modal";
import Nav from "./nav";
import NavAccordion from "./nav-accordion";
import gsap from "gsap";

export default class Global {
	constructor() {
		this.dropdowns = gsap.utils.toArray('[data-dropdown="container"]');
		this.init();
	}

	init() {
		new MixBlocks();
		new Nav();
		new Animations();

		if (this.dropdowns.length > 0) {
			for (const dropdown of this.dropdowns) {
				new NavAccordion(dropdown);
			}
		}

		const modal = document.querySelector(".modal-wrapper");
		if (modal) {
			new ModalForm(modal);
		}
	}
}
