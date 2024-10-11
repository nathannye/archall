const blocksToMix = document.querySelectorAll(".mixing-blocks > *");
const projectsWrapper = document.querySelector(".projects-wrapper");
const projects = projectsWrapper.children;

const gridPatternIndex = (num) => {
  // use pattern 3+(n−1)×5
  return 4 + (num - 1) * 5;
};

const addStatsToProjectList = () => {
  blocksToMix.forEach((block, i) => {
    // console.log({ i })
    const indexToPlace = gridPatternIndex(i + 1);
    // console.log('placing at:', indexToPlace)

    if (indexToPlace > projects.length) return
    // console.log({ indexToPlace })
    const projectBefore = projects[indexToPlace - 1];

    projectsWrapper.insertBefore(block, projectBefore);
  });
};

addStatsToProjectList();

