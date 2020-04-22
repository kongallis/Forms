var title = $("#title");
var description = $("#description");
var subDateTime = $("#subDateTime");
var totalMark = $("#totalMark");




function validateTitle() {

    if (title.val() == null || title.val() == "") {
        $("#titleWarning").html("Please insert a title.");
        $("#titleWarning").css("color", "red");
        $("#title").css("border-width", "2px");
        $("#title").css("border-color", "red");
        return false;
    }

    if (title.val().match(/\s/g)) {
        $("#titleWarning").html("Spaces are not allowed.");
        $("#titleWarning").css("color", "red");
        $("#title").css("border-width", "2px");
        $("#title").css("border-color", "red");
        return false;
    }
    if (title.val().length > 20) {
        $("#titleWarning").html("Title should contain maximum 20 characters.");
        $("#titleWarning").css("color", "red");
        $("#title").css("border-width", "2px");
        $("#title").css("border-color", "red");
        return false;
    }
    return true;
}

function validateDescription() {

    if (description.val() == null || description.val() == "") {
        $("#descriptionWarning").html("Please insert a description.");
        $("#descriptionWarning").css("color", "red");
        $("#description").css("border-width", "2px");
        $("#description").css("border-color", "red");
        return false;
    }

    if (description.val().match(/\s/g)) {
        $("#descriptionWarning").html("Spaces are not allowed.");
        $("#descriptionWarning").css("color", "red");
        $("#description").css("border-width", "2px");
        $("#description").css("border-color", "red");
        return false;
    }
    if (description.val().length > 20) {
        $("#descriptionWarning").html("Description should contain maximum 20 characters.");
        $("#descriptionWarning").css("color", "red");
        $("#description").css("border-width", "2px");
        $("#description").css("border-color", "red");
        return false;

    }
    return true;
}

function validateSubDateTime() {
    if (subDateTime.val() == null || subDateTime.val() == "") {
        $("#subDateTimeWarning").html("Please insert a submission date");
        $("#subDateTimeWarning").css("color", "red");
        $("#subDateTime").css("border-width", "2px");
        $("#subDateTime").css("border-color", "red");
        return false;
    }
    return true;
}

function validateTotalMark() {
    if (totalMark.val() == null || subDateTime.val() == "") {
        $("#totalMarkWarning").html("Please insert a total mark.");
        $("#totalMarkWarning").css("color", "red");
        $("#totalMark").css("border-width", "2px");
        $("#totalMark").css("border-color", "red");
        return false;
    }
    return true;
}




$("#submit-button").click((e) => {
    validateTitle();
    validateDescription();
    validateSubDateTime();
    validateTotalMark();

    if (validateTitle() &&
        validateDescription() &&
        validateSubDateTime() &&
        validateTotalMark()) {
        console.log(validateTitle(), validateDescription(), validateSubDateTime(), validateTotalMark());
        $("h1").prepend('<div class="alert alert-success" style="margin-bottom: 0; border: 0; padding:0; text-align: center;" role="alert"><b>SUCCESSFUL INSERT!</b></div>');
    } else {
        e.preventDefault();
        console.log(validateTitle(), validateDescription(), validateSubDateTime(), validateTotalMark());
    }



});