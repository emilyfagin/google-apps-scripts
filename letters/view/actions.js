// minimize all letters rated 0 (set row height to smaller)
function minimizeZeros() {
  adjustRatingHeight([0], true);
}

// maximizes (resets to "fit-to-content") '0' rows.
function maximizeZeros() {
  adjustRatingHeight([0], false);
}

// minimize all 'read' (rated)
function minimizeRead() {
  adjustRatingHeight([0, 1, 2], true);
}

// maximize all 'read' (rated) 
function maximizeRead() {
  adjustRatingHeight([0, 1, 2], false);
}

// copies all rows rated "2" into a new sheet, to be organized/formatted
function refreshSelectedRows() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var src = ss.getSheetByName("full_letters");
  var target = ss.getSheetByName("selected");
  
  var srcRange = src.getDataRange();
  var values = srcRange.getValues();
    
  var targetData = target.getDataRange().getValues();
  var targetIds = targetData.map(row => row[0]);
  Logger.log(targetIds);

  for (var i = 1; i < values.length; i++) { // // Loop each row in source 
    
    if (values[i][6] === 2 && !targetIds.includes(values[i][0])) { // value in col5 == 2
      src.getRange(i + 1, 1, 1, src.getLastColumn()).copyTo(target.getRange(target.getLastRow() + 1, 1));
    }
    // if in "selected" but isn't marked 2 in the main sheet anymore
    else if (targetIds.includes(values[i][0]) && values[i][6] !== 2){
      var removeIndex = targetIds.indexOf(values[i][0]) + 1;
      if (removeIndex !== -1){
        Logger.log("Removed row [ID: " + targetIds[removeIndex] + "] from \"selected\" sheet @ index: " + removeIndex);
        target.deleteRow(removeIndex);
      }
    }
  }
}

function adjustRatingHeight(toAdjust, toMinimize) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("full_letters");

  var sourceRange = sheet.getDataRange();
  var values = sourceRange.getValues();

  for (var i = 0; i < values.length; i++) { // // Loop each row in source 
    
    if (toAdjust.includes(values[i][6])) { // value in col5 == 2
      if (toMinimize){
        sheet.setRowHeightsForced(i + 1, 1, 30); // resize that row, to 30 pxs 
      }
      else {
        sheet.autoResizeRows(i + 1, 1); // Auto-resize the row starting from row i + 1
      }
    }
  }
}
