import Animations from "../animations";
import MixBlocks from "./mix-blocks";
import ModalForm from "./modal";
import Nav from "./nav";

export default class Global{
  constructor() {
    new MixBlocks()
    new Nav()
    new Animations()
  }

  init() {
    const modal = document.querySelector(".modal-wrapper");
    if (modal) {
      new ModalForm(modal);
    }
  }
}