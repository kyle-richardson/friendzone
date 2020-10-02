export const get_initials = (first, last) => {
  var s = "";
  if (first) {
    s += first.split("")[0];
  }
  if (last) {
    s += last.split("")[0];
  }
  return s;
};
