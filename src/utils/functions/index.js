export const calcAge = (dob) => {
    const diff = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

export const get_initials = (first, last) => {
var s = "";
if (first) {
    s += first.split("")[0];
}
if (last) {
    s += last.split("")[0];
}
return s.toUpperCase();
};
  