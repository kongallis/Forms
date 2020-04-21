const title = $("#title");
const stream = $("#stream");
const type = $("#type");
const start_date = $("#start_date");
const end_date = $("#end_date");
const forma = document.getElementById("forma");

forma.addEventListener('submit', (e) => {
    e.preventDefault();

    validateFields();


});

function validateTitle() {

    if (title.val() == null || title.val() === "") {
        $("#titleWarning").html("Please insert a title");
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

}

function validateStream() {

    if (stream.val() == null || stream.val() === "") {
        $("#streamWarning").html("Please insert a stream");
        $("#streamWarning").css("color", "red");
        $("#stream").css("border-width", "2px");
        $("#stream").css("border-color", "red");
        return false;
    }
    if (stream.val().match(/\s/g)) {
        $("#streamWarning").html("Spaces are not allowed.");
        $("#streamWarning").css("color", "red");
        $("#stream").css("border-width", "2px");
        $("#stream").css("border-color", "red");
        return false;
    }
    if (stream.val().length > 20) {
        $("#streamWarning").html("Stream should contain maximum 20 characters.");
        $("#streamWarning").css("color", "red");
        $("#stream").css("border-width", "2px");
        $("#stream").css("border-color", "red");
        return false;
    }

}

function validateType() {

    if (type.val() == null || type.val() === "") {
        $("#typeWarning").html("Please insert a type");
        $("#typeWarning").css("color", "red");
        $("#type").css("border-width", "2px");
        $("#type").css("border-color", "red");
        return false;
    }
    if (type.val().match(/\s/g)) {
        $("#typeWarning").html("Spaces are not allowed.");
        $("#typeWarning").css("color", "red");
        $("#type").css("border-width", "2px");
        $("#type").css("border-color", "red");
        return false;
    }
    if (type.val().length > 20 || type.val().length < 2) {
        $("#typeWarning").html("Type should contain at least 2 up to 20 characters.");
        $("#typeWarning").css("color", "red");
        $("#type").css("border-width", "2px");
        $("#type").css("border-color", "red");
        return false;

    }

}

function validateStartDate() {
    if (start_date.val() == null || start_date.val() === "") {

        $("#start_dateWarning").html("Please insert a starting date");
        $("#start_dateWarning").css("color", "red");
        $("#start_date").css("border-width", "2px");
        $("#start_date").css("border-color", "red");
        return false;
    }

}

function validateEndDate() {
    if (end_date.val() == null || end_date.val() === "") {
        $("#end_dateWarning").html("Please insert an ending date");
        $("#end_dateWarning").css("color", "red");
        $("#end_date").css("border-width", "2px");
        $("#end_date").css("border-color", "red");
        return false;
    }

    D_1 = start_date.val().split("-");
    D_2 = end_date.val().split("-");
    var d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
    var d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
    if (d1 >= d2) {
        $("#end_dateWarning").html("Ending date should be after starting date.");
        $("#end_dateWarning").css("color", "red");
        $("#end_date").css("border-width", "2px");
        $("#end_date").css("border-color", "red");
        return false;
    }

}


function validateFields() {
    validateTitle();
    validateStream();
    validateType();
    validateStartDate();
    validateEndDate();
}