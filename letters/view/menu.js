function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🤓 Extra')
    .addItem('🔄 Refresh Selected', 'refreshSelectedRows')
    .addSubMenu(ui.createMenu('👀 Adjust Row View')
      .addItem('➖ Minimize Read', 'minimizeRead')
      .addItem('➕ Maximize Read', 'maximizeRead')
      .addItem('➖ Minimize only 0s', 'minimizeZeros')
      .addItem('➕ Maximize only 0s', 'maximizeZeros')
    )
    .addItem('sample', 'sample')
    .addToUi();
}