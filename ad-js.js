// cancel any ad's javascript that will create ads element
// usually appear as vertical ads on the site

chrome.webRequest.onBeforeRequest.addListener(
  () => ({cancel: true}),
  {urls: ["<all_urls>"]},
  ["blocking"]
);
