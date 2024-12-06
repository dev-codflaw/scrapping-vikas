








// ============================== header ========================
const body = document.querySelector("body");
const header = document.querySelector("header");
const navItems = header.querySelectorAll("li");
const navdropItems = header.querySelectorAll(".new-industry-box");
// const industryDropFlex = document.querySelector('.industry-drop-flex');
let previousItem = null;
// Get the position of the header
// const headerPosition = header.getBoundingClientRect().top;

// Attach a scroll event listener to the window object
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");

  if (window.scrollY >= 2) {
    header.classList.add("navfix");
    let logo = document.querySelector("header .navbar .navbar-brand-logo img");
    logo.setAttribute("src", "assets/new-img/logo/Actowiz-Logo-color.svg");
  } else {
    header.classList.remove("navfix");
    let logo = document.querySelector("header .navbar .navbar-brand-logo img");
    logo.setAttribute("src", "assets/new-img/logo/Actowiz-Logo-white.svg");
  }
});

if (
  window.location.href.includes("featured.php") ||
  window.location.href.includes("research-and-report.php") ||
  window.location.href.includes("whitepaper.php") ||
  window.location.href.includes("work.php") ||
  window.location.href.includes("video.php") ||
  window.location.href.includes("infographics.php")
) {
  window.addEventListener("scroll", () => {
    let resourcesHeader = document.querySelector(".new-resources-header");

    if (window.scrollY >= 2) {
      resourcesHeader.classList.add("resources-navfix");
    } else {
      resourcesHeader.classList.remove("resources-navfix");
    }
  });
}

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    header.classList.add("navhover");
    // body.classList.add('body-filter');
    $("header .navbar .navbar-brand-logo img").attr(
      "src",
      "assets/new-img/logo/Actowiz-Logo-color.svg"
    );
  });

  item.addEventListener("mouseout", () => {
    header.classList.remove("navhover");
    // body.classList.remove('body-filter');
    if (window.scrollY >= 2) {
      $("header .navbar .navbar-brand-logo img").attr(
        "src",
        "assets/new-img/logo/Actowiz-Logo-color.svg"
      );
    } else {
      $("header .navbar .navbar-brand-logo img").attr(
        "src",
        "assets/new-img/logo/Actowiz-Logo-white.svg"
      );
    }
  });

  item.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      if (navItem !== item) {
        navItem.classList.remove("open-dropdown");
      }
    });
    item.classList.toggle("open-dropdown");
    previousItem = item;
  });
});

navdropItems.forEach((item) => {
  item.addEventListener("click", () => {
    navdropItems.forEach((navdropItem) => {
      if (navdropItem !== item) {
        navdropItem.classList.remove("open-drop-box");
      }
    });
    item.classList.toggle("open-drop-box");
    previousItem = item;
  });
});

// ================= menu ==================

window.addEventListener("load", function () {
  const menuBtn = document.getElementById("hamburger-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active-icon");
    mobileMenu.classList.toggle("active");
  });
});












// ------------------------ services page list out dropdown-----------------------------------

// document.addEventListener("DOMContentLoaded", function() {
//   var countryDropdowns = document.querySelectorAll('.country-dropdown');

//   countryDropdowns.forEach(function(countryDropdown) {
//       countryDropdown.addEventListener('click', function() {
//           var countryDropdownItem = this.nextElementSibling;
//           countryDropdownItem.classList.toggle('show');
//       });
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.country-dropdown');
  dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function() {
          var allDropdownItems = document.querySelectorAll('.country-dropdown-item');
          var allDropdowns = document.querySelectorAll('.country-dropdown');
          var allSections = document.querySelectorAll('.new-drop-future-items');

          allDropdownItems.forEach(function(item) {
              if (item !== dropdown.nextElementSibling) {
                  item.classList.remove('show');
              }
          });

          allDropdowns.forEach(function(btn) {
              if (btn !== dropdown) {
                  btn.classList.remove('active');
              }
          });

          allSections.forEach(function(section) {
            if (section !== dropdown.closest('.new-drop-future-items')) {
                section.classList.remove('active');
            }
        });

          var nextElement = this.nextElementSibling;
          if (nextElement.classList.contains('show')) {
              nextElement.classList.remove('show');
              this.classList.remove('active');
              this.closest('.new-drop-future-items').classList.remove('active');
          } else {
              nextElement.classList.add('show');
              this.classList.add('active');
              this.closest('.new-drop-future-items').classList.add('active');
          }
      });
  });
});

