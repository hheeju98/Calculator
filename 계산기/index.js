import { simple } from "./function/simple.js";

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  const tdElementsArray = Array.from(tdElements);
  tdElementsArray.map((e) => {
    e.addEventListener("click", () => simple(name)); //
  });
};
const name = "허희주";
