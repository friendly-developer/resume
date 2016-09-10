//'use strict';
var work = {},
    projects = {},
    education = {},
    bio = {};

bio = {
    name: 'Varun G',
    role: 'Web Develpoer',
    email: 'gvsvarun@gmail.com',
    contacts: {
        'mobile': "9176192599",
        'email': 'gvsvarun@gmail.com',
        'github': 'gvsvarun',
        'twitter': '@gvsvarun',
        'location': 'Chennai'
    },
    welcomeMessage: 'Heyy Hi!',
    skills: ['gaming', 'coding', 'sleeping'],
    biopic: 'images/bio_pic.jpg'
};

education = {
    schools: [{
        name: 'GITAM University',
        location: 'Visakhapatnam, India',
        degree: 'Bachelors',
        majors: ['Bio-Technology'],
        dates: '2009 - 2013',
        url: 'https://www.gitam.edu'
    }],
    onlineCourses: [{
        title: 'IPND',
        school: 'Udacity',
        dates: 'July 2016 - September 2016',
        url: 'https://www.udacity.com'
    }]
};

work = {
    jobs: [{
        employer: 'Tata Consultancy Services',
        title: 'Systems Engineer',
        dates: 'September 2013 - Current',
        description: 'Front End Develpoer',
        location: 'Chennai, India'
    }]
};

projects = {
    projects: [{
        title: 'Sample Project 1',
        dates: '2016',
        description: 'Lorem Ipsum',
        images: ['images/fry.jpg']
    }]

};

bio.display = function() {
    var formatted_name = HTMLheaderName.replace('%data%', bio.name);
    var formatted_pic = HTMLbioPic.replace('%data%', bio.biopic);
    var formatted_role = HTMLheaderRole.replace('%data%', bio.role);
    var formatted_welcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    for (var contact in bio.contacts) {
        if (bio.contacts[contact] !== undefined) {
            var contact_formatted = HTMLcontactGeneric.replace('%data%', bio.contacts[contact]);
            contact_formatted = contact_formatted.replace('%contact%', contact);
            $('#topContacts').append(contact_formatted);

            $('#footerContacts').append(contact_formatted);
        }
    }
    $('#header').prepend(formatted_role);
    $('#header').prepend(formatted_name);
    $('#header').append(formatted_pic);
    $('#header').append(formatted_welcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var project = 0, len = projects.projects.length; project < len; project++) {

            if (projects.projects[project] !== undefined) {
                $('#projects').append(HTMLprojectStart);
                var proj_title = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
                var proj_dates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
                var proj_desc = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
                $('.project-entry:last').append(proj_title);
                $('.project-entry:last').append(proj_dates);
                $('.project-entry:last').append(proj_desc);

                if (projects.projects[project].images.length > 0) {
                    for (var i = 0, length = projects.projects[project].images.length; i < length; i++) {
                        var proj_images = HTMLprojectImage.replace('%data%', projects.projects[project].images[i]);
                        $('.project-entry:last').append(proj_images);
                    }
                }
            }
        }
    }
};

work.display = function() {
    if (work.jobs.length > 0) {
        $('#workExperience').append(HTMLworkStart);
        for (var job = 0, len = work.jobs.length; job < len; job++) {

            if (work.jobs[job] !== undefined) {


                var employer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
                var work_title = HTMLworkTitle.replace('%data%', work.jobs[job].title);
                var work_dates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
                var work_locat = HTMLworkLocation.replace('%data%', work.jobs[job].location);
                var work_desc = HTMLworkDescription.replace('%data%', work.jobs[job].description);
                var employer_title = employer + work_title;


                $('.work-entry:last').append(employer_title);
                $('.work-entry:last').append(work_dates);
                $('.work-entry:last').append(work_locat);
                $('.work-entry:last').append(work_desc);
            }
        }
    }
};

education.display = function() {
    if (education.schools.length > 0) {
        $('#education').append(HTMLschoolStart);
        for (var school = 0, len = education.schools.length; school < len; school++) {

            var name = HTMLschoolName.replace('%data%', education.schools[school].name);
            var location = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            var degree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            var dates = HTMLschoolDates.replace('%data%', education.schools[school].dates);


            $('.education-entry:last').append(name);
            $('.education-entry:last').append(location);
            $('.education-entry:last').append(degree);
            $('.education-entry:last').append(dates);

            if (education.schools[school].majors.length > 0) {
                for (var i = 0, leng = education.schools[school].majors.length; i < leng; i++) {
                    var major = HTMLschoolMajor.replace('%data%', education.schools[school].majors[i]);
                    $('.education-entry:last').append(major);
                }
            }
        }
    }

    if (education.onlineCourses.length > 0) {
        $('#education').append(HTMLonlineClasses);
        for (var onlineCourse = 0, length = education.onlineCourses.length; onlineCourse < length; onlineCourse++) {

            var title = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
            var school_name = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
            var url = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
            url = url.replace('#', education.onlineCourses[onlineCourse].url);
            var courseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);


            $('.education-entry:last').append(title);
            $('.education-entry:last').append(school_name);
            $('.education-entry:last').append(courseDates);
            $('.education-entry:last').append(url);
        }
    }
};

function inName(name) {
    name = name.trim().split(' ');
    return name[0][0].toUpperCase() + name[0].slice(1) + ' ' + name[1].toUpperCase();
}
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);


work.display();
projects.display();
bio.display();
education.display();