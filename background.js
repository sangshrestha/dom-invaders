chrome.action.onClicked.addListener(async (tab) => {
  console.log("dom-invaders background.js");

  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["styles.css"],
  });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
