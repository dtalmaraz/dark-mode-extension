 document.addEventListener('DOMContentLoaded', () => {
    const darkButton = document.getElementById('changeDark');
    const lightButton = document.getElementById('changeLight');
   darkButton.addEventListener('click', () => {
      document.body.style.backgroundColor = "black";
      chrome.tabs.insertCSS(null, { file: "styles.css" });
      return;
    })
});


// chrome.browserAction.onClicked.addListener(function(tab) {
//    // if (!state) {
//       chrome.tabs.insertCSS(null, { file: "styles.css" });
//      // state = !state;
//       return;
//     //}
// })
