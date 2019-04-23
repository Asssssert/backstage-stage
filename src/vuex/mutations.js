const mutations = {
  getDefaultActive(state) {
    state.defaultActive = Lockr.get('defaultActive');
  },
  upDefaultActive(state, defaultActive) {
    Lockr.set('defaultActive', defaultActive);
    state.defaultActive = Lockr.get('defaultActive');
  },
  upToken(state, token) {
    Lockr.set('token', token);
    state.token = Lockr.get('token');
  },
  getToken(state, token) {
    state.token = Lockr.get('token');
  },
  upUser(state, user) {
    Lockr.set('user', user);
    state.user = Lockr.get('user');
  },
  getUser(state, user) {
    state.user = Lockr.get('user');
  },
  logout(state) {
    state.token = null;
    state.defaultActive = null;
    Lockr.flush();
  },
}
export default mutations
