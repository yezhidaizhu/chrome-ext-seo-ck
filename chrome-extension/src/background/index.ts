import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

// chrome.sidePanel
//   .setPanelBehavior({ openPanelOnActionClick: true })
//   .catch((error) => console.error(error));

// exampleThemeStorage.get().then(theme => {
//   console.log('theme', theme);
// });

console.log('background loaded');
// console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

chrome.action.onClicked.addListener((tab) => {
  console.log("Action button clicked");
  // 你可以在这里执行一些背景任务或发送消息到 popup
});
