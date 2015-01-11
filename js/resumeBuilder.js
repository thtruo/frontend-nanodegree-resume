// $('#main').append(['Thomas Truongchau']);

// var formattedName = HTMLheaderName.replace('%data%', 'Thomas Truongchau');
// var formattedRole = HTMLheaderRole.replace('%data%', 'Web Developer');

// $('#header').append(formattedName);
// $('#header').append(formattedRole);

// $('#main').append(skills);

var bio = {
  'name' : '<h1>Thomas</h1>',
  'role' : '<h2>Program Manager<h2>',
  'contacts' : {
    'email' : '<p>email@email.com</p>',
    'mobile' : '<p>123-456-7890</p>',
    'github' : '<p>thtruo</p>',
    'twitter' : '<p>@ttruongchau</p>',
    'location' : '<p>Seattle</p>'
  },
  'profileUrl' : '<img src="images/fry.jpg" alt="profile picture">',
  'age' : '<p>23</p>',
  'welcomeMessage' : '<p>Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem hic, magnam voluptate quia error at labore culpa eaque dignissimos. Fuga numquam, distinctio nesciunt quia optio, sed iste! Perspiciatis, laudantium, neque!</p>',
  'skills' : [
    'awesomeness, js, product management, data analytics'
  ]
};

var work = {
  'position' : 'Program Manager',
  'employer' : 'Microsoft',
  'yearsWorked' : '2014 - Present',
  'city' : 'Bellevue',
  'State' : 'Washington'
};

$('#header').append(bio.name);
$('#header').append(bio.role);
$('#header').append(bio.contacts.email);
$('#header').append(bio.age);
$('#header').append(bio.welcomeMessage);

$('#header').append('<h3>Skills</h3>');
for (var i = 0; i < bio.skills.length; i++) {
  $('#header').append('<p>' + bio.skills[i] + '</p>');
}

$('#workExperience').append(work['position']);
$('#workExperience').append(work.employer);
$('#workExperience').append(work.yearsWorked);

/*
var education = {
  'name' : 'Princeton University',
  'graduatingYear' : '2014',
  'city' : 'Princeton',
  'state' : 'New Jersey'
};

$('#education').append(education.name);
$('#education').append(education.graduatingYear);
$('#education').append(education.city);
$('#education').append(education.state);
*/

var education = {
  'schools' : [
    {
      'name' : 'Princeton University',
      'major' : 'Computer Science',
      'minor' : '',
      'graduatingYear' : '2014',
      'location' : 'Princeton, NJ'
    },
    {
      'school' : 'Udacity',
      'major' : 'Front-End Web Developer Nanodegree',
      'minor' : '',
      'graduatingYear' : '2015',
      'location' : 'Online'
    }
  ],
  'onlineCourses' : [
    'title' : 'Javascript Syntax',
    'school' : 'Udacity',
    'dates' : '2015',
    'url' : 'http://www.udacity.com/course/ud804'
  ]
};

$('#main').append(bio.profileUrl);
