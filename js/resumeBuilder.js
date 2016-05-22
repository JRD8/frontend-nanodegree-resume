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

work.display = function() 
{
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
};


var projects = {
	"projects" : 
	[
		{
			"title" : "pyramid excavation",
			"dates" : "1999 - present",
			"desc" : "alot of sweating",
			"image" : "images/fry.jpg"
		},
		{
			"title" : "magic convention",
			"dates" : "2050 - present",
			"desc" : "alot of trickery",
			"image" : "images/fry.jpg"
		},
		{
			"title" : "airline convention",
			"dates" : "2040 - 2050",
			"desc" : "alot of flying",
			"image" : "images/fry.jpg"
		}
	]
};

projects.display = function()
{
	for (project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title)); // Title
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates)); // Dates
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].desc)); // Description
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].image)); // Image		
	}
};

var bio = {
	"name" : "Lon Donson",
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

bio.display = function()
{
	$("#header").append(HTMLheaderName.replace("%data%", bio.name)); // Name
	$("#header").append(HTMLheaderRole.replace("%data%", bio.role)); // Role

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile)); // Contact
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email)); // Contact
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github)); // Contact
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter)); // Contact
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location)); // Contact

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
}

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

function inName()
{
	var temp = bio.name.split(" ");
	var first = temp[0];
	var last = temp[1];

	first = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
	last = last.toUpperCase();

	return first + " " + last;
};

bio.display();
work.display();
projects.display();

$("#main").append(internationalizeButton); // Add Internationalize Button
$("#mapDiv").append(googleMap); // Add Google Map




