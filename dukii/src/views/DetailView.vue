<template>
  <div class="detail">
    <div class="head">
      <HeaderComponent />
      <InputComponent />
    </div>
    <div class="body">
      <div class="text-center" v-if="Object.keys(userExpedition).length < 1">
        <b-spinner
          style="width: 3rem; height: 3rem"
          variant="primary"
          label="Spinning"
        ></b-spinner>
      </div>

      <div v-if="Object.keys(userExpedition).length >= 1">
        <b-button v-b-toggle.collapse-1 variant="primary">원정대</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">{{ userExpedition }}</p>
            <b-button v-b-toggle.collapse-1-inner size="sm"
              >Toggle Inner Collapse</b-button
            >
            <b-collapse id="collapse-1-inner" class="mt-2">
              <b-card>Hello!</b-card>
            </b-collapse>
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/Header.vue";
import InputComponent from "../components/Input.vue";
import axios from "axios";

export default defineComponent({
  name: "DetailView",
  components: {
    HeaderComponent,
    InputComponent,
  },

  data() {
    return {
      userId: this.$route.query.id,
      variant: "info",
      userExpedition: [],
      userCard: [],
      userEngrave: [],
      userJewel: [],
      userLevel: [],
      userSkill: [],
    };
  },
  methods: {},
  watch: {
    $route(newValue, oldValue) {
      console.log(newValue.query.id, oldValue.query.id);
      this.$router.go(0);
    },
  },
  created() {
    axios
      .get(`/api/detail?id=${this.userId}`)
      .then((res) => {
        this.userExpedition = res.data["Expedition"];
        console.log(this.userExpedition);
        this.userCard = res.data["Card"];
        this.userEngrave = res.data["Engrave"];
        this.userJewel = res.data["Jewel"];
        this.userLevel = res.data["Level"];
        this.userSkill = res.data["Tripod"];
      })
      .catch((err) => console.log(err));
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
  height: 100%;
  width: 100%;
  padding: 0 50px;
  /* background: blue; */
}
.head {
  /* background: violet; */
  max-width: 70%;
  min-width: 50%;
  margin: 40px auto;
}
</style>
