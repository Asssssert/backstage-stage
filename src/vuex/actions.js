const actions = {
  getDefaultActive({commit}) {
    commit('getDefaultActive')
  },
  upDefaultActive({commit}, value) {
    commit('upDefaultActive', value)
  },
  upToken({commit}, value) {
    commit('upToken', value)
  },
  getToken({commit}, value) {
    commit('getToken', value)
  },
  upUser({commit}, value) {
    commit('upUser', value)
  },
  getUser({commit}, value) {
    commit('getUser', value)
  },
  logout({commit}) {
    commit('logout')
  },
};
export default actions
