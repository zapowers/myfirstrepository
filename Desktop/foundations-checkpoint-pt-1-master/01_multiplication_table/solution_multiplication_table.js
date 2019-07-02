/* eslint-disable no-unused-vars */
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