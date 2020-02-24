function engagement(){
    var name = prompt('What is your name?');
    console.log('User\'s name is ' + name);

    var residency = prompt('Are you an Iowa resident?');
    if (residency == 'no'){
        window.location.href = "https://www.onlyinyourstate.com/iowa/10-reasons-move-to-ia/";

    } else if (residency == 'yes'){
        affiliation = prompt('Which party are you affiliated with? Republican or Democrat?');
        console.log('User is an Iowa resident');
        participation = prompt('Did you participate in the 2020 Iowa caucus? yes or no');

        if (participation == 'yes'){
            document.write('Thank you ' + name + ' for participating in the political process. As an engaged ' + affiliation + ', you are a most honorable US citizen.');
            console.log(name + ' participated in the 2020 Iowa caucus.');

        } else if (participation == 'no'){
            reason = prompt('why?');
            document.write('You ' + name + ' did not caucus because ' + reason + '. The entire ' + affiliation + ' party is deeply disappointed in you.');
            console.log(name + ' did not participate in the 2020 Iowa caucus.');
        }
        
    } 





}

engagement();

// var residentinput = prompt('Are you an Iowa resident?');
// var affiliation = prompt('Which political party are you affiliated with? Republican or Democrat?');
// var participation = prompt('Did you participate in the 2020 Iowa caucus?');