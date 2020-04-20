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
}

function validateTrainerId() {
    if (courseID.val() == null || courseID.val() == "") {
        $("#inputGroupSelect02Warning").html("Please insert a trainer id.");
        $("#inputGroupSelect02Warning").css("color", "red");
        $("trainerID").css("border-width", "2px");
        $("trainerID").css("border-color", "red");
        return false;
    }
}

$("#submit-button").click(() => {
    validateCourseId();
    validateTrainerId();
    $("#forma").submit(event => {
        event.preventDefault();
    });
});