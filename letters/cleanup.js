function cleanupTypes() {
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange('full_letters!C1:C10').clearContent();
}