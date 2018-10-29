import api from './apiService';

class User {
  static forgotPassword(data) {
    return api.post('/users/password', data);
  }
}

export default User;
