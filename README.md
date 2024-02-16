You will create a resume that exists entirely within the developer console.

Objectives

    · Create a project folder linked to github, and inside that folder an index.html file and a javascript file. Link the JavaScript file to the index.html file.

    · Your "resume" will simply be a series of 'console.log' statements to print the resume data to the console.

    · When you open index.html in the browser, it will be a blank page. That's okay. Your resume will be in the console. ('command + option + I', or 'F12')

    · Your resume should display the following information:

        · Your name

        · You career/field

        · A short description of yourself

        · A list of your interests

        · A list of your past positions that includes company/place name, title, short description of what you did

        · A list of your skills

    · You can make up information if you'd like

    · In your skill list, skills that are "cool" should begin with 'BAM:'

Additional Requirements

    · Your name should print in all capital letters, but you must not type it as all capitalized in you code (i.e. you will need to use JavaScript to capitalize it)

    · You must have a function called 'displayPosition' that takes parameters for company name, job title, and description. The function should 'console.log' those three items in a format similar to the entries in the "My Previous Experience" section of the example below. You will call 'displayPosition' several times with different data to create each entry for the "My Previous Experience" section.

    · You must have a function called 'displaySkill' that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, you should print 'BAM:' in front of the skill name only if the skill is cool. If you don't have any cool skills, make some up. Use this function to display each entry in the "My Skills" section

Example Output

    Your resume output should look similar to this:

    Name: JOHN DOE
    Career: Full Stack ENgineer / Instructor
    Description: I like turtles

    My Interests:
    * Fall TV (The best)
    * Locomotives
    * Observing awkard situations
    * Film soundtracks

    My Previous Experience:
    * Math, Chemistry, Physics, Biology, and English tutor at Some School - Tutored students in those areas.
    * Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.
    * Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.

    My Skills:
    * French 
    * BAM: Trombone
    * Java
    * C / C++
    * BAM: Objective-C / Swift
    * BAM: Opera Singing
    * Python
    * JavaScript
    * BAM: TypeScript

Submission

    When you are finished, make sure you have commited and pushed your changes to GitHub.