function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🤓 Extra')
    .addItem('Refresh \'selected\' rows', 'refreshSelectedRows')
    .addItem('sample', 'sample')
    .addSubMenu(ui.createMenu('Adjust row height')
      .addItem('➖ Minimize read', 'minimizeRead')
      .addItem('➕ Maximize read', 'maximizeRead')
      .addItem('➖ Minimize only 0s', 'minimizeZeros')
      .addItem('➕ Maximize only 0s', 'maximizeZeros')
    )
    .addSeparator()
    .addSubMenu(ui.createMenu('Reformat')
      .addItem('Classify relationship types', 'classifyRelationships')
      .addItem('Check relationship spelling', 'checkSpelling')
      // .addItem('Cleanup relationship types', 'cleanupTypes')
    )
    .addToUi();
}