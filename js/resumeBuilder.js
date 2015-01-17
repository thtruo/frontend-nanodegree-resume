// $('#main').append(internationalizeButton);

function inName(firstName, lastName) {
  var modifiedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  var modifiedLastName = lastName.toUpperCase();
  return modifiedFirstName + ' ' + modifiedLastName;
}

console.log(inName('Thomas', 'Truongchau') === 'Thomas TRUONGCHAU');



/************************ EMPLOYMENT ************************/
var work = {
  'jobs' : [
    {
      'employer' : 'Microsoft',
      'title' : 'Program Manager',
      'location' : 'Bellevue, WA',
      'dates' : 'September 2014 - Present',
      'description' : 'Analysis & Experimentation Team. Create better features for the ExP Platform to enable all Microsoft teams to run trustworthy experimentation. Work across teams to evangelize a data-driven culture at Microsoft. Currently partnering with MSN teams to improve their experimentation capabilities and to run more experiments using our platform. Actively heading a team of data scientists, developers, and partner PMs to enable experimentation for the Spartan Default Homepage.',
      'keywords' : [
        'experimentation',
        'ab testing',
        'flighting',
        'data science',
        'data analytics',
        'product management',
        'design',
        'SQL',
        'excel',
        'html',
        'css',
        'javascript'
      ]
    },
    {
      'employer' : 'Microsoft',
      'title' : 'Program Manager Intern',
      'location' : 'Bellevue, WA',
      'dates' : 'June 2013 - Aug 2013',
      'description' : 'Online Experimentation team. Designed, spec\'d, and implemented an experimentation management dashboard for experimenters. Dashboard feature improved users\' efficiency in accessing all running, completed, and new experiments.',
      'keywords' : [
        'internship',
        'experimentation',
        'online experimentation',
        'ab testing',
        'flighting',
        'data science',
        'data analytics',
        'product management',
        'design',
        'SQL',
        'excel',
        'html',
        'css',
        'javascript'
      ]
    }
  ]
};

function displayWork() {
  for (var job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job]['employer']);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job]['title']);

    var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job]['dates']);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job]['location']);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job]['description']);

    $('.work-entry:last').append(formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
  }
}

displayWork();



/************************ PROJECTS ************************/
var projects = {
  'projects' : [
    {
      'title' : 'www.ptour.co',
      'dates' : 'Spring 2014',
      'description' : 'A virtual campus tour of Princeton University for prospective students. Built with Meteor.',
      'images' : ''
    },
    {
      'title' : 'DinkyLink',
      'dates' : 'Fall 2014',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magnam illo asperiores cumque ipsam officia, illum sint quasi nihil qui repellat tempore eligendi eius, error? Perspiciatis nostrum autem, optio recusandae.',
      'images' : ''
    },
    {
      'title' : 'NavBelt',
      'dates' : 'Spring 2013',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magnam illo asperiores cumque ipsam officia, illum sint quasi nihil qui repellat tempore eligendi eius, error? Perspiciatis nostrum autem, optio recusandae.',
      'images' : ''
    }
  ]
};

projects.display = function() {
  if (projects.projects.length > 0) {
    for (var p in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[p].title));
      $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[p].dates));
      $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[p].description));
      $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[p].images));
    }
  }
}

projects.display();


/************************ BIO ************************/
var bio = {
  'name' : 'Thomas Truongchau',
  'role' : 'Program Manager',
  'welcomeMessage' : 'Hi there!',
  'contacts' : {
    'email' : 'ttruongchau at gmail dot com',
    'github' : 'thtruo',
    'twitter' : '@ttruongchau',
    'location' : 'Seattle, WA',
  },
  'skills' : [
    'HTML',
    'CSS',
    'Javascript',
    'Meteorjs',
    'Bootstrap',
    'SQL',
    'Python',
    'Java',
    //'C',
    'Product Design'
  ]
};

var formattedHeader = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').append(formattedHeader + formattedRole);

var formattedBioPic = HTMLbioPic.replace('%data%', 'images/me.png');
$('#header').append(formattedBioPic);

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    $('#header').append(HTMLskills.replace('%data%', bio.skills[i]));
  }
}

if (Object.keys(bio.contacts).length > 0) {
  for (var c in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace('%contact%', c);
    var formattedContactData = formattedContact.replace('%data%', bio.contacts[c]);
    $('#topContacts').append(formattedContactData);
  }
}



/************************ EDUCATION ************************/
var education = {
  'schools' : [
    {
      'name' : 'Princeton University',
      'location' : 'Princeton, NJ',
      'degree' : 'B.S.E',
      'majors' : ['Computer Science'],
      'dates' : '2010 - 2014',
      'url' : 'http://www.cs.princeton.edu/'
    }
  ],
  'onlineCourses' : [
    {
      'title' : 'Javascript Basics',
      'school' : 'Udacity',
      'dates' : 'January 2015 - Present',
      'url' : 'http://www.udacity.com/course/ud804'
    }
  ]
};

$('#mapDiv').append(googleMap);