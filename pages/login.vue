<template>
  <div>
    <h2>Login</h2>
    <input
      placeholder="Email"
      v-model="form.email">
    <input
      placeholder="Password"
      v-model="form.password">
    <button @click="login">
      Login
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {}
  }),
  methods: {
    async login() {
      const response = await
        this.$http.$post('api/login', this.form)
      if (response.token) {
        this.$store.commit('authUser', {
          name: this.form.name,
          email: this.form.email,
          token: response.token
        })
      }
      this.$router.push('/')
    }
  }
}
</script>
