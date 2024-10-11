import Members from "./team-members"

export default class About{
  constructor() {
    this.init()
  }

  init() {
    const people = document.querySelectorAll(".team-grid > div");
    if (people?.length > 0) {
      new Members()
    }
  }
}