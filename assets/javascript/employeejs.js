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

// Submit on click button
$("#submitButton").on("click", function (event) {
	event.preventDefault();
	let name = $('#employeeName').val().trim();
	let role = $('#employeeRole').val().trim();
	let start = $('#startDate').val().trim();
	let rate = $('#monthlyRate').val().trim();
	let newStart = moment(start, "YYYY-MM-DD");
    let monthsWorked = (moment(newStart).diff(moment(), "months"));
    monthsWorked *= -1
	
	

	//getting the dataObject and pushing it to firebase
	let employeeDataObject = {
		name: name,
		role: role,
		start: start,
		months: monthsWorked,
		rate: rate,
		total: rate * monthsWorked,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	}
	database.ref().push(
	{
		employeeData: employeeDataObject
	});
	console.log(employeeDataObject)
});
	database.ref().on("child_added", function(childSnapshot) {
		console.log(childSnapshot.val())

		let tableName = (childSnapshot.val().employeeData.name);
		let tableRole = (childSnapshot.val().employeeData.role);
		let tableStart = (childSnapshot.val().employeeData.start);
		let tableMonths = (childSnapshot.val().employeeData.months);
		let tableRate = (childSnapshot.val().employeeData.rate);
		let tableTotal = (childSnapshot.val().employeeData.total);

      // full list of items to the well
      $("#dataWrapper").append("<tr>" + "<td>" + tableName + "</td>" + "<td>" + tableRole + "</td>" + "<td>" + tableStart + "</td>" + "<td>" + tableMonths + "</td>" + "<td>" + tableRate + "</td>" + "<td>" + tableTotal + "</td>" + "</tr>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });