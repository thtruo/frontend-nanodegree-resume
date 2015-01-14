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
      'title' : '<a href="http://www.ptour.co">PTour</a>',
      'dates' : 'Spring 2014',
      'description' : 'A virtual campus tour of Princeton University for prospective students. Built with <a href="https://www.meteor.com/">Meteor</a> (v0.8).',
      'images' : ''
    }
  ]
};



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
    'JQuery',
    'Bootstrap',
    'Meteorjs',
    'SQL',
    'Python',
    'Java',
    'C',
    'Product Design',
    'Web Analytics',
    'Data Analytics'
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
    $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
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
