function switchLanguage(lang) {
  if (lang === 'en') {
    window.location.href = '/';
  } else {
    window.location.href = '/' + lang + '/';
  }
}
