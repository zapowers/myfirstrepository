/* eslint-env jasmine */
/* eslint-disable no-undef */

function multiplicationTable (row, column) {
  let answer = [];
  for (let i = 1; i <= row; i++) {
    let newAnswer = [];
    for (let j = 1; j <= column; j++){
      let first = i;
      let second = j;
      let sum = (first * second);
      newAnswer.push(sum);
    }
    answer.push(newAnswer);
  }
  return answer;
}

describe('MultiplicationTable', () => {
  it('returns an array', () => {
    const table = multiplicationTable(5, 10);

    expect(Array.isArray(table)).toBe(true);
  });

  it('the first argument represents the total amount of rows in the table', () => {
    const smallTable = multiplicationTable(3, 1);
    const mediumTable = multiplicationTable(50, 1);
    const largeTable = multiplicationTable(100, 1);

    expect(smallTable.length).toBe(3);
    expect(mediumTable.length).toBe(50);
    expect(largeTable.length).toBe(100);
  });

  it('every row is an array', () => {
    const table = multiplicationTable(50, 1);

    let everyRowIsAnArray = true;
    for (let row = 0; row < table.length; row++) {
      if (Array.isArray(table[row]) === false) {
        everyRowIsAnArray = false;
        break; // note: the break keyword stops the execution of the loop
      }
    }
    expect(everyRowIsAnArray).toBe(true);
  });

  it('the second argument is the amount of "columns" in every row', () => {
    const rows = 3;
    const columns = 2;
    const table = multiplicationTable(rows, columns);
    let twoColumnsInEachRow = true;

    for (let row = 0; row < table.length; row++) {
      if (table[row].length !== columns) {
        twoColumnsInEachRow = false;
        break;
      }
    }

    expect(twoColumnsInEachRow).toBe(true);
  });

  it('in a 1x3 grid (rows X columns ), the column values start at 1 and increment by 1', () => {
    const table = multiplicationTable(1, 3);

    expect(table).toEqual([[1, 2, 3]]);
  });

  it('in a 2x3 grid ( rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
    const rows = 2;
    const columns = 3;
    const table = multiplicationTable(rows, columns);

    expect(table).toEqual([[1, 2, 3], [2, 4, 6]]);
  });

  it('in a 4x8 grid (rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
    const rows = 4;
    const columns = 8;

    const table = multiplicationTable(rows, columns);

    expect(table).toEqual([
      [1, 2, 3, 4, 5, 6, 7, 8],
      [2, 4, 6, 8, 10, 12, 14, 16],
      [3, 6, 9, 12, 15, 18, 21, 24],
      [4, 8, 12, 16, 20, 24, 28, 32],
    ]);
  });

  it('in a 0x0 grid (rows X columns), an empty array is returned', () => {
    const table = multiplicationTable(0, 0);
    expect(table).toEqual([]);
  });
});
