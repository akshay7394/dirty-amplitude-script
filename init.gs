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
  
  // Compose email
  var subject = 'New Amplitude Cost Sync Sheet Created';
  var body = '<p>A new Amplitude Cost Sync Sheet has been created for you.</p>' +
             '<p>You can access it at: <a href="' + newSheet.url + '">' + newSheet.url + '</a></p>' +
             '<p>Sheet ID: ' + newSheet.id + '</p>' +
             '<p>This sheet has been set up with the necessary columns for the Amplitude Cost Sync process.</p>' +
             '<p>If you run into any problems or have any questions, please ' +
             '<a href="https://github.com/akshay7394/tasty_bytes/issues/new">tell me about it!</a></p>' +
             '<p>We appreciate your feedback and are here to help!</p>';
  
  // Send HTML email
  MailApp.sendEmail({
    to: user,
    subject: subject,
    htmlBody: body
  });
    
  // Log confirmation
  console.log('New sheet created and email sent to ' + user);
}