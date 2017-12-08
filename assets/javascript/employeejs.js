<<<<<<< Updated upstream
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9TAZBeWi2OV2i-CpS09Wuo--UQ0d5ihA",
    authDomain: "my-first-firebase-database.firebaseapp.com",
    databaseURL: "https://my-first-firebase-database.firebaseio.com",
    projectId: "my-first-firebase-database",
    storageBucket: "my-first-firebase-database.appspot.com",
    messagingSenderId: "864506111368"
  };
  firebase.initializeApp(config);
let database = firebase.database()
$("#submitButton").on("click", function (event) {
	event.preventDefault();
	let name = $('#employeeName').val().trim();
	let role = $('#employeeRole').val().trim();
	let start = $('#startDate').val().trim();
	let rate = $('#monthlyRate').val().trim();
	console.log(start);

	let d = new Date(start)
	let startMonth = (d.getMonth()+1)
	//get today's date
	let today = new Date();
	let todayMonth = today.getMonth()+1; //January is 0!


	let monthsWorked = todayMonth - startMonth;
	let employeeDataObject = {
		name: name,
		role: role,
		start: start,
		months: monthsWorked,
		rate: rate,
		total: rate * monthsWorked,
		dateAdded: firebase.database.ServerValue.TIMESTAMP

	}

	console.log(employeeDataObject)
	database.ref().push(
	{
		employeeData: employeeDataObject
	});
});


// $('#addEmployee')
// $("#employeeName")
// $("#employeeRole")
// $("#startDate")
=======
// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyDGdubFGBJWrTFXCFG88AMlwmVyyG1zfP4",
    authDomain: "classdemo-743ef.firebaseapp.com",
    databaseURL: "https://classdemo-743ef.firebaseio.com",
    projectId: "classdemo-743ef",
    storageBucket: "classdemo-743ef.appspot.com",
    messagingSenderId: "109836927180"
  };
  firebase.initializeApp(config);

   console.log("hello");
   console.log(Date());
>>>>>>> Stashed changes
