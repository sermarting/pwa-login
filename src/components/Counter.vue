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
  computed: {
    /**
     * Computed to calculate days from date
     * @returns {String} Days
     */
    days() {
      return `0${Math.floor(this.diffInSeconds() / 60 / 60 / 24)}`.slice(-2);
    },
    /**
     * Computed to calculate hours from date
     * @returns {String} Hours
     */
    hours() {
      return `0${Math.floor((this.diffInSeconds() / 60 / 60) % 24)}`.slice(-2);
    },
    /**
     * Computed to calculate minutes from date
     * @returns {String} Minutes
     */
    minutes() {
      return `0${Math.floor((this.diffInSeconds() / 60) % 60)}`.slice(-2);
    },
    /**
     * Computed to calculate seconds from date
     * @returns {String} Seconds
     */
    seconds() {
      return `0${Math.floor(this.diffInSeconds() % 60)}`.slice(-2);
    },
  },
  methods: {
    /**
     * Calculate seconds between two dates
     * @returns {Number} seconds between two dates
     */
    diffInSeconds() {
      return Math.abs(this.date - new Date()) / 1000;
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
