// minimize all letters rated 0 (set row height to smaller)
function minimizeZeros(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("full_letters");

  var sourceRange = sheet.getDataRange();
  var values = sourceRange.getValues();

  for (var i = 0; i < values.length; i++) { // // Loop each row in source 
    
    if (values[i][5] === 0) { // value in col5 == 2

      sheet.setRowHeightsForced(i + 1, 1, 30); // resize that row, to 30 pxs 
    }
  }

}

function copySelectedRows() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = ss.getSheetByName("full_letters");
  var selectedSheet = ss.getSheetByName("selected");
  
  var sourceRange = sourceSheet.getDataRange();
  var values = sourceRange.getValues();
    
  var selectedToClear = selectedSheet.getRange(2, 1, selectedSheet.getLastRow() - 1, selectedSheet.getLastColumn());
  
  var isSelectedChange = false;

  for (var i = 0; i < values.length; i++) { // // Loop each row in source 
    
    if (values[i][5] === 2) { // value in col5 == 2

      if (!isSelectedChange) {
        isSelectedChange = true;
        if (!selectedToClear.isBlank()){
          selectedToClear.clear();
        }
      }
      
      selectedSheet.appendRow(values[i]);
    }
  }
}

function onEdit(e) {
  var editedCell = e.range;

  if (editedCell.getSheet().getName() == "full_letters" && editedCell.getColumn() == 6) { // if edited cell is the 6th col
      
    // Check if the selected value is 0
    if (editedCell.getValue() == 0) {

      // resize row of changed cell, to 30 pxs 
      e.source.getActiveSheet().setRowHeightsForced(editedCell.getRow(), 1, 30);
    }
  }
}
