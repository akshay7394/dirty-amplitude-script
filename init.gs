// Function to run the script and send an email
function runScript() {
  var sheetInfo = createOrRetrieveAmplitudeSheet();
  Logger.log('Amplitude Cost Sync Sheet URL: ' + sheetInfo.url);
  
  var user = Session.getActiveUser().getEmail();
  
  // Compose email
  var subject = 'New Amplitude Cost Sync Sheet Created';
  var body = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4285f4; color: white; padding: 20px; text-align: center; }
          .content { background-color: #ffffff; padding: 20px; }
          .button { color: white; padding: 10px 20px; text-decoration: none; display: inline-block; border-radius: 5px; }
          .button-primary { background-color: #4285f4; }
          .button-danger { background-color: #db4437; }
          .footer { background-color: #f2f2f2; padding: 10px; text-align: center; font-size: 0.8em; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Amplitude Cost Sync Sheet Created</h1>
          </div>
          <div class="content">
            <p>Hello,</p>
            <p>A new Amplitude Cost Sync Sheet has been created for you.</p>
            <br>
            <p>
              <a href="${sheetInfo.url}" class="button button-primary"; style="background-color: #4285f4; color: white !important;">Open Sheet</a>
              <a href="https://github.com/akshay7394/dirty-amplitude-script/issues/new" class="button button-danger"; style="background-color: #db4437; color: white !important;">Report an issue on Github</a>
            </p>
          </div>
          <div class="footer">
            <p>Your feedback is appreciated and help awaits if you need it!</p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  
  // Send HTML email
  MailApp.sendEmail({
    to: user,
    subject: subject,
    htmlBody: body
  });
    
  // Log confirmation
  Logger.log('Sheet ' + (sheetInfo.isNew ? 'created' : 'retrieved') + ' and email sent to ' + user);
}

function createOrRetrieveAmplitudeSheet() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var firstRun = scriptProperties.getProperty('first_run');
  var sheetId = scriptProperties.getProperty('sheet_id');

  if (firstRun === 'finished') {
    var existingSheet = SpreadsheetApp.openById(sheetId);
    Logger.log('Existing Amplitude Cost Sync Sheet: ' + existingSheet.getUrl());
    return {
      url: existingSheet.getUrl(),
      id: sheetId,
      isNew: false
    };
  } else {
    var newSpreadsheet = SpreadsheetApp.create("New Amplitude Cost Sync Sheet");
    var sheet = newSpreadsheet.getActiveSheet();
    
    sheet.setName("Amplitude Cost sync");
    
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
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
    sheet.autoResizeColumns(1, headers.length);
    
    scriptProperties.setProperty('sheet_id', newSpreadsheet.getId());
    scriptProperties.setProperty('first_run', 'finished');
    
    return {
      url: newSpreadsheet.getUrl(),
      id: newSpreadsheet.getId(),
      isNew: true
    };
  }
}