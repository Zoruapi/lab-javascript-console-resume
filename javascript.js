var myName = 'Alejandra Morales';
var myCareer = 'Front End Developer';
var myDescription = 'I like computers and games';
var myInterests = [];
var myExperience = [];
var mySkills = [];

/* Adding my interests*/
addInterest(myInterests, 'Play videogames');
addInterest(myInterests, 'Watch documentarys about nature');
addInterest(myInterests, 'Roleplay');
addInterest(myInterests, 'Watch different types of movies and animes');

/* Adding my experience */
addExperience(myExperience, 'their houses', 'Math and Chemistry tutor', 'Particular tutor on those areas');
addExperience(myExperience, 'Telepizza', 'Delivery person', 'Delivered the pizzas to the customers');
addExperience(myExperience, 'Bar on my neighborhood', 'Waitress', 'I attended the customers of the bar');

/* Adding my skills */
addSkills(mySkills, 'Spanish', false);
addSkills(mySkills, 'Pottery', true);
addSkills(mySkills, 'Painting', true);
addSkills(mySkills, 'Java', false);
addSkills(mySkills, 'C', false);
addSkills(mySkills, 'Solving Rubiks cubes', true);

/* Output my console resume */
myConsoleResume(myName, myCareer, myDescription, myInterests, myExperience, mySkills);


/* Function that displays my console resume on screen */
function myConsoleResume(name, career, description, interests, experience, skills) {
    var i = 0;
    console.log('Name: ' + name.toUpperCase());
    console.log('Career: ' + career);
    console.log('Description: ' + description);
    console.log('\nMy Interests:');
    for ( i = 0; i < interests.length; i++) {
        console.log('* ' + interests[i]);
    }
    console.log('\nMy Previous Experience:');
    for (i = 0; i < experience.length; i++) {
        displayPostition(experience[i].nCompany, experience[i].job, experience[i].desc);
    }
    console.log('\nMy Skills:');
    for ( i = 0; i < skills.length; i++) {
        displaySkill(skills[i].nSkill, skills[i].isCool);
    }
}

/* Checks if the argument it's a string */
function checkString(a) {
    if (typeof a == 'string') {
        return true;
    } else {
        return false;
    }
}

/* Function that add any new interest to my list of interests */
function addInterest(myInterests, interest) {
    if ( checkString(interest) ) {
        myInterests.push(interest);
    } else {
        console.log('Sorry, the interest cannot be added');
    }
}

/* Function that add any previous experience to my list */
function addExperience(myExperience, company, jobTittle, description) {
    if ( checkString(company) && checkString(jobTittle) && checkString(description)) {
        myExperience.push({nCompany: company, job: jobTittle, desc: description});
    } else {
        console.log('Sorry, the previous experience cannot be added');
    }
}

/* Function that add a particular skill to the list */
function addSkills(mySkills, skill, cool) {
    if ( checkString(skill) && (typeof cool == 'boolean')) {
        mySkills.push({nSkill: skill, isCool: cool});
    } else {
        console.log('Sorry, the skill cannot be added');
    }
}

/* Function that shows one of my previous experience information */
function displayPostition(companyName, jobTittle, description) {
    if ( checkString(companyName) && checkString(jobTittle) && checkString(description)) {
        console.log('* ' + jobTittle + ' at ' + companyName + ' - ' + description);
    } else {
        console.log('Sorry the information cannot be shown properly');
    }
}

function displaySkill(skill, cool) {
    if ( checkString(skill) && (typeof cool == 'boolean')) {
        if ( cool ) {
            console.log('* BAM: ' + skill);
        } else {
            console.log('* ' + skill);
        }
    } else {
        console.log('Sorry the skill cannot be shown');
    }
}