// -------------------------------------------
try {
  const storeTabs = document.querySelectorAll(".data-storecategory-tab");
  const storeTabContents = document.querySelectorAll(".tab-data-storecategory");

  storeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const storeTarget = document.querySelector(
        tab.dataset.storecategoryTabTarget
      );

      // Remove active class from all tabs and contents
      storeTabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      storeTabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });

      // Add active class to clicked tab and corresponding content
      if (storeTarget) {
        tab.classList.add("active");
        storeTarget.classList.add("active");
      }
    });
  });

  // Ensure only the first tab and content are active by default
  if (storeTabs.length > 0) {
    storeTabs[0].classList.add("active");
  }
  if (storeTabContents.length > 0) {
    storeTabContents[0].classList.add("active");
  }
} catch (error) {
  console.error("Error occurred:", error);
}

// ===================================================== new footer ===========================================

// document.addEventListener("DOMContentLoaded", () => {
//   const footerLogo = document.getElementById("footer-logo");
//   const footerBody = document.getElementById("new-footer");

//   footerLogo.addEventListener("click", () => {
//     footerBody.classList.toggle("footer-white-mode");
//   });
// });

// --------------  home banner video -------------------------------------------------------

// // Get all video elements with the class "myVideo"
// const videos = document.querySelectorAll(".myVideo");

// // Loop through each video element and apply the operations
// videos.forEach(video => {
//   // Remove the controls attribute
//   video.removeAttribute("controls");

//   // Add event listener to loop the video
//   video.addEventListener("ended", function () {
//     video.play();
//   });

//   // Check if the video can play and then play it
//   video.addEventListener("canplay", function () {
//     video.play();
//   });
// });


// ----------------------------------------------- new datasets & api & scraper start ---------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Get all elements with class "tab-btn"
  const tabButtons = document.querySelectorAll(".module-stark-button");

  // Get all elements with class "tab-content"
  const tabContents = document.querySelectorAll(".multi-tabs-show-content");

  // Get all elements with class "tab-content"
  const maintabContents = document.querySelectorAll(".module-main-content-tab");

  // Function to switch tabs
  function switchTab(tabId) {
    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
      tabContent.classList.remove("active");
    });

    maintabContents.forEach((maintabContent) => {
      maintabContent.classList.remove("active");
    });

    // Remove "active" class from all tab buttons
    tabButtons.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).classList.add("active");

    // Add "active" class to the clicked tab button
    const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
    activeButton.classList.add("active");

    const element = document.getElementById(tabId);
    const closestModule = element.closest(".module-main-content-tab");
    if (closestModule) {
      closestModule.classList.add("active");
    }
  }

  // Add click event listeners to all tab buttons
  tabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const tabId = tabBtn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Show the default tab on page load
  switchTab("tab1");
});
// ----------------------------------------------- new datasets & api & scraper end ---------------------------------------

// ------------------------- datasets scraper slider  --------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".choose-cards");
  const cards = document.querySelectorAll(".choose-card");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  let cardIndex = 0;

  function updateCardWidth() {
    const windowWidth = window.innerWidth;
    let numCards;

    if (windowWidth >= 1200) {
      numCards = 2; // Desktop screen - 5 cards
    } else if (windowWidth >= 768) {
      numCards = 2; // Laptop screen - 3 cards
    } else {
      numCards = 1; // Mobile screen - 1 card
    }

    cards.forEach((card) => {
      card.style.width = `calc(${100 / numCards}% - 30px)`;
    });

    return numCards;
  }

  function updateCardPosition() {
    const cardWidth = cards[0].offsetWidth + 30; // Considering margin
    const numCards = updateCardWidth();
    const maxIndex = cards.length - numCards;
    cardIndex = Math.max(0, Math.min(cardIndex, maxIndex));

    const offsetX = -cardIndex * cardWidth;
    cardsContainer.style.transform = `translateX(${offsetX}px)`;
  }

  function init() {
    updateCardWidth();
    updateCardPosition();

    window.addEventListener("resize", () => {
      updateCardWidth();
      updateCardPosition();
    });

    nextButton.addEventListener("click", () => {
      const numCards = updateCardWidth();
      cardIndex = Math.min(cardIndex + 1, cards.length - numCards);
      updateCardPosition();
    });

    prevButton.addEventListener("click", () => {
      const numCards = updateCardWidth();
      cardIndex = Math.max(cardIndex - 1, 0);
      updateCardPosition();
    });
  }

  init();
});

// ------------------------- chirtsmas popup slider --------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   const freeSlidebar = document.getElementById("slidebar");
//   const slidebarExpanded = document.getElementById("slidebar-expanded");

//   slidebarExpanded.addEventListener("click", function () {
//     freeSlidebar.classList.toggle("active-free-shopping");
//   });
// });

// ==================== modal popup ========================

