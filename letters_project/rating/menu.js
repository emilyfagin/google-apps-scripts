function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Extra')
    .addItem('Refresh Rows', 'copySelectedRows')
    .addItem('Minimize 0s', 'minimizeZeros')
    .addToUi();
}