<template>
  <div class="detail">
    {{ userId }}
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
    return {
      userId: this.$route.query.id,
    };
  },
  methods: {},
  watch: {
    $route(newValue, oldValue) {
      console.log(newValue.query.id, oldValue.query.id);
      this.$router.go(0);
    },
  },
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
