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

$("#submit-button").click((e) => {
    validateCourseId();
    validateStudentId();
    validateAssignmentId();
    if (validateCourseId() &&
        validateStudentId() &&
        validateAssignmentId()) {
        $("h1").prepend('<div class="alert alert-success" style="margin-bottom: 0; border: 0; padding:0; text-align: center;" role="alert"><b>SUCCESSFUL INSERT!</b></div>');
    } else {
        e.preventDefault();
    }
});