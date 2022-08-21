<template>
  <div class="Input">
    <b-input-group>
      <b-form-input
        type="text"
        v-model="userId"
        placeholder="아이디를 입력하세요"
        min="0.00"
      ></b-form-input>
      <b-input-group-append>
        <b-button
          variant="outline-info"
          @click="this.$store.commit('getInputId', userId)"
          >입력</b-button
        >
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputComponent",
  data() {
    return {
      userId: "" as string,
    };
  },
});
</script>
