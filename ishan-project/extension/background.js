// Create a context menu
chrome.contextMenus.create({
  id: "ai-autofiller",
  title: "Identify checkout parameters",
  contexts: ["all"],
});

// Listeners
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ai-autofiller") {
    // Offload to server
    chrome.tabs.sendMessage(tab.id, { type: "ai-autofiller" });
  }
});

