function getFormvalue() {
   var form = document.getElementById("form1");

    // Get the values of first name and last name from the form
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Concatenate first name and last name
    var fullName = firstName + " " + lastName;

    // Display the full name using alert
    alert(fullName);

    // Prevent the default form submission
    return false;
}
