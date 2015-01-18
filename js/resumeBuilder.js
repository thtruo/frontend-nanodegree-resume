// $('#main').append(internationalizeButton);

// function inName(firstName, lastName) {
//   var modifiedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   var modifiedLastName = lastName.toUpperCase();
//   return modifiedFirstName + ' ' + modifiedLastName;
// }

$('#mapDiv').append(googleMap);

/************************ EMPLOYMENT ************************/
var work = {
  'jobs' : [
    {
      'employer' : 'Microsoft',
      'title' : 'Program Manager',
      'location' : 'Bellevue, WA',
      'dates' : 'September 2014 - Present',
      'url' : 'http://www.microsoft.com',
      'description' : 'Analysis & Experimentation Team. Work across organizations to evangelize a data-driven culture at Microsoft and design features for the <em>ExP Platform</em> to enable all Microsoft teams to run trustworthy experimentation. Partner with MSN teams to improve their experimentation capabilities and to run more experiments. Head team of data scientists, developers, and partner PMs to enable experimentation for the Spartan Default Homepage for Windows 10 in April 2015.',
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
      'url' : 'http://www.microsoft.com',
      'description' : 'Bing Online Experimentation Team. Researched customer needs, designed, spec\'d, and implemented an experimentation management dashboard for Bing experimenters. Led team efforst for developing and launching alpha version. Dashboard improved usability - enhancing efficiency in accessing all running, new, and completed experiments - by reducing time to success by 67% for user.',
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
    },
    {
      'employer' : 'Sanborn Media Factory',
      'title' : 'Front-End Developer Intern',
      'location' : 'New York, NY',
      'dates' : 'June 2012 - Aug 2012',
      'description' : 'Designed and implemented user interfaces for clients: DKNY, Vogue, Cosmo, Loft, and Conde Nast.',
      'keywords' : [
        'html',
        'css',
        'user interface',
        'mockup'
      ]
    },
    {
      'employer' : 'Princeton University',
      'title' : 'Computer Science Peer Tutor',
      'location' : 'Princeton, NJ',
      'dates' : 'September 2012 - May 2014',
      'description' : 'Provide guidance and encouragement to students taking introductory computer science on campus.',
      'keywords' : [
        'teaching',
        'java',
        'programming',
        'algorithms',
        'data structures'
      ]
    }
  ]
};

work.display = function () {
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

work.display();



/************************ PROJECTS ************************/
var projects = {
  'projects' : [
    {
      'title' : 'www.ptour.co',
      'dates' : 'Spring 2014',
      'description' : 'A virtual campus tour of Princeton University for prospective students. Built with Meteor.',
      'images' : 'images/ptour_thumbnail.png',
      'url' : 'http://www.ptour.co'
    },
    {
      'title' : 'DinkyLink',
      'dates' : 'Fall 2014',
      'description' : 'Cleanly designed mobile web app that provides the soonest train times leaving from Princeton to New York City, and vice versa. Built with Python and Google App Engine.',
      'images' : 'images/dinkylinkhome_thumbnail.png',
      'url' : 'http://princetondinkylink.appspot.com/'
    },
    {
      'title' : 'NavBelt',
      'dates' : 'Spring 2013',
      'description' : 'Smartphone-and-belt coupled system that helps wearers navigate to unfamiliar destinations. System uses buzzers and an Arduino microcontroller. Built with Processing and Java.',
      'images' : 'images/navbelt_thumbnail.jpg',
      'url' : 'https://blogs.princeton.edu/humancomputerinterface/2013/05/13/final-blog-post-group-11/',
      'video' : 'https://www.youtube.com/watch?v=dc86q3wBKvI&feature=youtu.be'
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
  'role' : 'Program Manager @Microsoft',
  'welcomeMessage' : 'Hi there! I\'m a recent college grad, currently working at Microsoft, and love creating products. See below for more details.',
  'contacts' : {
    'email' : 'ttruongchau at gmail dot com',
    'github' : 'thtruo',
    'twitter' : '@ttruongchau',
    'location' : 'Seattle, WA',
  },
  'skills' : [
    'Product Management',
    'HTML',
    'CSS',
    'Javascript',
    'Meteorjs',
    'Bootstrap',
    'SQL',
    'Python',
    'Java',
    'C',
  ]
};

// Helper function displays only contact information
bio.displayContacts = function(HTMLlocation) {
  if (Object.keys(bio.contacts).length > 0) {
    for (var c in bio.contacts) {
      var formattedContact     = HTMLcontactGeneric.replace('%contact%', c);
      var formattedContactData =
        formattedContact.replace('%data%', bio.contacts[c]);
      $(HTMLlocation).append(formattedContactData);
    }
  }
}

bio.display = function() {
  var formattedHeader = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole   = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').append(formattedHeader + formattedRole);

  // if (Object.keys(bio.contacts).length > 0) {
  //   for (var c in bio.contacts) {
  //     var formattedContact     = HTMLcontactGeneric.replace('%contact%', c);
  //     var formattedContactData =
  //       formattedContact.replace('%data%', bio.contacts[c]);
  //     $('#topContacts').append(formattedContactData);
  //   }
  // }
  bio.displayContacts('#topContacts');

  $('#header').append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));

  var formattedBioPic = HTMLbioPic.replace('%data%', 'images/mejump.jpg');
  $('#header').append(formattedBioPic);

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
  }
}

