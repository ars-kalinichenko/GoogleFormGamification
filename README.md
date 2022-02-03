# GoogleFormGamification

👨‍🏫 Use this code in GoogleScripts so that a message will be sent to the mail when the test is passed.

##How to do it?

- Create form and put your questions and answers: https://docs.google.com/forms
- Settings -> Make this a quiz
- Settings -> Responses -> Collect email addresses
- Click on the advanced options icon -> ScriptEditor
  the script should open. 
- You need to delete everything code from there and paste the code from main.gs.
- Edit params: **pointLimit** — "Total points" at the top of the form, **message, messageTheme** — for email, **percentageCorrect** — how much interest do you need to collect, for successful completion
- Save file
- Choose *createOnFormSubmitTrigger* instead *onMyFormSubmit*. Run
- Grant access. It is needed so that messages can be sent from your mail (Check that the trigger is added in the triggers tab)
- Congrats! You are awesome! ❤️