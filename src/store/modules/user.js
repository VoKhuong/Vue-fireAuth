import firebase from "@/plugins/firebase";

export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.user != null;
    },
    isVerified(state) {
      return state.user.emailVerified;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async signUserUp({ commit }, payload) {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);
      commit("setUser", response.user);
    },
    async signUserIn({ commit }, payload) {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
      commit("setUser", response.user);
    },
    signUserOut({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
    async sendEmailVerification() {
      await firebase.auth().currentUser.sendEmailVerification();
    },
    async signUserInGoogle({ commit }) {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      commit("setUser", response.user);
    }
  }
};