bio.display();


/************************ EDUCATION ************************/
var education = {
  'schools' : [
    {
      'name' : 'Princeton University',
      'location' : 'Princeton, NJ',
      'degree' : 'BSE',
      'majors' : ['Computer Science'],
      'dates' : '2010 - 2014',
      'url' : 'http://www.cs.princeton.edu/',
      'courses' : [
        'Human-Computer Interface',
        'Algorithms & Data Structures',
        'Programming Systems',
        'Artificial Intelligence',
        'Information Security',
        'Operating Systems',
        'E-Commerce',
        'Advanced Programming Techniques',
        'Innovating Across Technology, Business, & Markets',
        'Reasoning About Computation'
      ]
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


education.display = function() {
  $('#education').append(HTMLschoolStart);

  for (var school in education.schools) {
    var formattedSchoolName =
      HTMLschoolName.replace('%data%', education.schools[school].name);
    formattedSchoolName =
      formattedSchoolName.replace('#', education.schools[school].url);
    var formattedSchoolDegree =
      HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedSchoolDates =
      HTMLschoolDates.replace('%data%', education.schools[school].dates);
    var formattedSchoolLocation =
      HTMLschoolLocation.replace('%data%', education.schools[school].location);
    var formattedSchoolMajor =
      HTMLschoolMajor.replace('%data%', education.schools[school].majors);
    $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
    $('.education-entry:last').append(formattedSchoolDates);
    $('.education-entry:last').append(formattedSchoolLocation);
    $('.education-entry:last').append(formattedSchoolMajor);
  }

  $('.education-entry:last').append(HTMLonlineClasses);
  for (var i in education.onlineCourses) {
    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
    formattedOnlineTitle = formattedOnlineTitle.replace('#', education.onlineCourses[i].url);
    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
    var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
    var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
    formattedOnlineURL = formattedOnlineURL.replace('#', education.onlineCourses[i].url);
    $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
    $('.education-entry:last').append(formattedOnlineDates);
    $('.education-entry:last').append(formattedOnlineURL);

  }
}
education.display();


/******************* Let's Connect **********************/
bio.displayContacts('#footerContacts');
var footerDate = '&copy; ' + new Date().getFullYear();
var formattedFooterTimeStamp = HTMLfooterTimeStamp.replace('%data%', footerDate);
$('#letsConnect').append(formattedFooterTimeStamp);