document.addEventListener("DOMContentLoaded", function () {
  var modal1 = document.getElementById("new-modal1");
  var btn1 = document.getElementById("cta-button-1");

  var modal2 = document.getElementById("new-modal2");
  var btn2 = document.getElementById("cta-button-2");

  // Get the <span> element that closes the modal
  var close1 = document.getElementsByClassName("close")[0];
  var close2 = document.getElementsByClassName("close")[1];

  // When the user clicks the button, open the modal
  btn1.onclick = function () {
    modal1.style.display = "block";
  };
  btn2.onclick = function () {
    modal2.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  close1.onclick = function () {
    modal1.style.display = "none";
  };
  close2.onclick = function () {
    modal2.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
});

// ------------------------- notification popup --------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Function to open popup
  function openNotificationPopup() {
    var notificationContainer = document.getElementById(
      "notification-container"
    );
    notificationContainer.classList.add("open-notification");
    notificationContainer.classList.remove("closed-notification");
  }

  // Function to close the notificationContainer
  function closeNotificatonPopup() {
    var notificationContainer = document.getElementById(
      "notification-container"
    );
    notificationContainer.classList.add("closed-notification");
    notificationContainer.classList.remove("open-notification");
  }

  // Function to toggle popup visibility
  function toggleNotificationPopup() {
    var notificationContainer = document.getElementById(
      "notification-container"
    );
    if (notificationContainer.classList.contains("open-notification")) {
      closeNotificatonPopup();
    } else {
      openNotificationPopup();
    }
  }

  // Handling click events
  document
    .getElementById("bell-services-icon")
    .addEventListener("click", toggleNotificationPopup);
  document
    .getElementById("closeNotificatonPopup")
    .addEventListener("click", closeNotificatonPopup);
});

// ===================================================== scraper page tab ===========================================

document.addEventListener("DOMContentLoaded", function () {
  const crawlersTab = document.getElementById("crawlers-tab");
  const apisTab = document.getElementById("apis-tab");
  const crawlearsTabContent = document.getElementById("crawlears-tab-content");
  const apisTabContent = document.getElementById("apis-tab-content");

  // Show the default active tab
  crawlersTab.classList.add("tab-active-flex");
  crawlearsTabContent.classList.add("tab-active");

  // Event listeners for tab switching
  crawlersTab.addEventListener("click", () => {
    crawlersTab.classList.add("tab-active-flex");
    apisTab.classList.remove("tab-active-flex");
    crawlearsTabContent.classList.add("tab-active");
    apisTabContent.classList.remove("tab-active");
  });

  apisTab.addEventListener("click", () => {
    apisTab.classList.add("tab-active-flex");
    crawlersTab.classList.remove("tab-active-flex");
    apisTabContent.classList.add("tab-active");
    crawlearsTabContent.classList.remove("tab-active");
  });
});

// ========================================== new banner dropdown ========================================

document.addEventListener("DOMContentLoaded", function () {
  // Get the dropdown button and content
  var dropdownBtn = document.querySelector(".new-banner-dropdown-btn");
  var dropdownContent = document.querySelector(".new-banner-dropdown-content");

  // Toggle the dropdown content when the button is clicked
  dropdownBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation to window
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown when clicking outside
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".new-banner-dropdown-btn")) {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  });
});

// =========================================== header popup form =========================================

// Get references to the open buttons, close button, and popup form

const openpopBtns = document.getElementsByClassName("new-popup-open-btn");
const closepopBtn = document.getElementById("new-popup-close-btn");
const popupForm = document.getElementById("new-popup-form");

// Function to toggle the visibility of the form
popupForm.style.display = "none";

function toggleForm() {
  popupForm.style.display =
    popupForm.style.display === "none" ? "block" : "none";
}

// Event listener for the open button click
Array.from(openpopBtns).forEach(function (button) {
  button.addEventListener("click", toggleForm);
});

// Event listener for the close button click
closepopBtn.addEventListener("click", toggleForm);

// Event listener to close the form when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target == popupForm) {
    toggleForm();
  }
});

// ======================================= faqs ======================================

document.addEventListener("DOMContentLoaded", function () {
  var faqQueations = document.querySelectorAll(".faq-queation");
  var faqAnswers = document.querySelectorAll(".faq-answer");

  function toggleAnswer() {
    var answer = this.nextElementSibling;

    faqAnswers.forEach(function (faqAnswer) {
      if (faqAnswer !== answer) {
        faqAnswer.style.display = "none";
        var correspondingQuestion = faqAnswer.previousElementSibling;
        correspondingQuestion.classList.remove("open");
      }
    });

    answer.style.display = answer.style.display === "block" ? "none" : "block";
    this.classList.toggle("open");
  }

  faqQueations.forEach(function (faqQueation) {
    faqQueation.addEventListener("click", toggleAnswer);
  });
});

// ====================================== home banner slider =======================================

const carouselContainer = document.querySelector(".carousel-container");
const carouselSlider = document.querySelector(".carousel-slider");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const carouselPagination = document.querySelector(".carousel-pagination");

