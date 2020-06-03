<template>
  <div class="flex flex-col">
    <section class="bg-gray-200 flex justify-center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </section>
    <h1 class="text-lg my-5 font-semibold">This is the Home page</h1>
    <div v-if="this.user" class="flex flex-col items-center">
      <strong class="text-sm text-gray-600">{{ this.user.email }}</strong>
      <button
        class="bg-red-600 text-white rounded py-1 px-5 m-2 font-semibold text-base hover:bg-red-900 duration-300"
        v-on:click="signUserOut"
      >
        LOG OUT
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters("User", ["user"])
  },
  methods: {
    ...mapActions("User", ["signUserOut"])
  }
};
</script>
