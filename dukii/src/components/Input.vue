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
        <!-- <b-button
          variant="outline-info"
          @click="this.$store.commit('getInputId', userId)"
        > -->
        <b-button variant="outline-info">
          <!-- <router-link :to="{ name: 'detail', params: { userId } }"> -->
          <router-link :to="{ path: `/detail/${userId}` }"> 입력 </router-link>
        </b-button>
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
