<template>
  <div class="header__container">
    <img src="@/assets/login.png" />
    <span class="header__container-name"> Welcome, {{ name }} </span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #74c3ff;
  width: 100%;
}

img {
  width: 58px;
  margin: 10px 0;
}

.header__container-name {
  margin-right: 15px;
}
</style>
