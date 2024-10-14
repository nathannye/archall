export default class Sector{
  constructor() {
   this.blocksToMix = document.querySelectorAll(".mixing-blocks > *");
   this.projectsWrapper = document.querySelector(".sector-projects-wrapper");
   this.projects = this.projectsWrapper?.children;
    
    if (blocksToMix?.length > 0) {
        
        this.init();
    }
  }

  init() {

    const gridPatternIndex =(num) => {
      // use pattern 3+(n−1)×5
      return 4 + (num - 1) * 5;
    }

    this.blocksToMix.forEach((block, i) => {
      const indexToPlace = gridPatternIndex(i + 1);
  
      if (indexToPlace + 1 > this.projects.length) {
        hideMixBlock(block);
        return;
      }
  
      const projectBefore = this.projects[indexToPlace - 1];
  
      this.projectsWrapper.insertBefore(block, projectBefore);
      alignMixBlock(block);
    });
  }
}