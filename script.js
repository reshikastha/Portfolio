function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function scrollToContact() {
  var contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

function showTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll('.details-container').forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  // Show the selected tab content or specific contents for "All" and "React Native"
  if (tabId === 'radio-1') {
    document.querySelectorAll('.details-container').forEach(function (tabContent) {
      tabContent.style.display = 'block';
    });
  } else if (tabId === 'radio-2') {
    document.getElementById('tab-content-radio-1').style.display = 'block';
    document.getElementById('tab-content-radio-2').style.display = 'block';
  } else {
    // Show the selected tab content for other tabs
    const selectedTabContent = document.getElementById(`tab-content-${tabId}`);
    if (selectedTabContent) {
      selectedTabContent.style.display = 'block';
    }
  }
}
