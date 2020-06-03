<template>
  <section class="bg-gray-200 flex flex-col items-center">
    <div class="bg-white shadow-md rounded px-8 py-5 m-8 flex flex-col">
      <form class="flex flex-col" v-on:submit="submitHandler">
        <label for="email" class="text-left text-base text-gray-900 mt-5"
          >Email</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="email"
          type="text"
          id="email"
          name="email"
          placeholder="email@email.com"
        />
        <label for="password" class="text-left text-base text-gray-900 mt-5"
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-model="password"
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
        <input
          class="bg-blue-500 rounded w-full py-1 text-white hover:bg-blue-800 hover:shadow duration-300 cursor-pointer mt-5 font-semibold"
          type="submit"
          value="LOG IN"
        />
      </form>
      <button
        class="px-2 mt-5 py-1 rounded text-white bg-red-500 hover:bg-red-800 duration-300 font-semibold"
        v-on:click="googleHandler"
      >
        LOG IN WITH GOOGLE
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("User", ["signUserIn", "signUserInGoogle"]),
    submitHandler(e) {
      e.preventDefault();
      this.signUserIn({ email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(e => {
          alert(e);
        });
    },
    googleHandler() {
      this.signUserInGoogle()
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(e => {
          alert(e);
        });
    }
  }
};
</script>
