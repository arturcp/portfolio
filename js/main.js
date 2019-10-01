function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function selectTab(profile) {
  var elements = document.getElementsByClassName("intro-content");

  if (profile === 'speaker') {
    elements[1].click();
  } else if (profile === 'developer') {
    elements[0].click();
  }
}

var profile = getParameterByName('profile');
if (profile) {
  selectTab(profile);
}

var myLightbox = GLightbox({
  selector: 'glightbox'
});

var avatars = document.querySelectorAll('[data-avatar-trigger]');
avatars.forEach(function(avatar) {
  var elementToTrigger = avatar.getAttribute('data-avatar-trigger');
  avatar.addEventListener('click', function(event) {
    console.log('.' + elementToTrigger);
    document.querySelector('.' + elementToTrigger).click();
  });
});
