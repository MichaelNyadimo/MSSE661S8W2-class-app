const AUTH_API = `${BASE_API_URL}/auth`; // http://localhost:3000/api/auth
const USER_API = `${BASE_API_URL}/user`; // http://localhost:3000/api/user

/**
 * @class AuthService
 *
 * Service for authentication methods.
 */
class AuthService {
  /**
   * Registers a new user.
   *
   * @param {Object} formData - { username, email, password }
   
  register = (formData) => _post(`${AUTH_API}/register`, formData);

  /**
   * Logs a user into the application.
   *
   * @param {Object} formData 
   */
  login = (formData) => _post(`${AUTH_API}/login`, formData);

  setExpiration = (maxExpiration) =>
    new Date(new Date().getTime() + maxExpiration * 1000);

  isAuth = () => {
    return getStorage('access_token');
  };

  isTokenExpired() {
    const expiryDate = getStorage('expires_in');
    const isExpired = expiryDate === new Date();

    if (isExpired) {
      localStorage.clear();
    }

    return isExpired;
  }


  logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
}

const authService = new AuthService();