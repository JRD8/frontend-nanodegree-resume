/* $("#main").append("The Great Houdiener"); */

var formattedName = HTMLheaderName.replace("%data%","The Great Houdiener");
var formattedRole = HTMLheaderRole.replace("%data%","Grand Presdigitator");

$("#header").append(formattedName); // Name
$("#header").append(formattedRole); // Role


