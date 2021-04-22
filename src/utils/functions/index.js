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

//Todo : if calendar information from backend is structured with repeating days, 
//may need to use this function to find the next available time.
export const findNextSlot = (calendar) => {
    if(calendar === null) {
        return "No Slots"
    }
    return calendar
}

// dayOfWeek 0 = Sunday, 7= Saturday
function nextDayAndTime(dayOfWeek, hour, minute) {
    var now = new Date()
    var result = new Date(
                   now.getFullYear(),
                   now.getMonth(),
                   now.getDate() + (7 + dayOfWeek - now.getDay()) % 7,
                   hour,
                   minute)
  
    if (result < now)
      result.setDate(result.getDate() + 7)
    
    return result
  }