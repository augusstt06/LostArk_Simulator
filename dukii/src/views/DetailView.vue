<template>
  <div class="detail">
    <div class="head">
      <HeaderComponent />
      <InputComponent />
    </div>
    <button @click="getWebsiteData">dd</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/Header.vue";
import InputComponent from "../components/Input.vue";

import axios from "axios";
// import cheerio from "cheerio";

export default defineComponent({
  name: "DetailView",
  components: {
    HeaderComponent,
    InputComponent,
  },
  data() {
    return {
      lastestArticles: [],
    };
  },
  methods: {
    getWebsiteData() {
      let params = "희현잉";
      axios
        .get(`/Profile/Character/${params}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getWebsiteData();
  },
});
</script>
