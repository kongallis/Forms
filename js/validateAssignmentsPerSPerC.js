var courseID = $("#inputGroupSelect01");
var studentID = $("#inputGroupSelect02");
var assignmentID = $("#inputGroupSelect03");


function validateCourseId() {
    if (courseID.val() == null || courseID.val() == "") {
        $("#inputGroupSelect01Warning").html("Please insert a course id.");
        $("#inputGroupSelect01Warning").css("color", "red");
        $("courseID").css("border-width", "2px");
        $("courseID").css("border-color", "red");
        return false;
    }
}

function validateStudentId() {
    if (studentID.val() == null || studentID.val() == "") {
        $("#inputGroupSelect02Warning").html("Please insert a student id.");
        $("#inputGroupSelect02Warning").css("color", "red");
        $("studentID").css("border-width", "2px");
        $("studentID").css("border-color", "red");
        return false;
    }
}


function validateAssignmentId() {
    if (assignmentID.val() == null || assignmentID.val() == "") {
        $("#inputGroupSelect03Warning").html("Please insert an assignment id.");
        $("#inputGroupSelect03Warning").css("color", "red");
        $("assignmentID").css("border-width", "2px");
        $("assignmentID").css("border-color", "red");
        return false;
    }
}

$("#submit-button").click(() => {
    validateCourseId();
    validateStudentId();
    validateAssignmentId();
    $("#forma").submit(event => {
        event.preventDefault();
    });
});