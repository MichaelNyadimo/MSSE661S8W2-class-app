(() => {
    if (storageHasData() && !getStorage('isAuth')) {
      logout();
      window.location.href = '/public/Login.html';
    }
  })();