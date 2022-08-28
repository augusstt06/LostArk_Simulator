<template>
  <div class="detail">
    <div class="head">
      <HeaderComponent />
      <InputComponent />
    </div>
    <h2>파라미터 : {{ $route.params.userId }}</h2>
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
