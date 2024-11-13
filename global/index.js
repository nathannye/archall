import Animations from "../anims";
import MixBlocks from "./mix-blocks";
import ModalForm from "./modal";
import Nav from "./nav";

export default class Global{
  constructor() {

    this.init()
  }

  init() {
    new MixBlocks()
    new Nav()
    new Animations()

    const modal = document.querySelector(".modal-wrapper");
    if (modal) {
      new ModalForm(modal);
    }
  }
}