const campusInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ${campusInfo.userName}, you are in ${campusInfo.campusName} !`,
    e : "oO",
    T : "U "
}));

// or cowsay.think()