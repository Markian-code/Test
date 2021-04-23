$('img.footer__social-img').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});

const switcher = document.querySelector('.theme-switcher');
const radio = document.querySelector('.theme-radio');
const select = document.querySelector('.theme-select');


function selectTheme(theme) {
  if (!theme) {
    throw new Error("theme name should be defined")
  }
  
  const themes = {
    'light': 'light-theme',
    'dark': 'dark-theme',
    'backendless': 'backendless-theme'
  };
  
  const themeClass = themes[theme];
  
  if (!themeClass) {
    throw new Error("theme name should be valid")
  }
  
  document.body.classList.remove(...Object.values(themes));
  document.body.classList.add(themeClass);
}

function switcherClickHandler(event) {
  const { target } = event;
  const { theme } = target.dataset;
  
  selectTheme(theme);
}

function radioChangeHandler(event) {
  const { value: theme } = event.target;
 
  selectTheme(theme);
}

function selectInputHandler(event) {
  const { value: theme } = event.target;
 
  selectTheme(theme);
}

switcher.addEventListener('click', switcherClickHandler);
radio.addEventListener('change', radioChangeHandler);
select.addEventListener('input', selectInputHandler);

selectTheme('light');


