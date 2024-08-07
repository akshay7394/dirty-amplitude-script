function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Amplitude Trigger')
      .addItem('Trigger Events', 'showConfirmationDialog')
      .addToUi();
}

function showConfirmationDialog() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var numRows = data.length - 1; // Subtract 1 for the header row

  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('Confirm Trigger', 'You are about to trigger ' + numRows + ' events to Amplitude. Do you want to proceed?', ui.ButtonSet.YES_NO);

  // Process the user's response
  if (response == ui.Button.YES) {
    triggerAmplitudeEventsFromSheet();
    ui.alert(numRows + ' events triggered successfully.');
  } else {
    ui.alert('Event trigger canceled.');
  }
}


function triggerAmplitudeEventsFromSheet() {
  var sheetName = "Amplitude Cost sync"; // Replace with your specific sheet name
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Sheet not found: ' + sheetName);
    return;
  }
  var data = sheet.getDataRange().getValues();
  var url = "https://api2.amplitude.com/2/httpapi";
  var apiKey = "[AMPLITUDE_PROJECT_API_KEY]"; // Replace with your Amplitude API key

  // Assuming the first row is the header
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    
    // Convert currency (e.g., "₹4,000.00") to a float
    var investmentString = String(row[4]);
    var investmentFloat = parseFloat(investmentString.replace(/[^0-9.-]+/g,""));
    
    var eventData = {
      api_key: apiKey,
      events: [{
        user_id: "marketing_cost_user__doNOTuse", // User_id
        event_type: row[2], // Event_name
        event_properties: {
          marketing_channel: row[3], // Channel
          marketing_cost: investmentFloat, // Investment
          marketing_vendor: row[8], // Vendor
          marketing_group: row[9], // Group
          marketing_cost_owner: row[10] // Cost Owner
        }
      }]
    };
    
    var options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(eventData)
    };
    
    var response = UrlFetchApp.fetch(url, options);
    Logger.log(response.getContentText());
  }
}
