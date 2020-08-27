function validate() {
    var eventTitle = document.getElementById("eventTitle").value;
    var eventDates = document.getElementById("eventDates").value;
    var postingDate = document.getElementById("postingDate").value;
    var error_message = document.getElementById("error_message");

    var text;


    if (eventTitle.length == "") {
        text = "Please Type Event Title";
        error_message.innerHTML = text;
        return false;
    }
    if (eventDates.length == "") {
        text = "Please Select Event Date";
        error_message.innerHTML = text;
        return false;
    }
    if (postingDate.length == "") {
        text = "Please Select Posting Date";
        error_message.innerHTML = text;
        return false;
    }
    alert("The Form is Submitted");
    return true;
}
