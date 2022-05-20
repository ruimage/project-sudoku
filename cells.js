/* eslint-disable */
const getEmptyCells = (puzzle) => {
  let arrEmpty = [];
  for (let i = 0; i < puzzle.length; i++) {
    if (Array.isArray(puzzle[i])) {
      for (let j = 0; j < puzzle[i].length; j++) {
        if ( puzzle[i][j]  == '-'){
          arrEmpty.push([i,j]);
        }
      }
    }
  }
  console.log(arrEmpty);
  return arrEmpty;
};

module.exports = { getEmptyCells };
