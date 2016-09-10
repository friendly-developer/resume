//'use strict';
var work = {},
    projects = {},
    education = {},
    bio = {};

bio = {
    name: 'Varun G',
    role: 'Web Develpoer',
    city: 'Chennai',
    email: 'gvsvarun@gmail.com',
    contacts: {
        'Mobile': "9176192599",
        'Mail': 'gvsvarun@gmail.com',
        'Github': 'gvsvarun',
        'Twitter': '@gvsvarun',
        'Location': 'Chennai'
    },
    welcomemMessage: 'Heyy Hi!',
    skills: ['gaming', 'coding', 'sleeping'],
    bioPic: 'images/bio_pic.jpg'
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
        dates: 2016,
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
        images: []
    }]

};

bio.display = function(bio_obj) {
    var formatted_name = HTMLheaderName.replace('%data%', bio_obj.name);
    var formatted_pic = HTMLbioPic.replace('%data%', bio_obj.bioPic);
    var formatted_role = HTMLheaderRole.replace('%data%', bio_obj.role);
    var formatted_welcomeMsg = HTMLwelcomeMsg.replace('%data%', bio_obj.welcomemMessage);
    for (var contact in bio_obj.contacts) {
        if (bio_obj.contacts[contact] !== undefined) {
            var contact_formatted = HTMLcontactGeneric.replace('%data%', bio_obj.contacts[contact]);
            contact_formatted = contact_formatted.replace('%contact%', contact);
            $('#topContacts').append(contact_formatted);

            $('#footerContacts').append(contact_formatted);
        }
    }
    $('#header').prepend(formatted_role);
    $('#header').prepend(formatted_name);
    $('#header').append(formatted_pic);
    $('#header').append(formatted_welcomeMsg);

    if (bio_obj.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio_obj.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var project = 0, len = projects.projectslength; project < len; project++) {

            if (projects.projects[project] !== undefined) {
                $('#projects').append(HTMLprojectStart);
                var proj_title = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
                var proj_dates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
                var proj_desc = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
                $('.project-entry:last').append(proj_title);
                $('.project-entry:last').append(proj_dates);
                $('.project-entry:last').append(proj_desc);

                if (projects.projects[project].images.length > 0) {
                    for (var i = 0, length = projects.projects[project].images.length; i < len; i++) {
                        var proj_images = HTMLprojectImage.replace('%data%', rojects.projects[project].images[i]);
                        $('.project-entry:last').append(proj_images);
                    }
                }
            }
        }
    }
};

work.display_work = function() {
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

education.display_schools = function(educ_schools_obj) {
    if (educ_schools_obj.length > 0) {
        $('#education').append(HTMLschoolStart);
        for (var school = 0, len = educ_schools_obj.length; school < len; school++) {

            var name = HTMLschoolName.replace('%data%', educ_schools_obj[school].name);
            var location = HTMLschoolLocation.replace('%data%', educ_schools_obj[school].location);
            var degree = HTMLschoolDegree.replace('%data%', educ_schools_obj[school].degree);
            var dates = HTMLschoolDates.replace('%data%', educ_schools_obj[school].dates);


            $('.education-entry:last').append(name);
            $('.education-entry:last').append(location);
            $('.education-entry:last').append(degree);
            $('.education-entry:last').append(dates);

            if (educ_schools_obj[school].majors.length > 0) {
                for (var i = 0, leng = educ_schools_obj[school].majors.length; i < len; i++) {
                    var major = HTMLschoolMajor.replace('%data%', educ_schools_obj[school].majors[i]);
                    $('.education-entry:last').append(major);
                }
            }
        }
    }
};
education.display_onlineCourses = function(educ_onCourses_obj) {
    if (educ_onCourses_obj.length > 0) {
        $('.education-entry:last').append(HTMLonlineClasses);
        for (var school = 0, len = educ_onCourses_obj.length; school < len; school++) {

            var title = HTMLonlineTitle.replace('%data%', educ_onCourses_obj[school].title);
            var school_name = HTMLonlineSchool.replace('%data%', educ_onCourses_obj[school].school);
            var url = HTMLonlineURL.replace('%data%', educ_onCourses_obj[school].url);
            var dates = HTMLonlineDates.replace('%data%', educ_onCourses_obj[school].dates);

           
            $('.education-entry:last').append(title);
            $('.education-entry:last').append(school_name);
            $('.education-entry:last').append(dates);
            $('.education-entry:last').append(url);


        }
    }

};


function locationizer(work_obj) {
    var location_array = [];
    location_array.push(work_obj.jobs.forEach(function(job) {
        return job.location;
    }));
    return location_array;
}

function inName(name) {
    name = name.trim().split(' ');
    return name[0][0].toUpperCase() + name[0].slice(1) + ' ' + name[1].toUpperCase();
}
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

function display() {
    work.display_work();
    projects.display();
    bio.display(bio);
    education.display_schools(education.schools);
    education.display_onlineCourses(education.onlineCourses);
}

display();