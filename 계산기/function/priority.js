export function includePriority(arr) {
  const index = arr.findIndex(
    (item) => item === "×" || item === "÷" || item === "*" || item === "/"
  );
  return index;
}
//()->오브젯트 {}return!
