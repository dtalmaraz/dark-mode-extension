// const isDarkOn = false;
// const isPinkOn = false;

function click(event){
  //need to refresh page if they want to go to pink extension

  if (event.target.id === 'darkMode'){
      chrome.tabs.executeScript({
          file: "darkRun.js"
      })
      //isDarkOn = true;
  }
  
  if (event.target.id === 'pinkMode'){
      chrome.tabs.insertCSS(
     {file: 'pinkMode.css'});
      window.close(); 
      isPinkOn = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', click)
  }
})

let colors = {
  pinkMode: 'pink',
  darkMode: 'darkGrey',
}