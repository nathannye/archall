const blocksToMix = document.querySelectorAll(".mixing-blocks > *");
const projectsWrapper = document.querySelector(".projects-wrapper");
const projects = projectsWrapper.children;

const gridPatternIndex = (num) => {
  // use pattern 3+(n−1)×5
  return 4 + (num - 1) * 5;
};

const addStatsToProjectList = () => {
  blocksToMix.forEach((block, i) => {
    const indexToPlace = gridPatternIndex(i + 1);
    if (indexToPlace > projects.length) return
    const projectBefore = projects[indexToPlace - 1];

    projectsWrapper.insertBefore(block, projectBefore);
  });
};

addStatsToProjectList();

