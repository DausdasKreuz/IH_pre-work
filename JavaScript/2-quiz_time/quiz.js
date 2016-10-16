var user = {}
var responses = []
lies = 0;

function askQuestion1() {
	var name = prompt('What is your name?')
	user.name = name
}


function askQuestion2() {
	var adult = prompt('Are you 18 or older?');
	if (adult.toLowerCase() === 'yes') {
		responses.push(true)
	}
	else if (adult.toLowerCase() === 'no') {
		responses.push(false)
	}
	else {
		alert('Please, your answer must be yes or no.\nAre you 18 or older?');
		return askQuestion2();
	}
}


function askQuestion3() {
	var situation = prompt('What are your situation?:\nsingle, married, divorced, widowed or no answer');
	switch (situation) {
		case 'single':
			responses.push(false);
			break;
		case 'married':
			responses.push(true);
			break;
		case 'divorced':
			responses.push(true);
			break;
		case 'widowed':
			responses.push(true);
			break;
		case 'no answer':
			responses.push(false);
			break;
		default:
			alert('Answer must case with given');
			askQuestion3();
	}
}


function askQuestion4 () {
	var age = prompt('Please, insert your age in numbers');
	if (isFinite(parseInt(age))) {
		user.age = parseInt(age);
		if (((responses[0] === true) && (age < 18)) || ((responses[0] === false) && (age >= 18))) {
			lieAge(age);
		}
	}
	else {
		alert('Insert only a numeric value');
		return askQuestion4();
	}
}


function askQuestion5() {
	var coupleName = prompt('What is your couple or excouple name?\nIf you don\' have, please type -no couple-');
	if (((responses[1] === true) && (coupleName === 'no couple')) || ((responses[1] === false) && (coupleName !== 'no couple'))) {
		lieCouple();
	}
	else {
		user.coupleName = coupleName;
	}
}


function lieAge(age) {
	user.lier = true;
	if (responses[0]) {
		alert('Lier! You said you\'re 18 or older\nbut you\'re ' + age + ' years old');
		putlie();
		responses[0] = false;
	}
	else {
		alert('Lier! You said you aren\'t 18 or older\nbut you\'re ' + age + ' years old');
		putlie();
		responses[0] = true;
	}
}


function evaluate(responsesArray) {
	var totalTrue = 0, totalFalse = 0;
	for (i in responsesArray) {
		(responsesArray[i]) ? (totalTrue += 1) : (totalFalse += 1);
	}
	user.okis = totalTrue;
	user.fails = totalFalse;

	showResults();
}


function lieCouple() {
	user.lier = true;
	if (responses[1]){
		alert('Lier! You said you have or had couple\nbut, he or she don\'t have name?');
		putlie();
		responses[1] = false;
	}
	else {
		alert('Lier! You said you don\'t have or had couple\nbut, he or she have name?');
		putlie();
		responses[1] = true;
	}
}


function putlie() {
	lies += 1
	if (lies === 1) {
			alert('I\'m watching you :(')
	}
	else if (lies > 1) {
		alert('I told I putted my eyes on you');
		makeQuiz();
	}
}

function showResults() {
	alert('I will give you the information I have about you.');
	alert('Your name is ' + user.name + ' and you are ' + user.age + ' years old.');
	if (responses[1]) {
		alert('Your couple\'s name is ' + user.coupleName + '.');
	}
	alert('You have ' + user.okis + ' points of trust and ' + user.fails + 'points of suspicion.');
	if (lies > 0) {
		alert('You tell me ' + lies + ' lies.\nAre you a lier?\n\n' + user.lier);
	}
}


function makeQuiz() {
	askQuestion1();
	askQuestion2();
	askQuestion3();
	askQuestion4();
	askQuestion5();
	evaluate(responses);
}

makeQuiz();