let currentIndex = 0;

carouselSlides.forEach((slide, index) => {
  const paginationButton = document.createElement("button");
  paginationButton.addEventListener("click", () =>
    handlePaginationClick(index)
  );
  carouselPagination.appendChild(paginationButton);
});

const paginationButtons = carouselPagination.querySelectorAll("button");

function highlightCurrentSlide() {
  paginationButtons.forEach((button) => button.classList.remove("active"));
  paginationButtons[currentIndex].classList.add("active");
}

function updateSliderPosition() {
  carouselSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function handlePaginationClick(index) {
  currentIndex = index;
  updateSliderPosition();
  highlightCurrentSlide();
}

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

carouselSlider.addEventListener("mousedown", handleDragStart);
carouselSlider.addEventListener("touchstart", handleDragStart);

carouselSlider.addEventListener("mousemove", handleDrag);
carouselSlider.addEventListener("touchmove", handleDrag);

carouselSlider.addEventListener("mouseup", handleDragEnd);
carouselSlider.addEventListener("touchend", handleDragEnd);

function handleDragStart(event) {
  if (event.type === "mousedown") {
    startPosition = event.clientX;
  } else {
    startPosition = event.touches[0].clientX;
  }
  isDragging = true;
}

function handleDrag(event) {
  if (!isDragging) return;

  let currentPosition = 0;
  if (event.type === "mousemove") {
    currentPosition = event.clientX;
  } else {
    currentPosition = event.touches[0].clientX;
  }

  currentTranslate = currentPosition - startPosition;
}

function handleDragEnd() {
  if (!isDragging) return;

  if (currentTranslate < -100 && currentIndex < carouselSlides.length - 1) {
    currentIndex++;
  } else if (currentTranslate > 100 && currentIndex > 0) {
    currentIndex--;
  }

  updateSliderPosition();
  highlightCurrentSlide();

  isDragging = false;
  startPosition = 0;
  currentTranslate = 0;
}

function initSlider() {
  highlightCurrentSlide();
}

initSlider();

// =================================== home tab scrolling =====================================
document.addEventListener("DOMContentLoaded", function () {
  const tabsBox = document.querySelector(".tabs-box");
  (allTabs = tabsBox.querySelectorAll(".tab")),
    (arrowIcons = document.querySelectorAll(".icon i"));

  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let targetX = 0;
  let startTime = 0;
  let endTime = 0;
  let startScrollLeft = 0;

  const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display =
      scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display =
      maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
  };

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
      let scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -220 : 220);
      handleIcons(scrollWidth);
    });
  });

  allTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabsBox.querySelector(".activet").classList.remove("activet");
      tab.classList.add("activet");
    });
  });

  const touchStart = (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    currentX = startX;
    targetX = tabsBox.scrollLeft;
    startTime = Date.now();
    startScrollLeft = tabsBox.scrollLeft;

    tabsBox.style.scrollBehavior = "auto";
  };

  const touchMove = (e) => {
    if (!isDragging) return;

    const x = e.touches[0].clientX - startX;
    const scrollWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    const maxScrollLeft = scrollWidth < 0 ? 0 : scrollWidth;
    const minScrollLeft = 0;

    targetX = startScrollLeft - x;
    targetX = Math.max(targetX, minScrollLeft);
    targetX = Math.min(targetX, maxScrollLeft);

    tabsBox.scrollLeft = targetX;
    handleIcons(targetX);

    currentX = e.touches[0].clientX;
  };

  const touchEnd = (e) => {
    isDragging = false;
    endTime = Date.now();

    const deltaTime = endTime - startTime;
    const deltaDistance = currentX - startX;

    if (deltaTime < 300 && Math.abs(deltaDistance) > 30) {
      const acceleration = deltaDistance / deltaTime;
      const distance = Math.abs(acceleration) * 300;
      const direction = deltaDistance < 0 ? -1 : 1;

      targetX = tabsBox.scrollLeft + distance * direction;
      targetX = Math.max(targetX, 0);
      targetX = Math.min(targetX, tabsBox.scrollWidth - tabsBox.clientWidth);

      tabsBox.style.scrollBehavior = "smooth";
      tabsBox.scrollLeft = targetX;
      handleIcons(targetX);
    } else {
      tabsBox.style.scrollBehavior = "smooth";
    }
  };

  tabsBox.addEventListener("touchstart", touchStart);
  tabsBox.addEventListener("touchmove", touchMove);
  tabsBox.addEventListener("touchend", touchEnd);
});

// ========================================= Worlds Top Web Scraping  ===================================

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("our-story-content");
  const signupBtn = document.getElementById("our-story-box");

  loginBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        signupBtn.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  });

  signupBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        loginBtn.parentNode.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  });
});

// -------------christmas countdown----------------------

