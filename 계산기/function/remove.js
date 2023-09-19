import { totalArray } from "./simple.js";

export function Remove() {
  const deleteArray = totalArray.map((item) => {
    if (typeof item === "object") {
      return item.value;
    } else if (typeof item === "number") {
      return String(item);
    }
  });

  totalArray.pop();
  deleteArray.pop();
  outputField.value = deleteArray;
  const delResult = deleteArray.join("");
  outputField.value = delResult;
}

export function Remove1() {
  const deleteArray = totalArray.reduce((acc, cur) => {
    if (typeof cur === "object") {
      return acc + cur.value;
    } else if (typeof cur === "number") {
      return acc + String(acc);
    }
  }, "");
  totalArray.pop();

  const newDeleteArray = deleteArray.slice(0, -1);

  outputField.value = newDeleteArray;
}

const del = document.getElementById("del"); //전역 통일getElement
del.addEventListener("click", Remove);

document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace" || e.key === "Delete") {
    Remove();
  } //index
});
