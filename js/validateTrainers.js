var firstName = $("#firstName");
var lastName = $("#lastName");
var subject = $("#subject");
var forma = $("#forma");




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

function validateSubject() {

    if (subject.val() == null || subject.val() == "") {
        $("#subjectWarning").html("Please insert a subject.");
        $("#subjectWarning").css("color", "red");
        $("#subject").css("border-width", "2px");
        $("#subject").css("border-color", "red");
        return false;
    }
    if (subject.val().match(/\s/g)) {
        $("#subjectWarning").html("Spaces are not allowed.");
        $("#subjectWarning").css("color", "red");
        $("#subject").css("border-width", "2px");
        $("#subject").css("border-color", "red");
        return false;
    }
    if (subject.val().length > 20) {
        $("#subjectWarning").html("Subject should contain maximum 20 characters.");
        $("#subjectWarning").css("color", "red");
        $("#subject").css("border-width", "2px");
        $("#subject").css("border-color", "red");
        return false;

    }
}


$("#submit-button").click(() => {

    $("#forma").submit(event => {
        event.preventDefault();
    });
    validateFirstName();
    validateLastName();
    validateSubject();

});