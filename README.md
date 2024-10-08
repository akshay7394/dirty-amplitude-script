# Amplitude Script to Trigger Event + Properties

Easily trigger a list of events (stored in a Google Sheet) to a specified Amplitude project using this Google Apps Script. Originally designed for Marketing Costs, this script can be adapted for other events as well.

## Quick Explanation

This script sends events and event properties to Amplitude, using data from a Google Sheet. After setting up, a new menu item called "Amplitude Trigger" will appear in the menu bar. Use this to manually send each row in the sheet as a distinct event to Amplitude.

## Steps to Use This Script

1. **Create a Google Sheet**

   - Open Google Sheets and create a new spreadsheet.

2. **Import Sample Data (Optional)**

   - You can import the data from the sample `Marketing Cost Tracker.csv` provided in this repository to get started quickly.

3. **Set Up the Google Apps Script**

   - In your Google Sheet, click on `Extensions` > `Apps Script`.
   - Delete any code in the script editor that opens.
   - Copy the content of `Code.gs` from this repository and paste it into the script editor.
   - Replace `[AMPLITUDE_PROJECT_API_KEY]` in the script with the API key of the Amplitude project where you want to send the events.
   - Click `File` > `Save` to save your script.

4. **Refresh the Google Sheet**

   - Go back to your Google Sheet and refresh the page.
   - A new menu item called "Amplitude Trigger" should appear in the menu bar.

5. **Prepare Your Data**

   - Populate the Google Sheet with the events and associated properties you want to send to Amplitude.
   - You can customize the columns for each event, but remember to modify the script accordingly to handle any changes.

6. **Trigger Events**

   - Once your data is ready, click on the "Amplitude Trigger" menu and select the option to start the event trigger process.
   - This will send each row in the sheet to Amplitude as a distinct event.

7. **Validate Your Data**
   - Make sure to verify the data you’ve sent to Amplitude.
   - It’s recommended to first test in your Amplitude "Development" environment before sending events to production.
