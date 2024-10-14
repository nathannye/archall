export default class MixBlocks{
  constructor() {
    this.blocksToMix = document.querySelectorAll(".mixing-blocks > *");
    this.projectsWrapper = document.querySelector(".projects-wrapper");
    if(!this.projectsWrapper) return
    this.projects = this.projectsWrapper.children;
    this.init()
    console.log('mixblocks created')
  }

  gridPatternIndex(num) {
    // use pattern 3+(n−1)×5
    return 4 + (num - 1) * 5;
  }

  init() {
    this.blocksToMix.forEach((block, i) => {
      const indexToPlace = gridPatternIndex(i + 1);
      if (indexToPlace > this.projects.length) return
      const projectBefore = this.projects[indexToPlace - 1];
  
      this.rojectsWrapper.insertBefore(block, projectBefore);
    });
  }

}