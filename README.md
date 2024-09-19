# Amplitude Script to Trigger Event + Properties

Easily trigger a list of events (stored in a Google Sheet) to a specified Amplitude project using this Google Apps Script. Originally designed for Marketing Costs, this script can be adapted for other events as well.

## Quick Explanation

This script sends events and event properties to Amplitude, using data from a Google Sheet. After setting up, a new menu item called "Amplitude Trigger" will appear in the menu bar. Use this to manually send each row in the sheet as a distinct event to Amplitude.

## Steps to Use This Script

1. **Create a Google Script**

   - Click here to jump straight into creating a new Google Script - https://script.new

2. **Set up the Google Apps Script**

   - Delete any code in the script editor.
   - Create 2 new files:
     - `Code.gs`
     - `init.gs`
   - Replace the content of `Code.gs` with the contents of `Code.gs` from this repository and paste it into the script editor.
   - Replace the content of `init.gs` with the contents of `init.gs` from this repository and paste it into the script editor.

3. **Configure your script's connection to Amplitude**

   - Set up "HTTP API" as a new Source in your Amplitude instance.
     - You can Use Amplitude's helpful [HTTP API Quick Start](https://amplitude.com/docs/apis/analytics/http-api-quickstart) guide.
     - Once done, navigate back to the Script you were creating.

4. **Run the script for the first time**

   - Open the `init.gs` file.
   - Click on the `Run` icon to run your script.
   - Next, go to the `Code.gs` file and replace `[AMPLITUDE_PROJECT_API_KEY]` in `Code.gs` with the API key of the Amplitude project where you want to send the events.
   - Click on the `Save` icon to save your script.
   - Check your email, by now you would've received an email with a link to the newly-created Google Sheet.

5. **Prepare Your Data**

   - Populate the Google Sheet with the events and associated properties you want to send to Amplitude.
   - You can customize the columns for each event, but remember to modify the script accordingly to handle any changes.

6. **Trigger Events**

   - Once your data is ready, click on the "Amplitude Trigger" menu and select the option to start the event trigger process.
   - **\*❗️NOTE:** This will send each row in the sheet to Amplitude as a distinct event. If you're triggering a test event, make sure to name it something descriptive that you can delete later.\*

7. **Validate Your Data**
   - Make sure to verify the data you’ve sent to Amplitude.
   - It’s recommended to first test in your Amplitude "Development" environment before sending events to production.
