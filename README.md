# Amplitude Script To Trigger Event + Properties

Quick & easy Google Apps Script to trigger a list of events (held within a Google Sheet) to a specified Amplitude project. It was originally designed to trigger Marketing Costs to an Amplitude project but it can be easily modified to trigger more distinct events too.

## Quick Explanation
* The script to trigger events & event properties to Amplitude (note: it pulls ALL of it's data from whichever Google Sheet the script is attached to, and it will expose a new menu item called "Amplitude Trigger" which should be used to manually initiate the event trigger. Each line item in the sheet is equivalent to 1 distinct event with it's attached properties.
* The intended goal is to assign 1 marketing cost (or event + relevant event properties) to each individual row, validate the data, and then trigger the script to push all the data to Amplitude. The "Timestamp" column can be left blank if you are not triggering backdated data. 
