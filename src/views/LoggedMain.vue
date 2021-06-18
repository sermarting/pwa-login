<template>
  <div class="main__container">
    <div class="main__container-counter">
      <p>The last time you accessed was:</p>
      <Counter :date="lastDate" @intervalId="setIntervalId"></Counter>
    </div>
    <div class="main__container-logout">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";

export default {
  name: "LoggedMain",
  components: {
    Counter,
  },
  props: {
    lastDate: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      intervalId: "",
    };
  },
  methods: {
    /**
     * Emits logout event
     * @emits logout
     */
    logout() {
      clearInterval(this.intervalId);
      this.$emit("logout");
    },
    /**
     * Set interval id
     * @param {String} intervalId
     */
    setIntervalId(intervalId) {
      this.intervalId = intervalId;
    },
  },
};
</script>
<style scoped lang="scss">
.main__container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.main__container-counter,
.main__container-logout {
  width: 100%;
  margin-bottom: 32px;
}

.main__container-right-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 758px) {
  .main__container {
    flex-direction: row;
  }

  .main__container-counter,
  .main__container-logout {
    width: 50%;
    padding: 10px;
  }
  .search-box-container {
    justify-content: flex-end;
  }
}
</style>
