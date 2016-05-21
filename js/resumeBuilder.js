var work = {
	"jobs" :
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
	"projects" : 
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
	"skills" : ["bandleader", "prankster", "bongoist"],
	"pic" : "/Users/JRD/udacity/frontend-nanodegree-resume/images/me.jpg"
};

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

$("#header").append(HTMLheaderName.replace("%data%", bio.name)); // Name
$("#header").append(HTMLheaderRole.replace("%data%", bio.role)); // Role
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile)); // Contact
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email)); // Contact
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github)); // Contact
$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter)); // Contact
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location)); // Contact
$("#header").append(HTMLbioPic.replace("%data%", bio.pic)); // BioPic
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome)); // Welcome Message

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

for (job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);

	formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	$(".work-entry:last").append(formattedEmployer + formattedTitle);
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].desc));

};





