// //모듈
// const outputField = document.getElementById("outputField");
// document.addEventListener("keypress", simple1);
// (event) => {
//   const key = event.key;
//   if (!isNaN(key) || isOperator(key)) {
//     outputField.value += key;
//   }
//   if (key === "=") {
//     simple(key);
//     //simple1(event);
//   }
// };

// export function simple1(e) {
//   const clickedValue = e.key;
//   console.log(clickedValue);
//   const inputField = document.querySelector(".inputField");
//   const outputField = document.querySelector(".outputField");

//   let type;

//   if (!isNaN(clickedValue)) {
//     type = "number";
//   } else {
//     type = "string";
//   }
//   const totalData = {
//     value: clickedValue,
//     type: type,
//     no: totalArray.length,
//     //no+1
//   };

//   if (clickedValue !== "del") {
//     totalArray.push(totalData);
//   }

//   if (!isNaN(clickedValue)) {
//     numberArray.push(totalData);
//   }
//   console.log(typeof clickedValue);
//   if (
//     isOperator(clickedValue) == true &&
//     one !== "" &&
//     operatorClicked == true
//   ) {
//     currentOperator = clickedValue;
//     outputField.value += clickedValue;
//     operatorClicked = false;
//   } else if (
//     !isNaN(clickedValue) &&
//     currentOperator === "" &&
//     inputField.value == ""
//   ) {
//     one += clickedValue;
//     outputField.value += clickedValue;
//     operatorClicked = true;
//   } else if (!isNaN(clickedValue) && currentOperator !== "" && one !== "") {
//     two += clickedValue;
//     result = calculation1(one, currentOperator, two);
//     two = "";
//     one = result;
//     operatorClicked = true;
//     outputField.value += clickedValue;

//     if (inputField.value !== "" && isOperator(clickedValue)) {
//       outputField.value += clickedValue;
//     }
//   } else if (clickedValue === "c") {
//     currentOperator = "";
//     one = "";
//     two = "";
//     inputField.value = "";
//     outputField.value = "";
//     operatorClicked = true;
//     totalArray.length = 0;

//     calculateArray.length = 0;
//   } else if (
//     clickedValue === "=" &&
//     !isNaN(totalArray[totalArray.length - 2].value)
//   ) {
//     inputField.value = result;
//     outputField.value = "";
//     operatorClicked = true;

//     if (includePriority(totalArray) !== -1 && numberArray.length > 2) {
//       const operatorIndex = includePriority(totalArray);
//       if (operatorIndex >= 0) {
//         const prevNumberIndex = totalArray[operatorIndex].no - 1;
//         const nextNumberIndex = totalArray[operatorIndex].no + 1;
//         const prevNumber = totalArray[prevNumberIndex].value;
//         const nextNumber = totalArray[nextNumberIndex].value;
//         calculateArray.push(
//           prevNumber,
//           totalArray[operatorIndex].value,
//           nextNumber
//         );

//         const result = calculation1(
//           prevNumber,
//           totalArray[operatorIndex].value,
//           nextNumber
//         );

//         totalArray.splice(
//           includePriority(totalArray) - 1,
//           includePriority(totalArray) + 2,
//           result
//         );

//         const finalArray = totalArray.map((item) => {
//           if (typeof item === "object") {
//             return item.value;
//           } else if (typeof item === "number") {
//             return String(item);
//           }
//         });

//         const finalResult = calculation1(
//           finalArray[0],
//           finalArray[1],
//           finalArray[2]
//         );

//         inputField.value = finalResult;
//         // totalArray.length = 0;
//         // numberArray.length = 0;
//         // calculateArray.length = 0;
//       }
//     }
//   }
// }
