import { simple } from "./function/simple.js";

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  const tdElementsArray = Array.from(tdElements);
  tdElementsArray.map((e) => {
    const name = "허희주";

    e.addEventListener("click", simple(name)); //
  });
};
