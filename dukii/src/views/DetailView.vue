<template>
  <div class="detail">
    <div class="head">
      <HeaderComponent />
      <InputComponent />
    </div>
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
    return {};
  },

  methods: {},
  // created() {
  //   this.Test();
  // },
});
</script>
<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 90%;
  width: 100%;
  padding: 0 50px;
}
</style>
