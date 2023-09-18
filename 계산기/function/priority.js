export function includePriority(arr) {
  const index = arr.findIndex(
    (item) =>
      item.value === "×" ||
      item.value === "÷" ||
      item.value === "*" ||
      item.value === "/"
  );
  return index;
}
//()->오브젯트 {}return!
