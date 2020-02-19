function onOpen() {
  
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open Sidebar', 'openSidebar')
    .addToUi();

}

function onInstall() {
  onOpen();
}

function openSidebar() {
  let html = HtmlService.createTemplateFromFile('Sidebar')
    .evaluate();
  
  SpreadsheetApp.getUi().showSidebar(html);
}