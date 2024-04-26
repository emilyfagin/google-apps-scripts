// minimizes 'read' rows, as edited
function onEdit(e) {
  var editedCell = e.range;

  if (editedCell.getSheet().getName() == "full_letters" && editedCell.getColumn() == 7) { // if edited cell is the 6th col

    // resize row of changed cell, to 30 pxs 
    e.source.getActiveSheet().setRowHeightsForced(editedCell.getRow(), 1, 30);
  }
}
