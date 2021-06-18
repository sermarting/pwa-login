<template>
  <div class="counter__container">
    <div class="counter__item">
      <span class="counter__item-number">{{ days }}</span>
      <span>Days</span>
    </div>
    <div class="counter__item">
      <span class="counter__item-number">{{ hours }}</span>
      <span>Hours</span>
    </div>
    <div class="counter__item">
      <span class="counter__item-number">{{ minutes }}</span>
      <span>Minutes</span>
    </div>
    <div class="counter__item">
      <span class="counter__item-number">{{ seconds }}</span>
      <span>Seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  },
  watch: {
    date: {
      immediate: true,
      handler() {
        this.calculateValues();
        let intervalId = setInterval(() => {
          this.calculateValues();
        }, 1000);
        this.$emit("intervalId", intervalId);
      },
    },
  },
  methods: {
    /**
     * Calculate days, hours, minutes from seconds
     */
    calculateValues() {
      const diffSeconds = Math.abs(this.date - new Date()) / 1000;
      this.days = `0${Math.floor(diffSeconds / 60 / 60 / 24)}`.slice(-2);
      this.hours = `0${Math.floor((diffSeconds / 60 / 60) % 24)}`.slice(-2);
      this.minutes = `0${Math.floor((diffSeconds / 60) % 60)}`.slice(-2);
      this.seconds = `0${Math.floor(diffSeconds % 60)}`.slice(-2);
    },
  },
};
</script>

<style scoped lang="scss">
.counter__container {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 10px;
}

.counter__item {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 5px 10px;
}

.counter__item-number {
  font-size: 24px;
}
</style>
