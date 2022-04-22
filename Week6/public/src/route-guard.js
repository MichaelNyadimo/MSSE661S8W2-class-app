(() => {
  const isAuth = getStorage('isAuth');
  if (!isAuth) {
    logout();
    alert('Log in to view your tasks.');
    window.location.href = '/public/Login.html';
  }
})();