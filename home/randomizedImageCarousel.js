export default class RandomizedImageCarousel {
  constructor(cards) {
    this.cards = cards;
      this.initRandomizer();
      this.countSlides();
  }
  countSlides() {
    const el = document.querySelector(".market-number");
    const total = this.cards.length;
    el.innerText = "//" + total;
  }

  getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  initRandomizer() {
    this.cards.forEach((card, index) => {
      const cardImages = Array.from(card.querySelectorAll("img"));

      if (cardImages && cardImages.length > 0) {
        const randomNumber = this.getRandom(cardImages.length - 1);
        const visibleImage = cardImages[randomNumber];

        // remove source to prevent loading
        cardImages.forEach((image, i) => {
          if (i !== randomNumber) {
            image.remove();
          }
        });
      }
    });
  }
}
