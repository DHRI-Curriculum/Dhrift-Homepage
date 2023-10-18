document.addEventListener("DOMContentLoaded", function () {
  let currentPageURL = window.location.pathname;

  currentPageURL = currentPageURL.replace(/\/$/, '');

  let pageName = currentPageURL.split("/").pop().replace(".html", "");
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  //changing faq doesn't seem to be working for some reason, unsure why :(
  if (pageName.toLowerCase() === "faq") {
    pageName = "Frequently Asked Questions";
    console.log("pageName: " + pageName);
  }

  let currentPageNameElement = document.getElementById("currentPageName");
  if (currentPageNameElement) {
    currentPageNameElement.textContent = pageName;
  }
});

