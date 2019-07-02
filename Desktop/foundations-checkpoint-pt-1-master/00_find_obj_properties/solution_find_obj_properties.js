/* eslint-disable no-unused-vars */
function findObjPropsHasOwn (obj) {
    let ourObj = obj;
    let answer = "";
    for (let key in obj){
      if ((ourObj.hasOwnProperty(key))){
        answer += key.toString() + ", ";
      }
    }
    return answer.slice(0,-2)
  }
  
  function findObjKeys (obj) {
    let ourObj = obj;
    let arr = Object.keys(ourObj);
    let answer = "";
    for (let key in obj){
      for (let i=0; i < arr.length; i++){
         if (arr[i] === key){
           answer += key.toString() + ", ";
         }
       }
    }
    return answer.slice(0,-2)
  }  