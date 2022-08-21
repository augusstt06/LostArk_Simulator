<template>
  <div class="detail">
    <div class="head">
      <HeaderComponent />
      <InputComponent />
    </div>
    <h2>{{ this.$store.state.input.id }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/Header.vue";
import InputComponent from "../components/Input.vue";

export default defineComponent({
  name: "DetailView",
  components: {
    HeaderComponent,
    InputComponent,
  },
});
</script>
