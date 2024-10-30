import Animations from "../anims";
import MixBlocks from "./mix-blocks";
import ModalForm from "./modal";
import Nav from "./nav";

export default class Global{
  constructor() {


    console.log('globallll created')

    this.init()
  }

  init() {
    new MixBlocks()
    new Nav()
    new Animations()

    const modal = document.querySelector(".modal-wrapper");
    console.log('found modal:', modal)
    if (modal) {
      new ModalForm(modal);
    }
  }
}