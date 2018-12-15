// Exporting an object containing all of our models
console.log(1);
module.exports = {
  Article: require("./Article"),
  Note: require("./Note"),
  Saved: require("./Saved")
};
