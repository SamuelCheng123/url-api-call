let tabsURLs = {};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        if (tab.url.includes('tradezeroweb.co')) {
            fetch('http://0.0.0.0:8000/api/v1/hello');
            tabsURLs[tabId] = tab.url;
        }
    }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    if (tabsURLs[tabId] && tabsURLs[tabId].includes('tradezeroweb.co')) {
        fetch('http://0.0.0.0:8000/api/v1/hello');
    }
    delete tabsURLs[tabId];
});
