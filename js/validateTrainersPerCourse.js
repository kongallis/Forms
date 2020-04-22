var courseID = $("#inputGroupSelect01");
var trainerID = $("#inputGroupSelect02");


function validateCourseId() {
    if (courseID.val() == null || courseID.val() == "") {
        $("#inputGroupSelect01Warning").html("Please insert a course id.");
        $("#inputGroupSelect01Warning").css("color", "red");
        $("courseID").css("border-width", "2px");
        $("courseID").css("border-color", "red");
        return false;
    }
    return true;
}

function validateTrainerId() {
    if (courseID.val() == null || courseID.val() == "") {
        $("#inputGroupSelect02Warning").html("Please insert a trainer id.");
        $("#inputGroupSelect02Warning").css("color", "red");
        $("trainerID").css("border-width", "2px");
        $("trainerID").css("border-color", "red");
        return false;
    }
    return true;
}

$("#submit-button").click((e) => {
    validateCourseId();
    validateTrainerId();
    if (validateCourseId() &&
        validateTrainerId()) {
        $("h1").prepend('<div class="alert alert-success" style="margin-bottom: 0; border: 0; padding:0; text-align: center;" role="alert"><b>SUCCESSFUL INSERT!</b></div>');
    } else {
        e.preventDefault();
    }
});