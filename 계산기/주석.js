// totalArray[
//   (numberArray[operatorIndex].no,
//   numberArray[operatorIndex].no - 1,
//   numberArray[operatorIndex].no + 1)
// ] = result;

// function includePriority(arr) {

//   for (const item of arr) {
//     const index = arr.findIndex(
//       (item) => item.value === "×" || item.value === "÷"
//     );
//     return index;
//   }
// }
// function includePriority(arr) {
//   for (const item of arr) {
//     if (item.value === "×" || item.value === "÷") {
//       return item.index; // 배열에 곱하기 또는 나누기 연산이 포함되어 있으면 true를 반환합니다.
//     }
//   }
// }

// function includePriority() {
//   if (inputArray.some(isPriority) == true) {
//     console.log(true);
//   }
// }

// = 누를시 배열에 객체를 담아서 연산자 찾고 우선순위 (조건문) 그것의 앞의 숫자 계산[{타입, value, no}]
// 조검문(우선 순위 재지정)->return박거나 오브젝트 다시 sort 배열에 map배열에 객체 넣는법 계싼식 -> 연산자를 함수("+")[더하기,나누기,곱하기,빼기] 배열에서 => if("더하기"){
// value.value + value.value
//}if("나누기"){
// value.value / value.value
//}
// 필터로 맨 마지막인 애만 날릴 마지막이 연산자일 경우
//마지막이 숫자여야함
//새 객체 배열에 넣는법
// 함수 배열 추가삭제
//데이터 객체로 받아와요 객체추가 배열 오브젝트 만드는법
//(){}의 차이!

//import없을 경우 어디서 쓰는 변수인지 알기
//계산기 형식 변경 진짜 계산기 처럼-> 제출

// 데이터를 객체로 받기 value에서 연산자만 모아서 저장 연산자 우선순위 지정 배열 변경 이후 순수대로 계싼
// 값으 누를 때 마다 객체에 값이 각각 들어와야 할듯
//split함수 써서 계산해야 할듯?
// ()를 사용해서 우선 순위 명시적으로 지정
// (같은 no의 숫자 연산자 no no+1의 숫자 제일 앞으로 보내기)

// index of 더하기 나누기의 index받아와서 그 값을 배열의 2번째로 같은 no의 숫자를 제일 처음 인덱스로 no+1 을 두번째 인덱스로

// calculateArray의 값을 계산해서 결과 값을 totalArray의 해당 식 대신에(곱하기나 나누기의 양옆값) 넣어주고 나머지 계산

// const finalArray = totalArray.map((item) => {
//   if (typeof item === "object") {
//     return item.value;
//     if (!isNaN(item.value)) {
//       return parseInt(value);
//     }
//   } else if (typeof item === "number") {
//     return item;
//   }
// });

// 주어진 코드에서 calculation1 함수가 값을 반환하지 않고 arr.reduce 메서드 내에서 연산을 수행한 후에 결과를 반환하지 않기 때문에 계산 결과가 제대로 반환되지 않습니다. arr.reduce 메서드는 누적 값을 반환해야 합니다.
// import require차이점 쓰는이유X
// Import말고 다른 방법

// join() 메서드는 배열의 요소를 결합한 문자열을 반환하는 것이며, 원래 배열을 변경하지 않습니다. 따라서 join() 메서드를 호출한 후에는 그 결과를 변수에 저장해야 원하는 문자열 값을 얻을 수 있습니다.

// key 이벤트 제대로 나오도록
// 18일까지
// simple함수 모듈화 해서 키이벤트 함수에서 가져와서 쓰도록
// =을 눌렀을때만 동작하도록 해서 delete제대로 작동하도록
