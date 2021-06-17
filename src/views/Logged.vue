<template>
  <div class="logged-container">
    <LoggedHeader :name="name"></LoggedHeader>
    <LoggedMain :lastDate="lastDate" @logout="logout"></LoggedMain>
  </div>
</template>

<script>
import LoggedHeader from "@/components/LoggedHeader.vue";
import LoggedMain from "@/views/LoggedMain.vue";

export default {
  name: "Logged",
  components: {
    LoggedHeader,
    LoggedMain,
  },
  data() {
    return {
      name: "",
      password: "",
    };
  },
  created() {
    const { name, password } = this.$route.params;
    if (name && password) {
      this.setUserInfoFromRoute(name, password);
    } else {
      this.setUserInfoFromStorage();
    }
  },
  methods: {
    /**
     * Set user credentials when route contains that info
     * @param {String} name
     * @param {String} password
     */
    setUserInfoFromRoute(name, password) {
      this.lastDate = new Date(
        this.getItemFromStorage(`${this.name}:${this.password}`)
      );
      this.name = name;
      this.password = password;
    },
    /**
     * Set user credentials when storage contains that info
     */
    setUserInfoFromStorage() {
      const logged = this.getItemFromStorage("logged");
      const [loggedName, loggedPassword] = logged.split(":");

      this.lastDate = new Date(this.getItemFromStorage(logged));
      this.name = loggedName;
      this.password = loggedPassword;
    },
    /**
     * Get item from localStorage
     * @param {String} key
     * @returns {Object} item
     */
    getItemFromStorage(key) {
      return localStorage.getItem(key);
    },
    /**
     * Set item in localStorage
     * @param {String} key
     * @param {String} value
     */
    setItemInStorage(key, value) {
      localStorage.setItem(key, value);
    },
    /**
     * Remove item in localStorage
     * @param {String} key
     */
    removeItemFromStorage(key) {
      localStorage.removeItem(key);
    },
    /**
     * Remove logged user, update last user login date and redirect to login
     */
    logout() {
      this.removeItemFromStorage("logged");
      this.setItemInStorage(`${this.name}:${this.password}`, new Date());
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped lang="scss">
.logged-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
