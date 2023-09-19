let tabsURLs = {};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        // 檢查是否從 tradezeroweb.co 轉到其他網頁
        if (tabsURLs[tabId] && tabsURLs[tabId].includes('tradezeroweb.co') && !tab.url.includes('tradezeroweb.co')) {
            fetch('http://0.0.0.0:8000/api/v1/hello?text=close');
        }
        // 更新 tab URL
        tabsURLs[tabId] = tab.url;
        if (tab.url.includes('tradezeroweb.co')) {
            fetch('http://0.0.0.0:8000/api/v1/hello?text=open');
        }
    }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    if (tabsURLs[tabId] && tabsURLs[tabId].includes('tradezeroweb.co')) {
        fetch('http://0.0.0.0:8000/api/v1/hello?text=close');
    }
    delete tabsURLs[tabId];
});
