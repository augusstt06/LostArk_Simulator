<template>
  <div class="detail">
    <div class="head">
      <HeaderComponent />
      <InputComponent />
    </div>
    <button @click="getData('과자')"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/Header.vue";
import InputComponent from "../components/Input.vue";

import { getData } from "../module/main";

export default defineComponent({
  name: "DetailView",
  components: {
    HeaderComponent,
    InputComponent,
  },
  methods: {
    getData: getData,
  },
});
</script>
