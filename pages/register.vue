<template>
  <div>
    <h2>Register</h2>
    <input
      placeholder="Name"
      v-model="form.name">
    <input
      type="email"
      placeholder="Email"
      v-model="form.email">
    <input
      type="password"
      placeholder="Password"
      v-model="form.password">
    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {}
  }),
  methods: {
    async register() {
      let jsonResponse = await this
        .$http.$post('api/users', this.form)
      if (jsonResponse && jsonResponse.success) {
        this.$router.push('/login')
      }
    }
  }
}
</script>
