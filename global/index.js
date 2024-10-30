import Animations from "../anims";
import MixBlocks from "./mix-blocks";
import ModalForm from "./modal";
import Nav from "./nav";

export default class Global{
  constructor() {
    new MixBlocks()
    new Nav()
    new Animations()

    console.log('global created')
  }

  init() {
    const modal = document.querySelector(".modal-wrapper");
    console.log('found modal:', modal)
    if (modal) {
      new ModalForm(modal);
    }
  }
}