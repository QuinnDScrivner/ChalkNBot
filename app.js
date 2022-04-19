const chalkAnimation = require("chalk-animation");

// chalkAnimation.rainbow("Lorem ipsum dolor sit amet");

let str = "loading...";
const rainbow = chalkAnimation.rainbow(str);

//add a new dot every second 
setInterval(() => {
    rainbow.replace(str += '.')
}, 1000);
