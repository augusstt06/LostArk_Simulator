<template>
  <div class="detail">
    <div class="head">
      <HeaderComponent />
      <!-- <InputComponent /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/Header.vue";
import axios from "axios";

// import cheerio from "cheerio";

export default defineComponent({
  name: "DetailView",
  components: {
    HeaderComponent,
    // InputComponent,
  },
  data() {
    return {};
  },

  methods: {},
  // created() {
  //   this.Test();
  // },
});
</script>
