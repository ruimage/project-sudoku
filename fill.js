function getArrAbleColumnElements(arrField, ai, aj) {
  const newArr = [];
  const etalonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const columnArr = [];
  for (i = 0; i < arrField.length; i++) {
    const elem = arrField[i][aj];

    if (elem !== '-') {
      columnArr.push(Number(elem));
    }
  }

  etalonArr.forEach((v) => {
    if (columnArr.indexOf(v) == -1) {
      newArr.push(v);
    }
  });

  return newArr.sort((a, b) => a - b);
}

module.exports = { getArrAbleColumnElements };
