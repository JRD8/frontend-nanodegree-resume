/* $("#main").append("The Great Houdiener"); */

var skills = ["bandleader", "prankster", "bongoist"];

var bio = {
	"name" : "The Great JRD",
	"role" : "Master Magiciano",
	"contact_info" : "800-jrd-ring",
	"picture_URL" : "images/me.jpg",
	"welcome_message" : "aha, you are now entering my lair...",
	"skills" : skills 
};


var work = {};
work.start = "1991";
work.employer = "Funky Claude";
work.position = "Mahavishnu";
work.dates = "1991 - 1998";
work.location = "Timbuktu";
work.desc = "provider of laughs";

var education = {
	"schools" : 
	[
		{
			"name" : "Wash University",
			"degree" : "MBA",
			"grad_date" : "1990",
			"city" : "Sahara Dessert",
			"online" : "Udacity",
			"majors" : ["mining", "card sharping"],
			"minors" : ["livin", "lovin", "just like a bloodhound"]
		},
		{
			"name" : "JH University",
			"degree" : "BS",
			"grad_date" : "1988",
			"city" : "Bamore",
			"online" : "Coursera",
			"majors" : ["econ", "sleeping"],
			"minors" : []
		}
	]
}

// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedContact = HTMLmobile.replace("%data%", bio.contact_info);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#main").append(bio.name); // Name
$("#main").append(bio.role); // Role
$("#main").append(bio.contact_info); // Contact
$("#main").append(bio.welcome_message); // Welcome Message
$("#main").append(bio.picture_URL); // BioPic
$("#main").append(bio.skills); // skills
$("#main").append(education.name);
$("#main").append(work["position"]);

// STARTING ANEW HERE...








