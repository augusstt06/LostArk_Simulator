<template class="main">
  <div class="main">
    <div class="head">
      <HeaderComponent />
      <div class="explanation">로스트 아크 데미지 시뮬레이터</div>
    </div>
    <div class="input">
      <InputComponent />
    </div>
    <div class="text">
      <TextComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "@/components/Input.vue";
import HeaderComponent from "@/components/Header.vue";
import TextComponent from "@/components/Text.vue";

export default defineComponent({
  name: "MainView",
  components: {
    InputComponent,
    HeaderComponent,
    TextComponent,
  },
  methods: {},
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Montserrat+Alternates:wght@700&display=swap");

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 90%;
  width: 100%;
  padding: 0 50px;
}

.explanation {
  font-family: "Jua", sans-serif;
  color: #fff;
}
.input {
  margin-bottom: 20px;
  max-width: 70%;
  min-width: 50%;
  margin: 40px auto;
}
</style>
