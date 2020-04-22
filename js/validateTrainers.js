var firstName = $("#firstName");
var lastName = $("#lastName");
var subject = $("#subject");




function validateFirstName() {

    if (firstName.val() == null || firstName.val() === "") {
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
    return true;
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
    return true;
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
    return true;
}




$("#submit-button").click((event) => {
    validateFirstName();
    validateLastName();
    validateSubject();
    if ((validateFirstName() == false) ||
        (validateLastName() == false) ||
        (validateSubject() == false)) {
        event.preventDefault();
    } else {

        $("h1").prepend('<div class="alert alert-success" style="margin-bottom: 0; border: 0; padding:0; text-align: center;" role="alert"><b>SUCCESSFUL INSERT!</b></div>');

    }



});