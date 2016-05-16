/* $("#main").append("The Great Houdiener"); */

// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedContact = HTMLmobile.replace("%data%", bio.contact_info);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);

// $("#main").append(bio.name); // Name
// $("#main").append(bio.role); // Role
// $("#main").append(bio.contact_info); // Contact
// $("#main").append(bio.welcome_message); // Welcome Message
// $("#main").append(bio.picture_URL); // BioPic
// $("#main").append(bio.skills); // skills
// $("#main").append(education.name);
// $("#main").append(work["position"]);

// STARTING ANEW HERE...

var work = {
	"job" :
	[
		{
			"employer" : "The Royal Mounties",
			"title" : "CEO",
			"location" : "Galaxy Far Far Away",
			"dates" : "1978 - 1965",
			"desc" : "did alot of hard work"
		},
		{
			"employer" : "Ripley's",
			"title" : "Archivist",
			"location" : "Orlando",
			"dates" : "200 BC - 1965",
			"desc" : "saw amazing stuff"
		}
	] 
};

var projects = {
	"project" : 
	[
		{
			"title" : "pyramid excavation",
			"dates" : "1999 - present",
			"desc" : "alot of sweating",
			"image" : "images/me.jpg"
		},
		{
			"title" : "magic convention",
			"dates" : "2050 - present",
			"desc" : "alot of trickery",
			"image" : "images/me2.png"
		},
		{
			"title" : "airline convention",
			"dates" : "2040 - 2050",
			"desc" : "alot of flying",
			"image" : "images/fry.jpg"
		}
	]
};

var bio = {
	"name" : "The Great JRD",
	"role" : "Master Magiciano",
	"welcome" : "aha, you are now entering my lair...",
	"contacts" : 
	{
		"mobile" : "800-jrd-ring",
		"email" : "abd@abada.com",
		"github" : "jafa9",
		"twitter" : "@funny",
		"location" : "NYC"
	},
	"skills" : ["bandleader", "prankster", "bongoist"]
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

var education = {
	"schools" : 
	[
		{
			"name" : "Wash University",
			"location" : "Sahara Dessert",
			"degree" : "MBA",
			"majors" : ["mining", "card sharping"],
			"dates" : "1990 - 1992",
			"url" : "www.coyote.com"
		},
		{
			"name" : "JH University",
			"location" : "Bamore",
			"degree" : "BS",
			"majors" : ["econ", "sleeping"],
			"dates" : "1988 - 2000",
			"url" : "www.laughing.com"
		}
	],

	"onlineCourses" :
	[
		{
			"title" : "Advanced Learning",
			"school" : "Udacity",
			"dates" : "5787 - 5600 BC",
			"url" : "www.udacity.com"
		},
		{
			"title" : "Advanced Running",
			"school" : "Coursera",
			"dates" : "1967 - 2010",
			"url" : "www.coursera.com"
		}
	]
};


// Lesson 2 quiz 1
if (bio.skills.length > 0)
{

  	$("#header").append(HTMLskillsStart);

  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  	$("#skills").append(formattedSkill);
  	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  	$("#skills").append(formattedSkill);
  	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  	$("#skills").append(formattedSkill);

};

// lesson 2 quiz 2
for (job in work.job)
{
	$("#header").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

	$("#header").append(HTMLskillsStart);

};










