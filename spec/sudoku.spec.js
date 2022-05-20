const sudoku = require('../sudoku.js');
const { getEmptyCells } = require('../cells');

describe('Проверка поиска пустых ячеек', () => {
  it('Проверяет получение массива координат пустых ячеек', () => {
    // 1-58-2---
    // -9--764-5
    // 2--4--819
    // -19--73-6
    // 762-83-9-
    // ----61-5-
    // --76---3-
    // 43--2-5-1
    // 6--3-89--

    const puzzle = [
      ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
      ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
      ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
      ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
      ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
      ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
      ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
      ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
      ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
    ];

    const arrAnser = [
      [0, 1], [0, 4], [0, 6], [0, 7], [0, 8],
      [1, 0], [1, 2], [1, 3], [1, 7],
      [2, 1], [2, 2], [2, 4], [2, 5],
      [3, 0], [3, 3], [3, 4], [3, 7],
      [4, 3], [4, 6], [4, 8],
      [5, 0], [5, 1], [5, 2], [5, 3], [5, 6], [5, 8],
      [6, 0], [6, 1], [6, 4], [6, 5], [6, 6], [6, 8],
      [7, 2], [7, 3], [7, 5], [7, 7],
      [8, 1], [8, 2], [8, 4], [8, 7], [8, 8],
    ];

    expect(getEmptyCells(puzzle)).toEqual(arrAnser);
  });
});
