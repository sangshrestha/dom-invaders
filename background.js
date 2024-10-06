chrome.action.onClicked.addListener(async (tab) => {
  console.log("dom-invaders background.js");

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
