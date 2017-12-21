Setup a simple form to collect info. Form can have default values set to help with testing
•           Business Name
•           Street
•           City
•           State (i.e. WA)
•           Postal Code
•           Country (i.e. US)
•           Phone Number
Submit will serialize the forms fields, and store them in a JSON object (here is an example of a full json with all fields https://gist.github.com/dlrust/f50c0c6b1c1e416ccd75)
 
Will launch a modal window. Modal should allow for closing of the modal, changing values, and then re-launching the modal
 
The modal will contain:
 
1) iframe. Which will be a URL generated that passes the string version of the JSON to render a preview Site. JSON string is passed as the "site" url param. clone_id will be static.
 
Example URL: http://cloudtemplates.cloudfrontend.net/app/live-preview/?clone_id=1576931&site={%22business%22:{%22business_name%22:%20%22Johnson%20Legal%20Partners%22}}
 
2) The modal window should have two buttons
•           Close - Closes the modal window to allow the user to edit their business fields again
•           Export - Will console.log the raw JSON object (not the "stringified" version)
---
 
You can use any tech, framework, or plugins you feel comfortable with. If you could create a github repo (public is fine) for the code.
 
Thanks and let me know if you have any questions.
