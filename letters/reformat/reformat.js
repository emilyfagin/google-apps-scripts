function sample() {
  var apiKey = PropertiesService.getScriptProperties().getProperty('GPT_API_KEY');
  SpreadsheetApp.getUi().alert(apiKey);
}


// deletes all letters with 500+ characters
function deleteLongLetters() {
  var src = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("full_letters");
  var srcValues = src.getDataRange().getValues();
  var rowsToDelete = [];
  var total = 0;

  // Loop through each row in the src sheet
  for (var i = 0; i < srcValues.length; i++) {
    
    var rowData = srcValues[i];
    var wordsInColumnD = rowData[4] ? rowData[4].toString().trim().split(/\s+/).length : 0;

    if (wordsInColumnD > 500) { // if number of words > 500
      rowsToDelete.push(i + 1); // adding 1 to convert to 1 based index
    }
  }

  // remove rows, in reverse - to keep order.
  rowsToDelete.reverse().forEach((i) => {
    src.deleteRow(i); // delete row at given index
    Logger.log("Removed Idx: " + i);
    total++;
  });

  Logger.log("Total rows deleted: " + total);
}


