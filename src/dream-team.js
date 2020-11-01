const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 if (Array.isArray(members)) {
   let newArray = members.map(function (e) {
     if(typeof(e) == "string"){
     return e.trim().substr(0,1).toUpperCase();}
   });

   return newArray.sort().join("");

 }
 else {
   return false;
  }
};
