function changeFont() {
    if (document.body.style.fontFamily != "opendyslexic") {
        document.body.style.fontFamily = "opendyslexic";
    } else if (document.body.style.fontFamily == "opendyslexic") {
        document.body.style.fontFamily = "inherit";
    }

    var od = document.getElementById("od-button");
    if (od.value == "Enable OpenDyslexic") od.value = "Disable OpenDyslexic";
    else od.value = "Enable OpenDyslexic";
}