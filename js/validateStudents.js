var firstName = $("#firstName");
var lastName = $("#lastName");
var dateOfBirth = $("#dateOfBirth");
var tuitionFees = $("#tuitionFees");




function validateFirstName() {

    if (firstName.val() == null || firstName.val() == "") {
        $("#firstNameWarning").html("Please insert a first name.");
        $("#firstNameWarning").css("color", "red");
        $("#firstName").css("border-width", "2px");
        $("#firstName").css("border-color", "red");
        return false;
    }

    if (firstName.val().match(/\s/g)) {
        $("#firstNameWarning").html("Spaces are not allowed.");
        $("#firstNameWarning").css("color", "red");
        $("#firstName").css("border-width", "2px");
        $("#firstName").css("border-color", "red");
        return false;
    }
    if (firstName.val().length > 20) {
        $("#firstNameWarning").html("First name should contain maximum 20 characters.");
        $("#firstNameWarning").css("color", "red");
        $("#firstName").css("border-width", "2px");
        $("#firstName").css("border-color", "red");
        return false;

    }
}

function validateLastName() {

    if (lastName.val() == null || lastName.val() == "") {
        $("#lastNameWarning").html("Please insert a last name.");
        $("#lastNameWarning").css("color", "red");
        $("#lastName").css("border-width", "2px");
        $("#lastName").css("border-color", "red");
        return false;
    }

    if (lastName.val().match(/\s/g)) {
        $("#lastNameWarning").html("Spaces are not allowed.");
        $("#lastNameWarning").css("color", "red");
        $("#lastName").css("border-width", "2px");
        $("#lastName").css("border-color", "red");
        return false;
    }
    if (lastName.val().length > 20) {
        $("#lastNameWarning").html("Last name should contain maximum 20 characters.");
        $("#lastNameWarning").css("color", "red");
        $("#lastName").css("border-width", "2px");
        $("#lastName").css("border-color", "red");
        return false;

    }
}

function validateDateOfBirth() {

    if (dateOfBirth.val() == null || dateOfBirth.val() == "") {
        $("#dateOfBirthWarning").html("Please insert a date of birth.");
        $("#dateOfBirthWarning").css("color", "red");
        $("#dateOfBirth").css("border-width", "2px");
        $("#dateOfBirth").css("border-color", "red");
        return false;
    }

    D_1 = dateOfBirth.val().split("-");
    console.log(D_1);

    if (D_1[0] >= 2020 || D_1[0] <= 1940) {
        $("#dateOfBirthWarning").html("Please insert a valid date of birth.");
        $("#dateOfBirthWarning").css("color", "red");
        $("#dateOfBirth").css("border-width", "2px");
        $("#dateOfBirth").css("border-color", "red");
        return false;
    }
}

function validateTuitionFees() {

    if (tuitionFees.val() == null || tuitionFees.val() == "") {
        $("#tuitionFeesWarning").html("Please insert tuition fees.");
        $("#tuitionFeesWarning").css("color", "red");
        $("#tuitionFees").css("border-width", "2px");
        $("#tuitionFees").css("border-color", "red");
        return false;
    }
}


$("#submit-button").click(() => {

    $("#forma").submit(event => {
        event.preventDefault();
    });
    validateFirstName();
    validateLastName();
    validateDateOfBirth();
    validateTuitionFees();
});