import { simple } from "./function/simple.js";

window.onload = () => {
  const tdElements = document.querySelectorAll("td");
  const tdElementsArray = Array.from(tdElements);
  tdElementsArray.map((td) => {
    td.addEventListener("click", simple);
  });
};

// import require차이점 쓰는이유X
// Import말고 다른 방법
