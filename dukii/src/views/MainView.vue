<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <InputVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputVue from "@/components/Input.vue";

export default defineComponent({
  name: "MainView",
  components: {
    InputVue,
  },
});
</script>
