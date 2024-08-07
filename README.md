# Amplitude Script To Trigger Event + Properties

Quick & easy Google Apps Script to trigger a list of events (held within a Google Sheet) to a specified Amplitude project. It was originally designed to trigger Marketing Costs to an Amplitude project but it can be easily modified to trigger more distinct events too.

## Quick Explanation
* The script to trigger events & event properties to Amplitude (note: it pulls ALL of it's data from whichever Google Sheet the script is attached to, and it will expose a new menu item called "Amplitude Trigger" which should be used to manually initiate the event trigger. Each line item in the sheet is equivalent to 1 distinct event with it's attached properties.
* The intended goal is to assign 1 marketing cost (or event + relevant event properties) to each individual row, validate the data, and then trigger the script to push all the data to Amplitude. The "Timestamp" column can be left blank if you are not triggering backdated data. 

## Steps to use this script
1. Create a new Google Sheet
2. Copy/import the data from the sample Google Sheet
3. Click on Extensions > Apps Script [it will open script.google.com]
4. Copy the code from Code.gs from this repository into the Code.gs that opened in step 3
5. Replace `[AMPLITUDE_PROJECT_API_KEY]` with the API key of the project you want to send events to.
6. Save the script.
7. Go to the Google Sheet that you created in Step 1 and refresh the page. You should see a new menu item appear in the menu bar called "Amplitude Trigger". When you run it for the first time, you'll have to agree to provide the necessary permissions in order for the script to work as intended.
