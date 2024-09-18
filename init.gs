// Function to create a new Amplitude sheet and return its URL
function createNewAmplitudeSheet() {
  // Create a new spreadsheet
  var newSpreadsheet = SpreadsheetApp.create("Amplitude Cost Sync Sheet");
  var sheet = newSpreadsheet.getActiveSheet();
  
  // Define the header row with only the columns used in the original script
  var headers = [
    "Timestamp",
    "Date",
    "Event_name",
    "Channel",
    "Investment",
    "Vendor",
    "Group",
    "Cost Owner"
  ];
  
  // Add headers to the first row of the sheet
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row to be bold
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  
  // Auto-resize columns to fit content
  sheet.autoResizeColumns(1, headers.length);
  
  // Return the URL of the new spreadsheet
  return newSpreadsheet.getUrl();
}

// Function to run the script and log the new sheet URL
function runScript() {
  var newSheetUrl = createNewAmplitudeSheet();
  console.log('New Amplitude Cost Sync Sheet created. URL: ' + newSheetUrl);
  
  // Optionally, open the new sheet in a new browser tab
  var html = HtmlService.createHtmlOutput('<html><script>'
    + 'window.open("' + newSheetUrl + '");'
    + 'google.script.host.close();'
    + '</script></html>')
    .setWidth(250)
    .setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(html, 'Opening new sheet...');
}