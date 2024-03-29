document.addEventListener("DOMContentLoaded", function () {
  let currentPageURL = window.location.pathname;

  currentPageURL = currentPageURL.replace(/\/$/, '');

  let pageName = currentPageURL.split("/").pop().replace(".html", "");
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  if (pageName.toLowerCase() === "faq") {
    pageName = "Frequently Asked Questions";
  }

  let currentPageNameElement = document.getElementById("currentPageName");
  if (currentPageNameElement) {
    currentPageNameElement.textContent = pageName;
  }
});

