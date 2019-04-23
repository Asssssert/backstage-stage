import axios from 'axios';
import store from "../../vuex/store";

axios.interceptors.request.use(config => {
  store.dispatch('getToken');
  let token = store.getters.token;
  config.headers.Authorization = token;
  return config
});
axios.interceptors.response.use(response => {
  return response;
});

const apiMethods = {
  methods: {
    apiGet(url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, {params: data})
          .then(resp => {
            if (resp.data.code == 200) {
              resolve(resp.data);
            } else {
              _g.notification("error", resp.data.msg);
            }
          })
          .catch(error => {
            _g.notification("error", '服务器异常');
            reject(error);
          })
      })
    },
    apiPost(url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, data)
          .then(resp => {
            if (resp.data.code == 200) {
              resolve(resp.data);
            } else {
              _g.notification("error", resp.data.msg);
            }
          })
          .catch(error => {
            _g.notification("error", '服务器异常');
            reject(error);
          })
      })
    },
    apiDelete(url, data) {
      return new Promise((resolve, reject) => {
        axios.delete(url, data)
          .then(resp => {
            if (resp.data.code == 200) {
              resolve(resp.data);
            } else {
              _g.notification("error", resp.data.msg);
            }
          })
          .catch(error => {
            _g.notification("error", '服务器异常');
            reject(error);
          })
      })
    },
    apiPatch(url, data) {
      return new Promise((resolve, reject) => {
        axios.patch(url, data)
          .then(resp => {
            if (resp.data.code == 200) {
              resolve(resp.data);
            } else {
              _g.notification("error", resp.data.msg);
            }
          })
          .catch(error => {
            _g.notification("error", '服务器异常');
            reject(error);
          })
      })
    },
    apiPut(url, data) {
      return new Promise((resolve, reject) => {
        axios.put(url, data)
          .then(resp => {
            if (resp.data.code == 200) {
              resolve(resp.data);
            } else {
              _g.notification("error", resp.data.msg);
            }
          })
          .catch(error => {
            _g.notification("error", '服务器异常');
            reject(error);
          })
      })
    }
  }
};

export default apiMethods;
