// get the current page url and name and update the page name in the header

document.addEventListener("DOMContentLoaded", function () {
    let currentPageURL = window.location.pathname;
  
    currentPageURL = currentPageURL.replace(/\/$/, '');
  
    let pageName = currentPageURL.split("/").pop().replace(".html", "");
    pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  
    let currentPageNameElement = document.getElementById("currentPageName");
    if (currentPageNameElement) {
      currentPageNameElement.textContent = pageName;
    }
  });