function onMyFormSubmit(e) {
    const r = e.response;
    let email = r.getRespondentEmail();

    // Change settings
    const pointLimit = 8;
    const message = "message!";
    const messageTheme = "Theme email";
    const percentageCorrect = 80;
    // ------


    let result = 0;
    r.getGradableItemResponses().forEach((item) => {
        result += item.getScore();
    });

    if (result / pointLimit >= percentageCorrect / 100) {
        GmailApp.sendEmail(email, messageTheme, message);
    }
}

// Run this to add a form completion trigger
function createOnFormSubmitTrigger() {
    const form = FormApp.getActiveForm();

    if (ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() == "onMyFormSubmit").length == 0) {
        ScriptApp.newTrigger("onMyFormSubmit").forForm(form).onFormSubmit().create();
    }
}