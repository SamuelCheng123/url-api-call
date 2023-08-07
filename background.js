chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url === 'https://auth.tradezeroweb.co/exec/authn/wtLoginForm?referpg=aHR0cHM6Ly9zdGFuZGFyZC50cmFkZXplcm93ZWIuY28v&at=webtrader') {
      if (changeInfo.status === 'complete') {
        // 當網頁完全加載時
        fetch('http://0.0.0.0:8000/api/v1/hello');
      }
    }
  });
  
  chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    // 在這裡添加你關閉tab時的操作，但注意，這是對所有tabs的監控，你可能需要其他方式來精確地判斷是否是你要的tab。
    fetch('http://0.0.0.0:8000/api/v1/hello');
  });
  