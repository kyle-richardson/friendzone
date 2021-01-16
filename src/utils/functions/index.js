let getAddress = require("extract-country-state-city-from-zip")

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

export const getCityState = (postalCode) => {
    let state = ""
    let city = ""
    let country = ""
    let raw = getAddress(postalCode, 'AIzaSyDqZ5w4dZlSKCEnARbMsSQH353P8KAHi54', (err, res) => console.log(err, res))
    console.log(raw)
    state = raw.state.short
    city = raw.city
    country = raw.country.short
    return `${city}, ${state}`
}