export default class Members {
  constructor() {
    this.people = document.querySelectorAll(".team-grid > div");
    // this.createListeners();
    this.createJoinUs();
  }

  createListeners() {
    this.people.forEach((person, index) => {
      person.addEventListener("touchstart", () => {
        person.classList.toggle("active");
      });
    });
  }

  createJoinUs() {
    const joinUsBlock = document.querySelector(".team-grid__filler");
    const grid = document.querySelector(".team-grid");

    if (joinUsBlock.dataset.hidden === "true") {
      // remove from dom if hidden so it doesnt take up space
      joinUsBlock.remove();
    } else {
      // append to grid if visible
      grid.append(joinUsBlock);
    }

    // const careerLinkItem = document.createElement("div");
    // careerLinkItem.classList.add("career-link-item");

    // const img = document.createElement("img");
    // img.src = "https://xdkv2h.csb.app/ppl.svg";
    // careerLinkItem.appendChild(img);

    // const link = document.createElement("a");
    // link.href = "/careers";
    // link.innerText = "Join us";
    // link.classList.add("link__underline");
    // careerLinkItem.appendChild(link);

    // const label = document.createElement("span");
    // label.innerHTML = "Join us";

    // element.appendChild(careerLinkItem);
  }
}
