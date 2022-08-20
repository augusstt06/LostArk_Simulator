<template class="main">
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <div class="main">
    <div class="main-header">
      <div class="PageName">Dukii</div>
      <div class="Explanation">로스트 아크 데미지 시뮬레이터</div>
      <InputVue />
    </div>
    <div>dd</div>
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
<style>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Montserrat+Alternates:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Montserrat+Alternates:wght@700&display=swap");

.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.PageName {
  font-family: "Jua", sans-serif;
  font-family: "Montserrat Alternates", sans-serif;
  color: #fff;
}
.Explanation {
  font-family: "Jua", sans-serif;
  color: #fff;
}
</style>
