/* eslint-disable */
const getEmptyCells = (puzzle) => {
  const arrEmpty = [];
  for (let i = 0; i < puzzle.length; i += 1) {
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

function getSudokuField = (boardString) => {
  const field = [];
  let row = [];
  for (let i = 0; i < boardString.length; i += 1) {
    row.push(boardString[i]);
    if (row.length === 9) {
      field.push(row);
      row = [];
    }
  }
  return field;
}

function sumOfField = (array) => {
  return array.reduce((acc, el) => acc + Number(el), 0) === 405 ? true : false;
} 

module.exports = { getEmptyCells, getSudokuField, sumOfField };
