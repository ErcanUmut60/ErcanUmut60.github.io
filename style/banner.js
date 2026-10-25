// Random banner image selector
// Add new images to this list when you put them in style/banners/
(function () {
  var banners = [
    'nozzle.jpg',
    'Merlin-1-X4.jpg',
    'rocket.jpg',
    'shuttle.jpeg'
    // Add more filenames here as you add images to style/banners/
  ];

  var pick = banners[Math.floor(Math.random() * banners.length)];

  // Figure out path depth: pages in subfolders need "../"
  // We detect by checking the current URL path
  var depth = (window.location.pathname.match(/\//g) || []).length - 1;
  // GitHub Pages adds repo name; use a more robust check
  var prefix = '';
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].src || '';
    if (src.indexOf('banner.js') !== -1) {
      // extract the prefix up to /style/banner.js
      prefix = src.substring(0, src.lastIndexOf('/style/'));
      break;
    }
  }

  function applyBanner() {
    var logo = document.getElementById('logo');
    if (logo) {
      // A page can pin a fixed image with data-banner="file.jpg"
      var image = logo.getAttribute('data-banner') || pick;
      logo.style.backgroundImage = "url('" + prefix + "/style/banners/" + image + "')";
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBanner);
  } else {
    applyBanner();
  }
})();
